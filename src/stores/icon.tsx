import { observable, action, computed } from 'mobx';
import { Noticon } from '../types';
import * as API from '../apis';
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
}

export default class IconStore implements IconStoreInterface {
  @observable originIcons: Noticon[];
  @observable recentUsedIcons: Noticon[];
  @observable isLoaded: boolean;
  @observable search: string;

  constructor(initialData?: IconStoreInterface) {
    this.originIcons = initialData?.originIcons ?? [];
    this.recentUsedIcons = initialData?.recentUsedIcons ?? [];
    this.search = '';
    this.isLoaded = false;
    if (isBrowser()) {
      this.fetchIcons();
      this.recentUsedIcons = browserStorage.recentUsedIcons.get();
    }
  }

  async fetchIcons() {
    try {
      const {
        data: { data },
      } = await API.get();
      const sortByDate = (a: Noticon, b: Noticon) => {
        for (let i = 0; i < a.date.length; i++) {
          if (a.date.charCodeAt(i) >= b.date.charCodeAt(i)) {
            return -1;
          }
        }
        return 1;
      };
      data.sort(sortByDate);
      data.forEach((icon) => {
        icon.title = icon.title.toString();
      });
      this.originIcons = data;

      this.isLoaded = true;
    } catch (error) {
      console.error(error);
    }
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
      return this.originIcons;
    }
    return this.originIcons.filter(
      (icon) =>
        icon.title.includes(this.search) || icon.keywords.includes(this.search),
    );
  }

  @action
  unshightOriginIcon = (newNoticon: Noticon) => {
    this.originIcons = [newNoticon, ...this.originIcons];
  };
}
