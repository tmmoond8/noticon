import { action, observable, computed } from 'mobx';
import {
  get
} from '../lib/dataRequest';
import { LoadingProps } from 'react-loading';
import storage from '../lib/storage';
import { SortMode } from '../types';

type IconType = 'all' | 'logo' | 'normal';

const sortFn = {
  "date": (a: IIcon, b: IIcon) => {
    const aDate = a.date ? a.date : 0;
    const bDate = b.date ? b.date : 0;
    return aDate > bDate ? -1 : 1;
  },
  "alphabet": (a: IIcon, b: IIcon) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
}

interface IIcon {
  id: string;
  title: string;
  imgUrl: string;
  description: string;
  keywords: string;
  sortMode: SortMode;
  date?: number;
}

const defaultProps = {
  search: '',
  logoIconList: [],
  normalIconList: [],
  filter: 'all',
  loading: null,
  sortMode: "date",
  iconListMax: 73,
}

class CommonStore {
  @observable search: string;
  @observable logoIconList: IIcon[];
  @observable normalIconList: IIcon[];
  @observable filter: IconType;
  @observable loading: LoadingProps | null;
  @observable sortMode: SortMode;
  @observable iconListMax: number;

  constructor(props= defaultProps) {
    this.search = props.search;
    this.loading = props.loading;
    this.logoIconList = props.logoIconList;
    this.normalIconList = props.normalIconList;
    this.filter = props.filter as IconType;
    this.sortMode = props.sortMode as SortMode;
    this.iconListMax = props.iconListMax;
    this.fetchIconData();
  }

  private bbbLoading = (iconList) => {
    const _iconList = [ ...iconList ];
    const id = setInterval(() => {
      const chunk: any[] = [];
      let index = 0;
      let item = _iconList.pop();
      while(item && index < 100) {
        chunk.push(item);
        item = _iconList.pop();
      }
      this.logoIconList = this.logoIconList.concat(chunk);
      if(_iconList.length === 0) {
        clearInterval(id)
        this.loading = null;
      }
    }, 600)
  };

  private fetchIconData = async () => {
    const logoPromise = get('logo');
    this.loading = { type: "cubes"};
    this.sortMode = storage.getMode();
    const storedIcons =  storage.getIcons() || [];
    storedIcons.sort((a: IIcon, b: IIcon) => {
      const aDate = a.date ? a.date : 0;
      const bDate = b.date ? b.date : 0;
      return aDate < bDate ? -1 : 1;
    });
    this.bbbLoading(storedIcons);

    const timeoutPromise = new Promise(async (resolve, reject) => {
      const id = setTimeout(() => {
        clearTimeout(id);
        resolve(this.logoIconList);
      }, 5000);
      const logoData = await logoPromise;
      clearTimeout(id);
      resolve(logoData);
    })

    const logoData = await timeoutPromise;
    this.logoIconList = logoData as any || [];
    this.normalIconList = [];
    storage.setIcons(logoData);
    this.loading = null;
  }

  @action
  public setLoading = (loading: LoadingProps | null) => {
    this.loading= loading;
  }

  @action
  public setSearch = (search: string) => {
    this.search = search;
  }

  @action
  public toggleSortMode = () => {
    this.sortMode = this.sortMode === "date" ? "alphabet" : "date";
  }

  @computed
  public get iconList() {
    if (this.filter === 'normal') {
      return this.normalIconList;
    } else if (this.filter === 'logo') {
      return this.logoIconList;
    }
    return [...this.logoIconList, ...this.normalIconList]
      .sort(sortFn[this.sortMode])
  }

  @computed
  public get hitIconSet() {
    const searchRegExp = new RegExp(this.search, "i");
    return new Set(this.logoIconList.filter(i => (
      searchRegExp.test(i.title) || searchRegExp.test(i.keywords)
    )).map(i => i.id))
  }

  @action
  public unshiftIcon(icon: IIcon) {
    this.logoIconList = [icon, ...this.logoIconList];
  }

  @action
  public iconScaleOut = () => {
    this.iconListMax += 24;
  }
}

export default CommonStore;