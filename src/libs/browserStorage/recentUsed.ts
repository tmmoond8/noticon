import { Noticon } from '../../types';
import {
  BrowserStorage,
  BrowserStorageMapper,
  BrowserStorageKeyEnum,
} from './base';

class RecentUsedMapper implements BrowserStorageMapper<Noticon[]> {
  fromJson(json: any): Noticon[] {
    if (json === null) {
      return [];
    }
    const noticonArray: Noticon[] = JSON.parse(json);
    if (Array.isArray(noticonArray)) {
      return noticonArray.map((noticon) => ({
        id: noticon.id,
        title: noticon.id,
        imgUrl: noticon.imgUrl,
        keywords: noticon.keywords,
        date: noticon.date,
      }));
    }
    return [];
  }

  toJson(target: Noticon[]): any {
    return JSON.stringify(target);
  }
}

export default new BrowserStorage(
  BrowserStorageKeyEnum.RECENT_USED,
  new RecentUsedMapper(),
  localStorage,
);
