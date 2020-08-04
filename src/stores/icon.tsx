import { observable, computed, action } from 'mobx';
import { Noticon } from '../types';
import * as API from '../apis';

export interface IconStoreInterface {
  icons: Noticon[];
}

export default class IconStore implements IconStoreInterface {
  @observable icons: Noticon[];

  constructor(initialData?: IconStoreInterface) {
    this.icons = initialData?.icons ?? [];
    if (process.browser) {
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
