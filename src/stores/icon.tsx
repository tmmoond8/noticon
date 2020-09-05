import { observable, action, computed } from 'mobx';
import { Noticon } from '../types';
import APIS from '../apis';
import { isBrowser } from '../libs/utils';
import browserStorage from '../libs/browserStorage';

export interface IconStoreInterface {
  originIcons: Noticon[];
  icons: Noticon[];
  latestIcons: Noticon[];
  searchedIcons: Noticon[];
  recentUsedIcons: Noticon[];
  pushRecentUsedIcon: (newNoticon: Noticon) => Noticon[];
  isLoaded: boolean;
  search: string;
  unshightOriginIcon: (icon: Noticon) => void;
  clickCounts: Record<string, number>;
}

export default class IconStore implements IconStoreInterface {
  @observable originIcons: Noticon[];
  @observable recentUsedIcons: Noticon[];
  @observable isLoaded: boolean;
  @observable search: string;
  @observable clickCounts: Record<string, number>;

  constructor(initialData?: IconStoreInterface) {
    this.originIcons = initialData?.originIcons ?? [];
    this.clickCounts = initialData?.clickCounts ?? {};
    this.recentUsedIcons = initialData?.recentUsedIcons ?? [];
    this.search = '';
    this.isLoaded = false;
    if (isBrowser()) {
      this.fetchIcons();
      this.recentUsedIcons = browserStorage.recentUsedIcons.get();
    }
  }

  async fetchIcons() {
    Promise.all([APIS.SpreadSheet.get(), APIS.FireBase.getClickCounts()]).then(
      ([iconsResponse, clicksResponse]) => {
        this.originIcons = iconsResponse.data.data.map((icon) => ({
          ...icon,
          title: icon.title.toString(),
        }));
        this.clickCounts = clicksResponse;
        this.isLoaded = true;
      },
    );
  }

  @action
  pushRecentUsedIcon = (newNoticon: Noticon): Noticon[] => {
    this.recentUsedIcons = [
      {
        ...newNoticon,
        date: Date.now().toString(),
      },
      ...this.recentUsedIcons.filter((noticon) => noticon.id !== newNoticon.id),
    ];
    return this.recentUsedIcons;
  };

  @computed
  get icons() {
    return this.originIcons.sort((a: Noticon, b: Noticon) => {
      return (this.clickCounts[b.id] ?? 0) - (this.clickCounts[a.id] ?? 0);
    });
  }

  @computed
  get latestIcons() {
    const latest = [...this.originIcons].sort((a: Noticon, b: Noticon) => {
      for (let i = 0; i < a.date.length; i++) {
        if (a.date.charCodeAt(i) >= b.date.charCodeAt(i)) {
          return -1;
        }
      }
      return 1;
    });
    return latest.slice(0, 12);
  }

  @computed
  get searchedIcons() {
    return this.originIcons.filter(
      (icon) =>
        icon.title
          .toLocaleLowerCase()
          .includes(this.search.toLocaleLowerCase()) ||
        icon.keywords
          .toLocaleLowerCase()
          .includes(this.search.toLocaleLowerCase()),
    );
  }

  @action
  unshightOriginIcon = (newNoticon: Noticon) => {
    this.originIcons = [newNoticon, ...this.originIcons];
  };
}
