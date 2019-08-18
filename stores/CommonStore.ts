import { action, observable, computed } from 'mobx';
import {
  get
} from '../lib/dataRequest';

type IconType = 'logo' | 'normal';

interface IIcon {
  id: string;
  title: string;
  imgUrl: string;
  description: string;
  keywords: string;
}

const defaultProps = {
  search: '',
  logoIconList: [],
  normalIconList: [],
  filter: 'logo',
}

class CommonStore {
  @observable search: string;
  @observable logoIconList: IIcon[];
  @observable normalIconList: IIcon[];
  @observable filter: IconType;

  constructor(props= defaultProps) {
    this.search = props.search;
    this.logoIconList = props.logoIconList;
    this.normalIconList = props.normalIconList;
    this.filter = props.filter as IconType;
    this.fetchIconData();
  }

  private fetchIconData = () => {
    get('logo').then((data) => {
      this.logoIconList = data;
    }, (error) => {
      console.error(error);
    });
  }

  @action
  public setSearch = (search: string) => {
    this.search = search;
  }

  @computed
  public get iconList() {
    if (this.filter === 'normal') {
      return this.normalIconList;
    }
    return this.logoIconList;
  }

  @computed
  public get hitIconSet() {
    const searchRegExp = new RegExp(this.search);
    return new Set(this.iconList.filter(i => (
      searchRegExp.test(i.title) || searchRegExp.test(i.keywords)
    )).map(i => i.id))
  }
}

export default CommonStore;