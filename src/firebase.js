// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnomo0tYctRIdetZhvykMwUkMN5FoJZD4",
  authDomain: "react-app-6abb2.firebaseapp.com",
  projectId: "react-app-6abb2",
  storageBucket: "react-app-6abb2.firebasestorage.app",
  messagingSenderId: "273359226961",
  appId: "1:273359226961:web:47c9a4e40e49dc235f5070",
  measurementId: "G-4ETC3JQWS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;