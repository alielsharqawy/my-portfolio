import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTB9dUSmRNtsQdaWPdFGKhfF4qk5EnsrE",
  authDomain: "aliportfolio-2b9cd.firebaseapp.com",
  projectId: "aliportfolio-2b9cd",
  storageBucket: "aliportfolio-2b9cd.firebasestorage.app",
  messagingSenderId: "645293552621",
  appId: "1:645293552621:web:5c2150d3db02c2c3fe6de4",
  measurementId: "G-0GJHK8QW95"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);