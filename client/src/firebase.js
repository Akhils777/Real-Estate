// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-f2bc6.firebaseapp.com",
  projectId: "real-estate-f2bc6",
  storageBucket: "real-estate-f2bc6.appspot.com",
  messagingSenderId: "403749049200",
  appId: "1:403749049200:web:15c27265c3b92b5cabf5b5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);