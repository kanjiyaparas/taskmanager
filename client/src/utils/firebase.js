// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APP_KEY,
  authDomain: "task-managment-13a22.firebaseapp.com",
  projectId: "task-managment-13a22",
  storageBucket: "task-managment-13a22.appspot.com",
  messagingSenderId: "91191925652",
  appId: "1:91191925652:web:59880db17d78e3d60c8d81",
  measurementId: "G-SF03S29NFS"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);