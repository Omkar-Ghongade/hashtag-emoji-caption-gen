import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: import.meta.env.VITE_firebase_api,
    authDomain: "capestone---2024.firebaseapp.com",
    projectId: "capestone---2024",
    storageBucket: "capestone---2024.appspot.com",
    messagingSenderId: "219814978192",
    appId: "1:219814978192:web:690ecd33133658ee03ae15"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);