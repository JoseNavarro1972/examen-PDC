import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBGgDkwFZGmcss0oD2nUQ5b7wWkl_2BcRs",
    authDomain: "examen-ecf0b.firebaseapp.com",
    projectId: "examen-ecf0b",
    storageBucket: "examen-ecf0b.firebasestorage.app",
    messagingSenderId: "1087250981047",
    appId: "1:1087250981047:web:e79f3486551442ff1fed32",
    measurementId: "G-WZTDSJG36J"
  };
  
 const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
