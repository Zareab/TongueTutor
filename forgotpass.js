// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2woUa1pNPhQoiT6tvxnmeO9ImqoSUj7Q",
  authDomain: "register-fede8.firebaseapp.com",
  projectId: "register-fede8",
  storageBucket: "register-fede8.appspot.com",
  messagingSenderId: "944948867768",
  appId: "1:944948867768:web:4439084304da4135d27a4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


function forgotPassword() {
  console.log("Forgot password function called.");
  const email = document.getElementById('email').value;
  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Reset Link has been sent to your email id");
    })
    .catch((error) => {
      alert(error.message);
    });
}


document.getElementById('submit').addEventListener('click', forgotPassword);
