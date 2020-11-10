import {
  BrowserStorage,
  BrowserStorageMapper,
  BrowserStorageKeyEnum,
} from './base';

type HitMap = Record<string, number>;

class HitIconMapper implements BrowserStorageMapper<HitMap> {
  fromJson(json: any): HitMap {
    if (json === null) {
      return {};
    }
    const hitMap: HitMap = JSON.parse(json);
    if (typeof hitMap === 'object') {
      return hitMap;
    }
    return {};
  }

  toJson(target: HitMap): any {
    return JSON.stringify(target);
  }
}

export default new BrowserStorage(
  BrowserStorageKeyEnum.RECENT_USED,
  new HitIconMapper(),
  globalThis.localStorage,
);
