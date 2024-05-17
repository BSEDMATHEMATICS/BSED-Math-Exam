import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getDatabase,
  ref,
  get,
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

const currentUserEmail = localStorage.getItem("currentUserEmail");
const currentAnswersID = localStorage.getItem("currentAnswerID");
const currentAnswersName = localStorage.getItem("currentAnswerName");

if (currentUserEmail) {
  const dataRef = ref(db, `answers/${currentAnswersName}/${currentAnswersID}`);
  // const dataRef = ref(db, `answers/Ray Martin/-Nt9YLvtrg3J12H0B2iJ`);

  get(dataRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const answerSheetArray = data.answerSheet;
        const tableHeader = document.querySelector(
          ".container .form-header .header-item"
        );
        const tableAnswer = document.querySelector(".container table");

        tableHeader.innerHTML = "";

        const row = document.createElement("div");
        row.classList.add("header-item");
        row.innerHTML = `
        <h1>${data.userName}</h1>
        <h3>Level: ${data.examLevel}</h3>
        <h3>Correct: ${data.correctAnswer}</h3>
        <h3>Wrong: ${data.wrongAnswer}</h3>
        <h3>Score: ${data.score}</h3>
        `;
        tableHeader.appendChild(row);

        tableAnswer.innerHTML = "";

        answerSheetArray.forEach((item) => {
          const itemElement = document.createElement("tr");
          const tdElement = document.createElement("td");
          let textContentWithoutPrefix = item
            .replace(/\(Correct\)|\(Wrong\)/g, "")
            .trim();
          tdElement.textContent = textContentWithoutPrefix;

          if (item.startsWith("(Correct)")) {
            tdElement.classList.add("correct-answer");
          } else if (item.startsWith("(Wrong)")) {
            tdElement.classList.add("wrong-answer");
          }
          itemElement.appendChild(tdElement);
          document.getElementById("answer-table").appendChild(itemElement);

          tableAnswer.appendChild(itemElement);
        });
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
} else {
  console.log("No currentUserEmail available");
}
