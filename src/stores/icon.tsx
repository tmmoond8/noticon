import { observable, action, computed } from 'mobx';
import { Noticon } from '../types';
import APIS from '../apis';
import { isBrowser } from '../libs/utils';
import browserStorage from '../libs/browserStorage';

export interface IconStoreInterface {
  originIcons: Noticon[];
  icons: Noticon[];
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
        this.originIcons = iconsResponse.data.data.sort(
          (a: Noticon, b: Noticon) => {
            return clicksResponse[b.id] - clicksResponse[a.id];
          },
        );
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
    if (this.search.length === 0) {
      return this.originIcons.sort((a: Noticon, b: Noticon) => {
        return 1;
      });
    }
    return this.originIcons.filter(
      (icon) =>
        icon.title.includes(this.search) || icon.keywords.includes(this.search),
    );
  }

  @computed
  get latestIcons() {
    return [...this.originIcons].sort((a: Noticon, b: Noticon) => {
      for (let i = 0; i < a.date.length; i++) {
        if (a.date.charCodeAt(i) >= b.date.charCodeAt(i)) {
          return -1;
        }
      }
      return 1;
    });
  }

  @action
  unshightOriginIcon = (newNoticon: Noticon) => {
    this.originIcons = [newNoticon, ...this.originIcons];
  };
}
