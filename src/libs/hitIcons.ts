import hitIconsStorage from './browserStorage/hitIcons';

let firebase: any = null;

const hitMap = {
  getCounts: () => {
    if (firebase === null) {
      return Promise.resolve(hitIconsStorage.get());
    } else {
      return firebase.getClickCounts();
    }
  },
  increase: (id: string) => {
    if (firebase === null) {
      return Promise.resolve(undefined);
    } else {
      return firebase.increaseClickCount(id);
    }
  },
}

if ('navigator' in globalThis && globalThis.navigator.onLine) {
  import("../apis/FireBase").then(({ default: FireBase }) => {
    firebase = FireBase;
  })
}

export default hitMap;