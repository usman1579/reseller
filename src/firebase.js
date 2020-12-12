// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAjxxRTLJfbUPIKldxiDxBXw8A0hWcleE4",
    authDomain: "quran-app-e5948.firebaseapp.com",
    databaseURL: "https://quran-app-e5948.firebaseio.com",
    projectId: "quran-app-e5948",
    storageBucket: "quran-app-e5948.appspot.com",
    messagingSenderId: "477489505654",
    appId: "1:477489505654:web:369244277e8a8a8b79c657"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;