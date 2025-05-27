
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZpQTddQjUM8GO_ht7nPy7K-r3-OaMajg",
    authDomain: "amazom-d9566.firebaseapp.com",
    projectId: "amazom-d9566",
    storageBucket: "amazom-d9566.firebasestorage.app",
    messagingSenderId: "223709084645",
    appId: "1:223709084645:web:89d83f86d9cecc0f388d0c",
    measurementId: "G-LGG328EWKC"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getDatabase();

  const auth = getAuth();


  export {db, auth};