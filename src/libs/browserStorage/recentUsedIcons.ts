import { Noticon } from '../../types';
import {
  BrowserStorage,
  BrowserStorageMapper,
  BrowserStorageKeyEnum,
} from './base';

class RecentUsedIconMapper implements BrowserStorageMapper<Noticon[]> {
  fromJson(json: any): Noticon[] {
    if (json === null) {
      return [];
    }
    const noticonArray: Noticon[] = JSON.parse(json);
    if (Array.isArray(noticonArray)) {
      return noticonArray
        .map((noticon) => ({
          id: noticon.id,
          title: noticon.title,
          imgUrl: noticon.imgUrl,
          keywords: noticon.keywords,
          date: noticon.date,
        }))
        .sort((a: Noticon, b: Noticon) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
    }
    return [];
  }

  toJson(target: Noticon[]): any {
    return JSON.stringify(target);
  }
}

export default new BrowserStorage(
  BrowserStorageKeyEnum.RECENT_USED,
  new RecentUsedIconMapper(),
  globalThis.localStorage,
);
