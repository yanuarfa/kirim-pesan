// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3WYsjH10JfA1Z2Z_5FsB55tACgJSSZWg",
  authDomain: "group-chat-b75b3.firebaseapp.com",
  projectId: "group-chat-b75b3",
  storageBucket: "group-chat-b75b3.appspot.com",
  messagingSenderId: "560526899932",
  appId: "1:560526899932:web:47e8b403c46ea6b5c79219",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
