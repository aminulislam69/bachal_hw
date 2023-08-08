// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiO8cUUOKWMNvtNXb3irBNBDIBR6hlI5o",
  authDomain: "bachal-hw.firebaseapp.com",
  projectId: "bachal-hw",
  storageBucket: "bachal-hw.appspot.com",
  messagingSenderId: "745185672610",
  appId: "1:745185672610:web:c8135435d6d7064e0cc6fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig