// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBElXhw4hSBAMZFQEt8vpaQctBibXXJHCE",
  authDomain: "leela-and-jaya-store-62dad.firebaseapp.com",
  projectId: "leela-and-jaya-store-62dad",
  storageBucket: "leela-and-jaya-store-62dad.appspot.com",
  messagingSenderId: "557172584787",
  appId: "1:557172584787:web:d33e441f7f03d7e3e3f1a6",
  measurementId: "G-WETVPQQYGF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);