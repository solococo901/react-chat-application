import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "supichat-26147.firebaseapp.com",
  projectId: "supichat-26147",
  storageBucket: "supichat-26147.appspot.com",
  messagingSenderId: "94127029306",
  appId: "1:94127029306:web:1927f4643d689e6d8a4903"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()

