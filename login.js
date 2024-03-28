     // Import the functions you need from the SDKs you need
     import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
     import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
     import {  onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
     // TODO: Add SDKs for Firebase products that you want to use
     // https://firebase.google.com/docs/web/setup#available-libraries
   
     // Firebase configuration
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
     const auth=getAuth(app)
 
    
 
     const submit=document.getElementById('submit')
     submit.addEventListener("click",function(event){
       event.preventDefault()
       const email=document.getElementById('email').value;
       const password=document.getElementById('password').value;
       signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
     // Signed up 
     const user = userCredential.user;
     alert("Logging In...")
     window.location.href="Home_view.html"
    
     
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     alert(errorMessage)
     
   });
     })
 
     onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const uid = user.uid;
        console.log(uid);
        console.log("hello");
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  