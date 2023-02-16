import firebase from 'firebase';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyCHWKjnTyBp88Q-VFtvTC7Q_sKKsRJNtoM',
    authDomain: 'perizinansantri-6e4de.firebaseapp.com',
    databaseURL:
      'https://perizinansantri-6e4de-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'perizinansantri-6e4de',
    storageBucket: 'perizinansantri-6e4de.appspot.com',
    messagingSenderId: '714189516256',
    appId: '1:714189516256:web:3d80738bed26c6e3664f85',
  });
}

const FIREBASE = firebase;

export default FIREBASE;
