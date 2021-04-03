import firebase from 'firebase/app';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD5WK4ZpPHyTSfsZpo7kDl_9cl4GHFbRUw",
    authDomain: "fb-rodada-react.firebaseapp.com",
    projectId: "fb-rodada-react",
    storageBucket: "fb-rodada-react.appspot.com",
    messagingSenderId: "554748337951",
    appId: "1:554748337951:web:f5a08b8aec76b7226d1a2a"
};
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();

