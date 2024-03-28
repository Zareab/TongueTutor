import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, onAuthStateChanged,signOut  } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyD2woUa1pNPhQoiT6tvxnmeO9ImqoSUj7Q",
    authDomain: "register-fede8.firebaseapp.com",
    projectId: "register-fede8",
    storageBucket: "register-fede8.appspot.com",
    messagingSenderId: "944948867768",
    appId: "1:944948867768:web:4439084304da4135d27a4d"
  };

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get the Firebase Auth instance
const auth = getAuth(app);

// Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is signed in:", user);
    document.querySelector(".signup").style.display = "none"
    document.querySelector(".logout").style.display = "block"
} else {
    console.log("No user is signed in.");
    document.querySelector(".logout").style.display = "none"
    document.querySelector(".signup").style.display = "block"
  } 
});

document.querySelector('.logout').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("User signed out");
      window.location.href = "Home_view.html"; // Redirect to Home_view.html or any other page
    }).catch((error) => {
      // An error happened.
      console.error("Error signing out:", error);
    });
  })