export enum BrowserStorageKeyEnum {
  RECENT_USED = 'RECENT_USED',
  SORTED_ICON = 'SORTED_ICON'
}

export interface BrowserStorageMapper<E> {
  fromJson(json: any): E;
  toJson(target: E): any;
}

const spyBrowserStorage = {
  getItem: () => (console.log('not initialized'), '[]'),
  setItem: () => console.log('not initialized'),
  removeItem: () => console.log('not initialized'),
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
    this.browserStorageHelper = browserStorageHelper ?? spyBrowserStorage;
  }

  get(): E {
    return this.mapper.fromJson(this.browserStorageHelper.getItem(this.key));
  }

  set(target: E, temporary: boolean = false) {
    this.browserStorageHelper.setItem(this.key, this.mapper.toJson(target));
  }

  clear() {
    this.browserStorageHelper.removeItem(this.key);
  }
}
