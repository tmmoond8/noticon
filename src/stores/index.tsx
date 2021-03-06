import { useContext } from 'react';
import { MobXProviderContext, observer as _observer } from 'mobx-react';
import IconStore, { IconStoreInterface } from './icon';
import UiStore, { UiStoreInterface } from './ui';
import { isServer } from '../libs/utils';

export interface Stores {
  icon: IconStoreInterface;
  ui: UiStoreInterface;
}

export class RootStore implements Stores {
  icon: IconStoreInterface;
  ui: UiStoreInterface;

  constructor(initialData?: Stores) {
    this.icon = new IconStore(initialData?.icon);
    this.ui = new UiStore(initialData?.ui);
  }
}

export const getStore = (() => {
  let rootStore: Stores;
  return (initialData?: Stores) => {
    if (isServer()) {
      rootStore = new RootStore(initialData);
      return new RootStore(initialData);
    }
    if (!rootStore) {
      rootStore = new RootStore(initialData);
    }
    return rootStore;
  };
})();

export const useStore = () => useContext(MobXProviderContext) as Stores;

export const observer = _observer;
