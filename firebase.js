import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBYje8kPw3uhHc0sz1xanXAMrhZhP7NWro",
    authDomain: "appointments-2e03b.firebaseapp.com",
    projectId: "appointments-2e03b",
    storageBucket: "appointments-2e03b.appspot.com",
    messagingSenderId: "737763451347",
    appId: "1:737763451347:web:c45ba177d5f3af123fcf26"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
  
export {auth};
export default db;
