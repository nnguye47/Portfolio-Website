// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVlWc4HftNzoIAM_0lg5HB4a90w2PZNpw",
  authDomain: "my-website-7f94b.firebaseapp.com",
  projectId: "my-website-7f94b",
  storageBucket: "my-website-7f94b.appspot.com",
  messagingSenderId: "324238854048",
  appId: "1:324238854048:web:2942d3424a902a02b046c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
