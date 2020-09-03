import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDB3GLlmL3rdyQY3NAHwaQH26c9V4DNxGM',
  authDomain: 'noticon-7516.firebaseapp.com',
  databaseURL: 'https://noticon-7516.firebaseio.com',
  projectId: 'noticon-7516',
  storageBucket: 'noticon-7516.appspot.com',
  messagingSenderId: '376405203261',
  appId: '1:376405203261:web:d591826b6b51384bfb4d54',
  measurementId: 'G-VD2Z17Y5QQ',
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

class Firebase {
  private firebase: firebase.database.Database;
  constructor() {
    this.firebase = firebase.database();
  }
  async getClickCounts(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.firebase.ref('/').on('value', function (data) {
        resolve(data.toJSON() ?? {});
      });
    });
  }
  async increase(id: string, score: number): Promise<void> {
    const value = await this.firebase.ref(`/${id}`).once('value');
    console.log(value);
  }
}
export default new Firebase();
