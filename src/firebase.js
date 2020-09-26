// firebase.js
import firebase from "firebase/app";
import "firebase/database";

// initializing Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCZl8jhHc9cCv4XWDc_ToMCmrTET3-A8rY",
    authDomain: "sunday-homework.firebaseapp.com",
    databaseURL: "https://sunday-homework.firebaseio.com",
    projectId: "sunday-homework",
    storageBucket: "sunday-homework.appspot.com",
    messagingSenderId: "1069170856330",
    appId: "1:1069170856330:web:edc69f388f24f7f27fb873",
};

firebase.initializeApp(firebaseConfig);

// this exports the CONFIGURED version of firebase
export default firebase;
