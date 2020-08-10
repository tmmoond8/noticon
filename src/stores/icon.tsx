import { observable } from 'mobx';
import { Noticon } from '../types';
import * as API from '../apis';
import { isBrowser } from '../libs/utils';

export interface IconStoreInterface {
  icons: Noticon[];
}

export default class IconStore implements IconStoreInterface {
  @observable icons: Noticon[];

  constructor(initialData?: IconStoreInterface) {
    this.icons = initialData?.icons ?? [];
    if (isBrowser()) {
      this.fetchIcons();
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
}
