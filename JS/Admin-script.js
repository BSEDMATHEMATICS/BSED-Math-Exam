 
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getDatabase,
  ref,
  get,
  remove,
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

const namesRef = ref(db, "answers");
const parentList = document.querySelector("#parent-list");
const subContainer = document.querySelector(".submenu-container");

get(namesRef).then(function (snapshot) {
  parentList.innerHTML = "";
  subContainer.innerHTML = "";

  snapshot.forEach(function (childSnapshot) {
    const name = childSnapshot.key;
    const li = document.createElement("li");
    li.classList.add("parent-item");
    li.textContent = name;
    parentList.appendChild(li);
  });
});

let testID = "test";

let currentUserEmail = ""; 
let currentUserName = ""; 1

function deleteRecord(recordId, event) {
  event.preventDefault();

  if (confirm("Are you sure you want to delete this record?")) {
    

    const recordRef = ref(db, `record/${currentUserEmail}/${recordId}`);
    const answersRef = ref(db, `answers/${currentUserName}/${recordId}`);

    remove(recordRef)
      .then(() => {
        remove(answersRef);
        console.log("Record deleted successfully");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting record:", error);
      });
  } else {
    console.log("Deletion canceled");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".submenu-container ul")
    .addEventListener("click", function (event) {
      if (event.target.classList.contains("delete-btn")) {
        const recordId = event.target.dataset.recordId;
        deleteRecord(recordId, event);
      }
    });
});

$(document).ready(function () {
  $(document).on("click", ".parent-item", function () {
    var submenu = $(this).next(".submenu");

    if (submenu.length > 0) {
      submenu.remove();
    } else {
      $(".submenu").remove();

      const answersRef = ref(db, `answers/${$(this).text()}`);
      var userName = $(this).text();
      var parentItem = $(this);

      get(answersRef).then(async function (snapshot) {
        const promises = [];

        snapshot.forEach(function (childSnapshot) {
          const id = childSnapshot.key;

          const promise = get(child(ref(db), `answers/${userName}/${id}`)).then(
            function (innerSnapshot) {
              const data = innerSnapshot.val();

              submenu = $(`
                <ul class="submenu">
                    <li class="submenu-item" data-value="${data.id}" style="display: inline-block;">Level: ${data.examLevel} Score: ${data.score}</li>
                    <li class="delete-btn" style="display: inline-block;" data-record-id="${data.id}">delete</li>
                </ul>
                `);

              submenu.find(".submenu-item").on("click", function () {
                const uniqueValue = $(this).data("value");
                localStorage.removeItem("currentAnswerID");
                localStorage.removeItem("currentAnswerName");
                localStorage.setItem("currentAnswerID", uniqueValue);
                localStorage.setItem("currentAnswerName", userName);

                window.location.href = "admin-answers.html";
              });

              submenu.find(".delete-btn").on("click", function (event) {
                const recordId = $(this).data("record-id");
                currentUserEmail = data.email;
                currentUserName = userName;
                deleteRecord(recordId, event);
              });

              parentItem.after(submenu);
            }
          );

          promises.push(promise);
        });

        await Promise.all(promises);
      });
    }
  });
});
 
