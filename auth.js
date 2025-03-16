// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

// Your Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7STE0FSm549CIR74VUjxyJpg9J0Sja-Q",
    authDomain: "login-7d374.firebaseapp.com",
    projectId: "login-7d374",
    storageBucket: "login-7d374.appspot.com",
    messagingSenderId: "587076027663",
    appId: "1:587076027663:web:827308b010fca6ef726a7a",
    measurementId: "G-GVCK2LSENL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Function to Register User
async function registerUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (password.length < 6) {
        document.getElementById("message").innerText = "Password must be at least 6 characters.";
        return;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await setDoc(doc(db, "users", user.uid), { email: user.email });
        document.getElementById("message").innerText = "User registered successfully!";
    } catch (error) {
        document.getElementById("message").innerText = error.message;
    }
}

// Function to Login User
async function loginUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        document.getElementById("message").innerText = "Login successful! Redirecting...";
        
        // Redirect to your desired page after login
        setTimeout(() => {
            window.location.href = "https://priyaadevi.github.io/Responsive-WebSite/";
        }, 2000);
    } catch (error) {
        document.getElementById("message").innerText = "Login failed: Invalid email or password.";
    }
}

// Make functions globally accessible
window.registerUser = registerUser;
window.loginUser = loginUser;
