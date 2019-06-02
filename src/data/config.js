import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDPtF-qoGpqSANEw308x6kS2dHL0AjUuqU',
  authDomain: 'siskawit.firebaseapp.com',
  databaseURL: 'https://siskawit.firebaseio.com',
  projectId: 'siskawit',
  storageBucket: 'siskawit.appspot.com',
  messagingSenderId: '1085252310862'
};

firebase.initializeApp(config);

export default firebase;

export const auth = firebase.auth;
export const database = firebase.database();
