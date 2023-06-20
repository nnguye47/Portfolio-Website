// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKhzFylqkiFXIq98efYb7Iz9cg89YQTdk",
  authDomain: "portfolio-37ca1.firebaseapp.com",
  projectId: "portfolio-37ca1",
  storageBucket: "portfolio-37ca1.appspot.com",
  messagingSenderId: "1074990322217",
  appId: "1:1074990322217:web:f02846db1760009af58238",
  measurementId: "G-V041L0E64D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export default db;
