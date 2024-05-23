// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsIyZC-ZQN-XgkpiChjnaWygHQHVbnuf8",
    authDomain: "assignment-10-dec7b.firebaseapp.com",
    projectId: "assignment-10-dec7b",
    storageBucket: "assignment-10-dec7b.appspot.com",
    messagingSenderId: "380503886471",
    appId: "1:380503886471:web:d31dc876e03ecf72980622"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 