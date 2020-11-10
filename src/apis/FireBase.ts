import firebase from 'firebase/app';
import 'firebase/database';

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
  private firebase: firebase.database.Database;
  constructor() {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
      console.log('initializeApp');
    }
    this.firebase = firebase.database();
  }
  async getClickCounts(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.firebase.ref('/').on('value', function (data) {
        const result = data.toJSON() ?? {};
        resolve(result);
      });
    });
  }
  async increaseClickCount(id: string): Promise<void> {
    const target = this.firebase.ref(`/${id}`);
    const targetValue = await target.once('value');
    target.set(targetValue.val() + 1);
  }
}
export default new Firebase();
