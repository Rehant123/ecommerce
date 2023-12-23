// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRtt4jwMoM57KPPdEJsoodybdhJV8ZLD8",
  authDomain: "myfirstapp-89ede.firebaseapp.com",
  projectId: "myfirstapp-89ede",
  storageBucket: "myfirstapp-89ede.appspot.com",
  messagingSenderId: "273820130386",
  appId: "1:273820130386:web:cd17f1039f8451b746538b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export {fireDB,auth};