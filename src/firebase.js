import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4vHsvnl4W17KWRsnJuy4Lq9m652dklss",
  authDomain: "final-chat-8805a.firebaseapp.com",
  projectId: "final-chat-8805a",
  storageBucket: "final-chat-8805a.appspot.com",
  messagingSenderId: "241811744106",
  appId: "1:241811744106:web:3945a03a6f045ceaac3113"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
