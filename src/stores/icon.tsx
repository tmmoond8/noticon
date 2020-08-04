import { observable, computed, action } from 'mobx';

export interface IconStoreInterface {
  test: string;
}

export default class IconStore implements IconStoreInterface {
  @observable test: string;
  constructor() {
    this.test = 'foo';
  }
}
