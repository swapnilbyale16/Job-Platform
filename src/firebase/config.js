// firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAraz1uip-T1wBmjpvpzjSluWjq6Km6PcU",
  authDomain: "job-search-platform-2f5c6.firebaseapp.com",
  projectId: "job-search-platform-2f5c6",
  storageBucket: "job-search-platform-2f5c6.firebasestorage.app",
  messagingSenderId: "552942086368",
  appId: "1:552942086368:web:7215d0dbb71d7caa8d4885",
  measurementId: "G-WKMZ6LL27Q"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
