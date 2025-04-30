// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-4jYCGeL4uD87lVRhkddGZFi0yR7hqS4",
  authDomain: "simple-firebase-auth-9754a.firebaseapp.com",
  projectId: "simple-firebase-auth-9754a",
  storageBucket: "simple-firebase-auth-9754a.firebasestorage.app",
  messagingSenderId: "194206430555",
  appId: "1:194206430555:web:fd1f97250ecadb963d967e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);