// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHDtRzJusTC_7kSt2G27suZgpUjIAcbCQ",
  authDomain: "vehicle-api-stroage.firebaseapp.com",
  projectId: "vehicle-api-stroage",
  storageBucket: "vehicle-api-stroage.appspot.com",
  messagingSenderId: "48630089494",
  appId: "1:48630089494:web:95e997806582be1a0e3237"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)
