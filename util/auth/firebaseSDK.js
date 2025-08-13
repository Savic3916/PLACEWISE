import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "placewise-25daf.firebaseapp.com",
  projectId: "placewise-25daf",
  storageBucket: "placewise-25daf.firebasestorage.app",
  messagingSenderId: "495651075584",
  appId: "1:495651075584:web:8fbcd01a48035ac7bc0ae5",
  measurementId: "G-PPKTHSMREF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
