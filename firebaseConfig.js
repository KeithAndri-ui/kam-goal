// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsbiF_K75uiWtsyv9KE08WfnRSxOEh2SU",
  authDomain: "kam-mobile-app---tracker.firebaseapp.com",
  projectId: "kam-mobile-app---tracker",
  storageBucket: "kam-mobile-app---tracker.firebasestorage.app",
  messagingSenderId: "248745204380",
  appId: "1:248745204380:web:94c46be65b6215cd896b59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)