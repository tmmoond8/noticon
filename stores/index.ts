
import { useStaticRendering } from 'mobx-react';
import CommonStore from './CommonStore';

const isServer = !process.browser;
useStaticRendering(isServer);

let store: any = null

class Store {
  public commonStore: CommonStore;

  constructor(isServer: boolean, initialData) {
    this.commonStore = new CommonStore(initialData ? initialData.commonStore : undefined);
  }
}

export function initializeStore(initialData) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return new Store(isServer, initialData)
  }
  if (store === null) {
    store = new Store(isServer, initialData)
  }
  return store
}