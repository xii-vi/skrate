// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb46dQ_aGRAYEyJ40CENzVRdjV0Ct8NWQ",
  authDomain: "skrrrrt-9053c.firebaseapp.com",
  projectId: "skrrrrt-9053c",
  storageBucket: "skrrrrt-9053c.appspot.com",
  messagingSenderId: "762738747835",
  appId: "1:762738747835:web:243c056f2a851c3be93c9e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
