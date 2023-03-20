// Import the functions you need from the SDKs you need
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
import { initializeApp, getApps,getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANsISQzNZPZX0G9UTJJxaUOROJsXSOXgA",
  authDomain: "next-js-tutorial-380815.firebaseapp.com",
  projectId: "next-js-tutorial-380815",
  storageBucket: "next-js-tutorial-380815.appspot.com",
  messagingSenderId: "572759730580",
  appId: "1:572759730580:web:99760a3d86db1f76fc8781"
};

const app = getApps.length > 0 ?getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

export {app,db, storage}