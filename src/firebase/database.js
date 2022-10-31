import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBlwdU-r2RulNn9Tzg0S0KqmAt95CjgaN8",
  authDomain: "portfolio-ebb43.firebaseapp.com",
  projectId: "portfolio-ebb43",
  storageBucket: "portfolio-ebb43.appspot.com",
  messagingSenderId: "365825485421",
  appId: "1:365825485421:web:80a4cff664ee641c7c2d64",
  measurementId: "G-16K1YZGXC1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;