import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC5IwzUNtE5QbjTH_INVgT0042nKh04Lgk",
    authDomain: "crwn-db-b79ba.firebaseapp.com",
    databaseURL: "https://crwn-db-b79ba.firebaseio.com",
    projectId: "crwn-db-b79ba",
    storageBucket: "",
    messagingSenderId: "1098379889331",
    appId: "1:1098379889331:web:c737e6df548024df"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestone = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)
.then((result) => {
    // Success.
  }, (error) => {
    // Error.
  });

export default firebase;

