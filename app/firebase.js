// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_6ahOkitEfoexoOKivAJgkU9jslCKHq8",
  authDomain: "technical-test-ebbudy.firebaseapp.com",
  projectId: "technical-test-ebbudy",
  storageBucket: "technical-test-ebbudy.appspot.com",
  messagingSenderId: "1065582477718",
  appId: "1:1065582477718:web:46be8889b06f60e9c91db7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
