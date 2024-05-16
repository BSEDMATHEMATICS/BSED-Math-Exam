import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getDatabase,
  ref,
  get,
  update,
  set,
  remove,
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

const email = document.getElementById("email");
const fullName = document.getElementById("fullName");
const userName = document.getElementById("username");
const password = document.getElementById("password");

const localEmail = localStorage.getItem("currentUserEmail");
const localFullName = localStorage.getItem("currentUserName");
const localUsername = localStorage.getItem("currentUName");

email.placeholder = localEmail;
fullName.placeholder = localFullName;
userName.placeholder = localUsername;

const updateProfileForm = document.getElementById("updateProfileForm");

updateProfileForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const updates = {};

  if (email.value.trim() !== "") {
    updates.email = email.value.trim();
  }
  if (fullName.value.trim() !== "") {
    updates.fullName = fullName.value.trim();
  }
  if (userName.value.trim() !== "") {
    updates.username = userName.value.trim();
  }
  if (password.value.trim() !== "") {
    updates.password = password.value.trim();
  }

  if (Object.keys(updates).length > 0) {
    const userRef = ref(db, `users/${localEmail}`);
    const newEmail = updates.email || localEmail;

    try {
      const snapshot = await get(userRef);
      if (snapshot.exists()) {
        const userData = snapshot.val();

        const newUserRef = ref(db, `users/${newEmail}`);
        await set(newUserRef, { ...userData, ...updates });

        await remove(userRef);

        if (updates.email) {
          localStorage.setItem("currentUserEmail", updates.email);
        }
        if (updates.fullName) {
          localStorage.setItem("currentUserName", updates.fullName);
        }
        if (updates.username) {
          localStorage.setItem("currentUName", updates.username);
        }

        console.log(localStorage.getItem("currentUserEmail"));
        console.log(localStorage.getItem("currentUserName"));
        console.log(localStorage.getItem("currentUName"));

        alert("Profile updated successfully.");
        closeForm();
      } else {
        alert("User data not found.");
      }
    } catch (error) {
      alert("Failed to update profile: " + error.message);
    }
  } else {
    alert("No fields to update.");
  }
});

const deleteButton = document.querySelector(".btn-delete");

deleteButton.addEventListener("click", async () => {
  const userRef = ref(db, `users/${localEmail}`);

  if (
    confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    )
  ) {
    try {
      await remove(userRef);

      localStorage.clear();

      alert("Account deleted successfully.");
      closeForm();
      window.location.href = "./../index.html";
    } catch (error) {
      alert("Failed to delete account: " + error.message);
    }
  }
});
