import { observable, action } from 'mobx';
import { Noticon } from '../types';
import * as API from '../apis';
import { isBrowser } from '../libs/utils';
import browserStorage from '../libs/browserStorage';

export interface IconStoreInterface {
  icons: Noticon[];
  recentUsedIcons: Noticon[];
  pushRecentUsedIcon: (newNoticon: Noticon) => Noticon[];
}

export default class IconStore implements IconStoreInterface {
  @observable icons: Noticon[];
  @observable recentUsedIcons: Noticon[];

  constructor(initialData?: IconStoreInterface) {
    this.icons = initialData?.icons ?? [];
    this.recentUsedIcons = initialData?.recentUsedIcons ?? [];
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
      this.icons = data;
    } catch (error) {
      console.error(error);
    }
  }

  @action
  pushRecentUsedIcon = (newNoticon: Noticon): Noticon[] => {
    this.recentUsedIcons = [
      {
        ...newNoticon,
        date: Date.now(),
      },
      ...this.recentUsedIcons.filter((noticon) => noticon.id !== newNoticon.id),
    ];
    return this.recentUsedIcons;
  };
}
