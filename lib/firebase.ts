import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDQ8o-U8iOPM3KpjvCsvgts81WiHbR2omk",
  authDomain: "nextfire-83d97.firebaseapp.com",
  projectId: "nextfire-83d97",
  storageBucket: "nextfire-83d97.appspot.com",
  messagingSenderId: "1030607860237",
  appId: "1:1030607860237:web:c345b0ea100e72d1a05b44",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
