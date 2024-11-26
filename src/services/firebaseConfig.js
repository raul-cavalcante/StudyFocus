import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDqup0oL9qT7bohQYQlzEEnT_lGJFI7SDg",
  authDomain: "study-focus-a9430.firebaseapp.com",
  projectId: "study-focus-a9430",
  storageBucket: "study-focus-a9430.firebasestorage.app",
  messagingSenderId: "530043967920",
  appId: "1:530043967920:web:01895314f0728a59dede75",
  measurementId: "G-WFF55S6D56"
};





const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);