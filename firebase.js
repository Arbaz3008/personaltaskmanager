import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBZ4roTxBRkkBRtHQT092QqyzmTXn3Sefw",
    authDomain: "snaktube-de51a.firebaseapp.com",
    projectId: "snaktube-de51a",
    storageBucket: "snaktube-de51a.firebasestorage.app",
    messagingSenderId: "172486800185",
    appId: "1:172486800185:web:2527e9a40802d7056d6ee8",
    measurementId: "G-GYXV5Q7L8Z"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);

