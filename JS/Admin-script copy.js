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

get(namesRef).then(function (snapshot) {
  parentList.innerHTML = "";

  snapshot.forEach(function (childSnapshot) {
    const name = childSnapshot.key;
    const li = document.createElement("li");
    li.classList.add("parent-item");
    li.textContent = name;
    parentList.appendChild(li);
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

      get(answersRef).then(function (snapshot) {
        const data = snapshot.val();

        console.log(data);

        submenu = $(`
        <ul class="submenu">
            <li class="submenu-item" data-value="test1">Data 1</li>
        </ul>
      `);

        $(this).after(submenu);

        // const submenuItems = $(`
        //     <ul class="submenu">
        //         ${Object.values(data)
        //           .map(
        //             (items) =>
        //               `<li class="submenu-item">${items.examLevel}</li>`
        //           )
        //           .join("")}
        //     </ul>
        //     `);

        // $(this).after(submenuItems);

        // const submenuItems = document.createElement("ul");
        // submenuItems.classList.add("submenu");

        // Object.values(data).forEach(function (items) {
        //   const row = document.createElement("li");
        //   row.classList.add("submenu-item");
        //   row.textContent = items.examLevel;
        //   submenuItems.appendChild(row);
        //   console.log(items.id);
        // });

        // $(this).after(submenuItems);
      });
    }
  });

  $(document).on("click", ".submenu-item", function () {
    var value = $(this).data("value");
    console.log(value);
  });
});

//   get(answersRef).then(function (snapshot) {
//     snapshot.forEach(function (childSnapshot) {
//       const name = childSnapshot.key;
//       const li = document.createElement("li");
//       li.classList.add("submenu-item");
//       li.textContent = name;
//       subList.appendChild(li);
//       console.log(name);
//     });
//   });

//   submenu = $(`
//     <ul class="submenu">
//       <li class="submenu-item" data-value="test1">Data 1</li>
//       <li class="submenu-item" data-value="test2">Data 2</li>
//       <li class="submenu-item" data-value="test3">Data 3</li>
//     </ul>
//   `);
// $(this).after(submenu);
