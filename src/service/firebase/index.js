import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDZVySa-DDLk1fVreVFri1ZVBvpqtvvcGE",
  authDomain: "comision34695.firebaseapp.com",
  projectId: "comision34695",
  storageBucket: "comision34695.appspot.com",
  messagingSenderId: "541391664991",
  appId: "1:541391664991:web:03f9c64c902cdc664328ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);