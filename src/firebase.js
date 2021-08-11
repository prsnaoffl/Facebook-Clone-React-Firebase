import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyAlbWtQjKxm44YYjQHzquyi9jARgZq3Saw",
    authDomain: "facebook-fb-clone.firebaseapp.com",
    projectId: "facebook-fb-clone",
    storageBucket: "facebook-fb-clone.appspot.com",
    messagingSenderId: "368643746047",
    appId: "1:368643746047:web:61fe9271877bdff24504ca"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);   

const db= firebaseApp.firestore();
const auth= firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage= firebase.storage();
const timestamp= firebase.firestore.FieldValue.serverTimestamp();

export { db, provider, auth, storage,timestamp};
