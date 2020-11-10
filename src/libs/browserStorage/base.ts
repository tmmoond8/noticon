export enum BrowserStorageKeyEnum {
  RECENT_USED = 'RECENT_USED',
  HIT_ICONS = 'HIT_ICONS',
}

export interface BrowserStorageMapper<E> {
  fromJson(json: any): E;
  toJson(target: E): any;
}

export type BrowserStorageKey = typeof BrowserStorageKeyEnum[keyof typeof BrowserStorageKeyEnum];

export class BrowserStorage<E> {
  private key: BrowserStorageKey;
  private mapper: BrowserStorageMapper<E>;
  private browserStorageHelper: Storage;

  constructor(
    key: BrowserStorageKey,
    mapper: BrowserStorageMapper<E>,
    browserStorageHelper: Storage,
  ) {
    this.key = key;
    this.mapper = mapper;
    this.browserStorageHelper = browserStorageHelper;
  }

  get(): E {
    return this.mapper.fromJson(this.browserStorageHelper.getItem(this.key));
  }

  set(target: E) {
    this.browserStorageHelper.setItem(this.key, this.mapper.toJson(target));
  }

  clear() {
    this.browserStorageHelper.removeItem(this.key);
  }
}
