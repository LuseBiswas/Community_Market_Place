// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMbBSP6uxcMxJJ_3Ser9_FTLjELEJnZ5k",
  authDomain: "community-market-app-aa019.firebaseapp.com",
  projectId: "community-market-app-aa019",
  storageBucket: "community-market-app-aa019.appspot.com",
  messagingSenderId: "48520747976",
  appId: "1:48520747976:web:715cfd7efc5e4dff8efefd",
  measurementId: "G-N1T6MN90JG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
