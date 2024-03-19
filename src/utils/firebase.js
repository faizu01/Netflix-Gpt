// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3kEekHgp8CBmA6d93fjI0nIWLO-_NrQc",
  authDomain: "netflix-gpt-34e9d.firebaseapp.com",
  projectId: "netflix-gpt-34e9d",
  storageBucket: "netflix-gpt-34e9d.appspot.com",
  messagingSenderId: "429427900447",
  appId: "1:429427900447:web:f5500fcae2b6e745d6d52a",
  measurementId: "G-633TBJ8L8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();