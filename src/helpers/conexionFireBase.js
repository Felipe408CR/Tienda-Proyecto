// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvzdAcEw3ZgMiFh1M9y2XHbLUiPB07-uM",
  authDomain: "felipe408crtiendatcc.firebaseapp.com",
  projectId: "felipe408crtiendatcc",
  storageBucket: "felipe408crtiendatcc.appspot.com",
  messagingSenderId: "533910072904",
  appId: "1:533910072904:web:bc5935e21303511340327d",
  measurementId: "G-8WKWKZRF3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);