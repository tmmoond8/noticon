import { action, observable, computed } from 'mobx';
import {
  get
} from '../lib/dataRequest';
import { LoadingProps } from 'react-loading';
import storage from '../lib/storage';
import { SortMode, Noticon } from '../types';

type IconType = 'all' | 'logo' | 'normal';

const sortFn = {
  "date": (a: Noticon, b: Noticon) => {
    const aDate = a.date ? a.date : 0;
    const bDate = b.date ? b.date : 0;
    return aDate > bDate ? -1 : 1;
  },
  "alphabet": (a: Noticon, b: Noticon) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
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
  @observable logoIconList: Noticon[];
  @observable normalIconList: Noticon[];
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

  private bbbLoading = (iconList: any[]) => {
    if (iconList.length === 0) return;
    const _iconList: any[] = [];
    while(iconList.length > 0) {
      _iconList.push(iconList.pop());
    }
    const id = setInterval(() => {
      const chunk: any[] = [];
      let index = 0;
      let item = _iconList.pop();
      while(item && index < 24) {
        chunk.push(item);
        item = _iconList.pop();
      }
      this.logoIconList = this.logoIconList.concat(chunk);
      if(_iconList.length === 0) {
        clearInterval(id)
        this.loading = null;
      }
    }, 50)
  };

  private fetchIconData = async () => {
    const logoPromise = get('logo');
    this.loading = { type: "cubes"};
    this.sortMode = storage.getMode();
    const storedIcons =  storage.getIcons() || [];
    this.bbbLoading(storedIcons);
    
    let logoData;
    try {
      logoData = await logoPromise;
    } catch (err) {
      console.error(err);
    }

    if (this.logoIconList.length === 0) {
      this.bbbLoading(logoData);
    } else {
      this.logoIconList = logoData as any || [];
    }
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
  public get iconList(): Noticon[] {
    return this.logoIconList.sort(sortFn[this.sortMode])
  }

  @computed
  public get hitIconSet() {
    const searchRegExp = new RegExp(this.search, "i");
    return new Set(this.logoIconList.filter(i => (
      searchRegExp.test(i.title) || searchRegExp.test(i.keywords)
    )).map(i => i.id))
  }

  @action
  public unshiftIcon(icon: Noticon) {
    this.logoIconList = [icon, ...this.logoIconList];
  }

  @action
  public iconScaleOut = () => {
    this.iconListMax += 24;
  }
}

export default CommonStore;