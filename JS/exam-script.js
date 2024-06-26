import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  child,
  push,
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

var examLevel = document.getElementById("exam-level-no").textContent;
const currentScore = document.getElementById("current-score");
let questionsModule;
const answerSheet = [];

var loggedIn = localStorage.getItem("loggedIn");

if (!loggedIn) {
  alert("You are currently not logged in.");
  window.location.href = "main.html";
}

if (examLevel === "2") {
  questionsModule = import("./Questions-level2.js");
} else if (examLevel === "3") {
  questionsModule = import("./Questions-level3.js");
} else {
  questionsModule = import("./Questions-level1.js");
}

questionsModule.then((module) => {
  const questions = module.default;

  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  const nextLevelButton = document.getElementById("next-level-btn");
  const finishButton = document.getElementById("finish-btn");

  let currentQuestionIndex = 0;
  let score = 0;
  let grade = "";
  let correctAnswer = 0;
  let wrongAnswer = 0;

  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = String(currentDate.getMonth() + 1).padStart(2, "0");
  let day = String(currentDate.getDate()).padStart(2, "0");

  let dateTaken = `${year}-${month}-${day}`;

  // TIMER

  const timerDisplay = document.getElementById("timer-display");

  let timer;
  let timeLeft = 60;

  function updateTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    timerDisplay.textContent = `${String(remainingSeconds).padStart(2, "0")}`;
  }

  function startTimer() {
    if (timer) {
      clearInterval(timer);
    }

    if (examLevel === "3") {
      timeLeft = 60;
    } else {
      timeLeft = 30;
    }
    updateTimerDisplay(timeLeft);

    timer = setInterval(() => {
      timeLeft--;

      if (timeLeft <= 0) {
        clearInterval(timer);
        selectAnswer(null);
      } else {
        updateTimerDisplay(timeLeft);
      }
    }, 1000);
  }

  function pauseTimer() {
    if (timer) {
      clearInterval(timer);
    }
  }

  updateTimerDisplay(timeLeft);

  // TIMER END

  function startExam() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }

  function showQuestion() {
    resetState();

    startTimer();

    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
    });
  }

  function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }

  function selectAnswer(e) {
    // const selectedBtn = e.target;
    // const selectedAnswerText = selectedBtn.textContent
    //   .trim()
    //   .replace(/\t/g, " ");
    // const isCorrect = selectedBtn.dataset.correct === "true";

    let selectedBtn;
    let selectedAnswerText;
    let isCorrect;

    if (e === null) {
      selectedAnswerText = "Time runs out";
      isCorrect = false;
    } else {
      selectedBtn = e.target;
      selectedAnswerText = selectedBtn.textContent.trim().replace(/\t/g, " ");
      isCorrect = selectedBtn.dataset.correct === "true";
    }

    if (isCorrect) {
      selectedBtn.classList.add("correct-answer");
      answerSheet.push(
        "(Correct) " + (currentQuestionIndex + 1) + ". " + selectedAnswerText
      );
      score++;
      correctAnswer++;
    } else if (!isCorrect && e != null) {
      selectedBtn.classList.add("wrong-answer");
      answerSheet.push(
        "(Wrong)  " + (currentQuestionIndex + 1) + ". " + selectedAnswerText
      );
      wrongAnswer++;
    } else {
      answerSheet.push(
        "(Wrong)  " + (currentQuestionIndex + 1) + ". " + "Time runs out"
      );
      wrongAnswer++;
    }
    Array.from(answerButtons.children).forEach((button) => {
      // if (button.dataset.correct === "true") {
      //   button.classList.add("correct");
      // }
      button.disabled = true;
    });

    pauseTimer();

    currentScore.textContent = score;
    nextButton.style.display = "block";
  }

  function showScore() {
    timerDisplay.style.display = "none";
    resetState();
    if (score >= 25 && examLevel != "3") {
      questionElement.innerHTML = `CONGRATULATIONS YOU PASSED THE EXAM! <br> You scored ${score} out of ${questions.length}!`;
      nextLevelButton.style.display = "block";
      grade = "Passed";
    } else if (score >= 50 && examLevel == "3") {
      questionElement.innerHTML = `CONGRATULATIONS YOU PASSED THE EXAM! <br> You scored ${score} out of ${questions.length}!`;
      finishButton.style.display = "block";
      grade = "Passed";
    } else {
      questionElement.innerHTML = `You failed the exam. <br> You scored ${score} out of ${questions.length}!`;
      nextButton.innerHTML = "Try Again";
      nextButton.style.display = "block";
      grade = "Failed";
    }

    insertData();
  }

  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }

  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      handleNextButton();
    } else {
      startExam();
    }
  });

  startExam();

  document
    .getElementById("exitForm")
    .addEventListener("submit", function (event) {
      if (!confirm("Do you really want to exit?")) {
        event.preventDefault();
      }
    });

  function insertData() {
    const currentUserEmail = localStorage.getItem("currentUserEmail");
    const currentUserName = localStorage.getItem("currentUserName");

    const recordRef = ref(db, "record");
    const newRecordRef = push(child(recordRef, currentUserEmail));
    const recordId = newRecordRef.key;

    set(child(recordRef, `${currentUserEmail}/${recordId}`), {
      id: recordId,
      examLevel: examLevel,
      score: score + "/" + questions.length,
      grade: grade,
      dateTaken: dateTaken,
    });

    const answersRef = ref(db, "answers");

    set(child(answersRef, `${currentUserName}/${recordId}`), {
      id: recordId,
      examLevel: examLevel,
      correctAnswer: correctAnswer,
      wrongAnswer: wrongAnswer,
      answerSheet: answerSheet,
      score: score + "/" + questions.length,
      userName: currentUserName,
      email: currentUserEmail,
    });
  }
});
