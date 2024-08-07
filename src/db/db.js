import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_7xzWZxVE5TCLEf_mYMd0ychCcftaaK8",
  authDomain: "ecommerce-coder-e656e.firebaseapp.com",
  projectId: "ecommerce-coder-e656e",
  storageBucket: "ecommerce-coder-e656e.appspot.com",
  messagingSenderId: "823666377452",
  appId: "1:823666377452:web:047f164cb5920058161bc9"
};

initializeApp(firebaseConfig);
const db = getFirestore ()
export default db;