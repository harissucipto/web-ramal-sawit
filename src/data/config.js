import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCYjSBD60dymIdn5Z-SsXyA_Rs36bk4sMQ",
  authDomain: "siskawit-a82be.firebaseapp.com",
  databaseURL: "https://siskawit-a82be.firebaseio.com",
  projectId: "siskawit-a82be",
  storageBucket: "siskawit-a82be.appspot.com",
  messagingSenderId: "1081650455890",
  appId: "1:1081650455890:web:b4c868287f9acf36"
};

firebase.initializeApp(config);

export default firebase;

export const auth = firebase.auth;
export const database = firebase.database();
