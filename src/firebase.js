// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDAzQrfLuVJw-8dS0AIeyF1E9g8Vhut4vU",
    authDomain: "slack-clone-ccf0c.firebaseapp.com",
    projectId: "slack-clone-ccf0c",
    storageBucket: "slack-clone-ccf0c.appspot.com",
    messagingSenderId: "181122649938",
    appId: "1:181122649938:web:89cea7fee523404ba2348b",
    measurementId: "G-K6WBW9PCEK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;






