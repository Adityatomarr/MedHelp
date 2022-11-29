import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZP8rVMcAf2iO5sKKxu9DBb8cOFV-1t-8",
  authDomain: "medhelp-261db.firebaseapp.com",
  projectId: "medhelp-261db",
  storageBucket: "medhelp-261db.appspot.com",
  messagingSenderId: "475228386669",
  appId: "1:475228386669:web:8ee371b90ba88933c79664"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
