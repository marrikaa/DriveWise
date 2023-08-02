import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCdxmI2k6D6zDU6i1fF8ypJJ4fOgLWPlAo",
  authDomain: "drivewise-1b2da.firebaseapp.com",
  projectId: "drivewise-1b2da",
  storageBucket: "drivewise-1b2da.appspot.com",
  messagingSenderId: "923868694239",
  appId: "1:923868694239:web:fba6d14c0abccd5aa00b6a",
  measurementId: "G-DLHY6QNZ1K"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);



export const dbConnection = db;
export const authenticator = auth;
export const dbStorage = storage;