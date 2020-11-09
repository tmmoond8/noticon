// import firebase from 'firebase/app';
// import 'firebase/database';
const firebase  = require('firebase/app');


const storage = (() => {
  const NOTICON_HIT_KEY = 'NOTICON_HIT_KEY';
  let init = false;
  return {
    save(data: Record<string, number>) {
      if (init) return;
      localStorage.setItem(NOTICON_HIT_KEY, JSON.stringify(data));
    },
    load() {
      JSON.parse(localStorage.getItem(NOTICON_HIT_KEY) ?? "{}");
    }
  }
})()

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};


class Firebase {
  // private firebase: firebase.database.Database | null;
  constructor() {
    try {
      throw Error('error');
      // if (firebase.apps.length === 0) {
        // firebase.initializeApp(firebaseConfig);
        // console.log('initializeApp');
      // }
      // this.firebase = firebase.database();
      // console.log('firebase');
    } catch (error) {
      console.error(error);
      this.firebase = null;
    }
    
  }
  async getClickCounts(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        if (this.firebase === null) throw Error('null type');
        this.firebase.ref('/').on('value', function (data) {
          const result = data.toJSON() ?? {};
          storage.save(result as Record<string, number>);
          console.log('getClickCounts');
          resolve(result);
        });
      } catch (error) {
        console.log('getClickCounts error', storage.load());
        return Promise.resolve(storage.load());
      }
    });
  }
  async increaseClickCount(id: string): Promise<void> {
    try {
      if (this.firebase === null) throw Error('null type');
      const target = this.firebase.ref(`/${id}`);
      const targetValue = await target.once('value');
      target.set(targetValue.val() + 1);
    } catch (error) {
      console.error(error);
    }
  }
}
export default new Firebase();
