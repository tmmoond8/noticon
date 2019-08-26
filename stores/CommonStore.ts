import { action, observable, computed } from 'mobx';
import {
  get
} from '../lib/dataRequest';
import { LoadingProps } from 'react-loading';

type IconType = 'all' | 'logo' | 'normal';

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
  filter: 'all',
  loading: null,
}

class CommonStore {
  @observable search: string;
  @observable logoIconList: IIcon[];
  @observable normalIconList: IIcon[];
  @observable filter: IconType;
  @observable loading: LoadingProps | null;

  constructor(props= defaultProps) {
    this.search = props.search;
    this.loading = props.loading;
    this.logoIconList = props.logoIconList;
    this.normalIconList = props.normalIconList;
    this.filter = props.filter as IconType;
    this.fetchIconData();
  }

  private fetchIconData = async () => {
    const logoPromise = get('logo');
    const normalPromise = get('normal');
    this.loading = { type: "cubes"};

    const logoData = await logoPromise;
    const normalData = await normalPromise;

    this.logoIconList = logoData || [];
    this.normalIconList = normalData || [];

    this.loading = null;
  }

  @action
  public setLoading = (loading: LoadingProps) => {
    this.loading= loading;
  }

  @action
  public setSearch = (search: string) => {
    this.search = search;
  }

  @computed
  public get iconList() {
    if (this.filter === 'normal') {
      return this.normalIconList;
    } else if (this.filter === 'logo') {
      return this.logoIconList;
    }
    return [...this.logoIconList, ...this.normalIconList]
      .sort((a: IIcon, b: IIcon) => a.title > b.title ? 1 : -1)
  }

  @computed
  public get hitIconSet() {
    const searchRegExp = new RegExp(this.search);
    return new Set(this.iconList.filter(i => (
      searchRegExp.test(i.title) || searchRegExp.test(i.keywords)
    )).map(i => i.id))
  }

  @action
  public unshiftIcon(icon: IIcon) {
    this.logoIconList = [icon, ...this.logoIconList];
  }
}

export default CommonStore;