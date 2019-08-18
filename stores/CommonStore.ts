import { action, observable } from 'mobx';

interface ILogoIcon {
  id: string;
  title: string;
  imgUrl: string;
  description: string;
  keywords: string[];
}

const defaultProps = {
  search: '',
  logoIconList: []
}

class CommonStore {
  @observable search: string;
  @observable logoIconList: ILogoIcon[];

  constructor(props= defaultProps) {
    this.search = props.search;
    this.logoIconList = props.logoIconList;
  }

  @action
  public setSearch = (search: string) => {
    this.search = search;
  }
}

export default CommonStore;