import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBTwydvBqJRouBfWOue2lD9pvF4CFGJbqg",
  authDomain: "interview-prep-1d37b.firebaseapp.com",
  projectId: "interview-prep-1d37b",
  storageBucket: "interview-prep-1d37b.firebasestorage.app",
  messagingSenderId: "893815169691",
  appId: "1:893815169691:web:90373898167716c7e11c3e",
  measurementId: "G-986D389NEX"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);