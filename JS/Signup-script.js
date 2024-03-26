import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyByVMZ4eBrPZEPP3AG08A5JecUmimsuGf8",
  authDomain: "bsed-math-628a0.firebaseapp.com",
  projectId: "bsed-math-628a0",
  storageBucket: "bsed-math-628a0.appspot.com",
  messagingSenderId: "992114594215",
  appId: "1:992114594215:web:7e841cf3ff189b67a4e682",
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("sign-up-btn").addEventListener("click", register);
});

function sanitizeEmail(email) {
  return email.replace(/[.#$[\]]/g, "_");
}

function register() {
  const sanitizedEmail = sanitizeEmail(document.getElementById("email").value);

  const name = document.getElementById("name").value.trim();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !username || !email || !password) {
    alert("Please fill in all the fields.");
    return;
  }

  set(ref(db, "users/" + sanitizedEmail), {
    fullName: document.getElementById("name").value.replace(/[.]/g, ""),
    username: document.getElementById("username").value,
    email: sanitizeEmail(document.getElementById("email").value),
    password: document.getElementById("password").value,
  })
    .then(() => {
      alert("Sign Up Successful!");
      window.location.href = "../index.html";
    })
    .catch((error) => {
      console.error("Error signing up:", error);
      alert("An error occurred. Please try again later.");
    });
}
