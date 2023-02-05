// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf2xPWPQQ4CIcplHCWyP6O_ERWPlgIoO4",
  authDomain: "la-glotoneria.firebaseapp.com",
  projectId: "la-glotoneria",
  storageBucket: "la-glotoneria.appspot.com",
  messagingSenderId: "241429711268",
  appId: "1:241429711268:web:563f3a8fab5c4a0dd55931"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);