// import firebase from 'firebase'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrf65OWVoO0FyeqXzxiyZPiLXb8Sagwv4",
    authDomain: "olxclone-777e0.firebaseapp.com",
    projectId: "olxclone-777e0",
    storageBucket: "olxclone-777e0.appspot.com",
    messagingSenderId: "680926938724",
    appId: "1:680926938724:web:5973443a3d9ac3c344c171",
    measurementId: "G-6MMKXWFEP1"
  };

  export default firebase.initializeApp(firebaseConfig)