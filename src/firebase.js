import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9EutVWmji0Qzrqh5s3bpPIzxW1uqe9wA",
  authDomain: "finance-app-fdda7.firebaseapp.com",
  projectId: "finance-app-fdda7",
  storageBucket: "finance-app-fdda7.appspot.com",
  messagingSenderId: "57729831627",
  appId: "1:57729831627:web:23b205d2d420ee1e2f814e",
  measurementId: "G-018C8GZQKR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
