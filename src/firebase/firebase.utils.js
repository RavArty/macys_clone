import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAvZjDC76Q9sEEhgEwz_rzk2ALgFwwzmMM",
    authDomain: "macys-clone.firebaseapp.com",
    databaseURL: "https://macys-clone.firebaseio.com",
    projectId: "macys-clone",
    storageBucket: "",
    messagingSenderId: "809463299419",
    appId: "1:809463299419:web:c553c6c629f501ff38ae7e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;