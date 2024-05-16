import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getDatabase,
  ref,
  get,
  query,
  orderByChild,
  equalTo,
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

localStorage.clear();

function sanitizeEmail(email) {
  return email.replace(/[.#$[\]]/g, "_");
}

async function getUserByEmailOrUsername(emailOrUsername) {
  const usersRef = ref(db, "users");
  const userQuery = query(
    usersRef,
    orderByChild("username"),
    equalTo(emailOrUsername)
  );
  const snapshot = await get(userQuery);
  if (snapshot.exists()) {
    const userData = snapshot.val();
    const userKey = Object.keys(userData)[0]; // assuming usernames are unique
    return userData[userKey];
  } else {
    const sanitizedEmail = sanitizeEmail(emailOrUsername);
    const emailRef = ref(db, `users/${sanitizedEmail}`);
    const emailSnapshot = await get(emailRef);
    if (emailSnapshot.exists()) {
      return emailSnapshot.val();
    }
  }
  return null;
}

async function getAdminByEmail(email) {
  const adminRef = ref(db, `admin/${email}`);
  const snapshot = await get(adminRef);
  if (snapshot.exists()) {
    return snapshot.val();
  }
  return null;
}

document
  .getElementById("login-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const targetButtonId = event.submitter.id;

    const email = sanitizeEmail(document.getElementById("email").value);
    const password = document.getElementById("password").value;

    try {
      let user;

      if (targetButtonId === "login-btn") {
        user = await getUserByEmailOrUsername(email);
      } else if (targetButtonId === "login-as-admin-btn") {
        user = await getAdminByEmail(email);
      }

      if (user) {
        const userEmail = user.email;
        const userPassword = user.password;
        const userName = user.fullName;
        const uName = user.username;

        if (userPassword === password) {
          localStorage.setItem("currentUserEmail", userEmail);
          localStorage.setItem("currentUserName", userName);
          localStorage.setItem("currentUName", uName);

          if (targetButtonId === "login-btn") {
            localStorage.setItem("loggedIn", true);
            window.location.href = "HTML/main.html";
          } else if (targetButtonId === "login-as-admin-btn") {
            localStorage.setItem("loggedIn", true);
            window.location.href = "HTML/admin.html";
          }
        } else {
          alert("Invalid email or password. Please try again.");
        }
      } else {
        alert("No user data found");
      }
    } catch (error) {
      console.error("Error retrieving user data:", error);
      alert(
        "An error occurred while processing your request. Please try again later."
      );
    }
  });
