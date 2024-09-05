// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzrhrOuVlM7OS-tPSXAkAvxrVa9-AHa4c",
  authDomain: "netflixgpt-68772.firebaseapp.com",
  projectId: "netflixgpt-68772",
  storageBucket: "netflixgpt-68772.appspot.com",
  messagingSenderId: "857054973799",
  appId: "1:857054973799:web:b05497b6fe3beacd0c29c2",
  measurementId: "G-7L1EHNMTDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();