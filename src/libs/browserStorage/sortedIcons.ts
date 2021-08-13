import { Noticon } from '../../types';
import {
  BrowserStorage,
  BrowserStorageMapper,
  BrowserStorageKeyEnum,
} from './base';

class SortedIconMapper implements BrowserStorageMapper<Noticon[]> {
  fromJson(json: any): Noticon[] {
    if (json === null) {
      return [];
    }
    const noticonArray: Noticon[] = JSON.parse(json);
    if (Array.isArray(noticonArray)) {
      return noticonArray;
    }
    return [];
  }

  toJson(target: Noticon[]): any {
    return JSON.stringify(target);
  }
}

export default new BrowserStorage(
  BrowserStorageKeyEnum.SORTED_ICON,
  new SortedIconMapper(),
  globalThis.localStorage,
);
