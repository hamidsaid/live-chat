import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCTjh2ukopkAIQgf0b8PTXzlJkyZ_f-uPI",
    authDomain: "live-chat-25146.firebaseapp.com",
    projectId: "live-chat-25146",
    storageBucket: "live-chat-25146.appspot.com",
    messagingSenderId: "979751324937",
    appId: "1:979751324937:web:3e2275c22ed141ddd3d7d8",
    measurementId: "G-K8FD72YPPX"
};

//init firebase
firebase.initializeApp(firebaseConfig);
//init firestore
const projectFirestore = firebase.firestore();
//init auth
const projectAuth = firebase.auth()
//timestamp for use in the db createdAt property
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { projectFirestore, projectAuth, timestamp}