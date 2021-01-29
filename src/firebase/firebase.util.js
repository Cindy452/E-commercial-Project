import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD7jma0yyNKhNIHBkZh0Jm3easp9v3B-k8",
    authDomain: "crow-db-4a0a2.firebaseapp.com",
    projectId: "crow-db-4a0a2",
    storageBucket: "crow-db-4a0a2.appspot.com",
    messagingSenderId: "199133894684",
    appId: "1:199133894684:web:83295519e28c55afaa27d9"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;