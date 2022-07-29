// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXL54SLxSwHEnez5fhraaDfFbGUZ3vByY",
  authDomain: "twitter-clone-98f65.firebaseapp.com",
  projectId: "twitter-clone-98f65",
  storageBucket: "twitter-clone-98f65.appspot.com",
  messagingSenderId: "534803383507",
  appId: "1:534803383507:web:0c80c11917f2c7eac98026",
  measurementId: "G-GEWZ77D9KB"
};

// Initialize Firebase
const app = !getApps().length? initializeApp(firebaseConfig):getApp();
const db=getFirestore();
const storage=getStorage();


export default app;
export { db, storage };