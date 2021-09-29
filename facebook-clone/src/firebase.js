import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx5jTDQ9ilnZVbUB6InluYxIB3Nz45mDg",
  authDomain: "facebook-clone-ed6d7.firebaseapp.com",
  projectId: "facebook-clone-ed6d7",
  storageBucket: "facebook-clone-ed6d7.appspot.com",
  messagingSenderId: "403211624439",
  appId: "1:403211624439:web:b3f54f57daacb0d1f7d8f2",
  measurementId: "G-ZS2BB1V37T",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
