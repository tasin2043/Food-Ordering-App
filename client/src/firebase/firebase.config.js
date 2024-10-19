// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// console.log(import.meta.env.VITE_SOME_KEY)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzj-kxWNbcoCXpQoPkYMBlHxfjVX1OdhQ",
  authDomain: "foodmood-client-d906d.firebaseapp.com",
  projectId: "foodmood-client-d906d",
  storageBucket: "foodmood-client-d906d.appspot.com",
  messagingSenderId: "587568478307",
  appId: "import.meta.env.VITE_APPID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
