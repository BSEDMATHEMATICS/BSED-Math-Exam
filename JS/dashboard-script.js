import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getDatabase,
  ref,
  get,
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

//

const totalExam = document.getElementById("total-exam");
const totalPassed = document.getElementById("passed-exam");
const totalFailed = document.getElementById("failed-exam");
const level1Ranking = document.getElementById("level-1-ranking");
const level2Ranking = document.getElementById("level-2-ranking");
const level3Ranking = document.getElementById("level-3-ranking");
const overallRanking = document.getElementById("overall-ranking");

const overallPieChartCtx = document
  .getElementById("overall-pie-chart")
  .getContext("2d");
const level1PieChartCtx = document
  .getElementById("level1-pie-chart")
  .getContext("2d");
const level2PieChartCtx = document
  .getElementById("level2-pie-chart")
  .getContext("2d");
const level3PieChartCtx = document
  .getElementById("level3-pie-chart")
  .getContext("2d");
const overallPieChartCtx1 = document
  .getElementById("overall1-pie-chart")
  .getContext("2d");

let overallPieChart,
  level1PieChart,
  level2PieChart,
  level3PieChart,
  overallPieChart1;

async function getUsersMap() {
  try {
    const snapshot = await get(ref(db, "users"));
    const users = snapshot.val();
    const usersMap = {};

    if (users) {
      Object.entries(users).forEach(([email, userData]) => {
        usersMap[email] = userData.fullName;
      });
    }
    return usersMap;
  } catch (error) {
    console.error("Error retrieving user data:", error);
    return {};
  }
}

async function calculateCountersAndRankings() {
  try {
    const usersMap = await getUsersMap();
    const snapshot = await get(ref(db, "record"));
    const records = snapshot.val();

    if (!records) return;

    let total = 0;
    let passed = 0;
    let failed = 0;

    let level1Scores = [];
    let level2Scores = [];
    let level3Scores = [];
    let overallScores = [];

    let level1Passed = 0;
    let level1Failed = 0;
    let level2Passed = 0;
    let level2Failed = 0;
    let level3Passed = 0;
    let level3Failed = 0;

    Object.entries(records).forEach(([email, exams]) => {
      Object.values(exams).forEach((exam) => {
        total++;
        const score = parseInt(exam.score.split("/")[0]);

        if (exam.grade === "Passed") {
          passed++;
          overallScores.push({ fullName: usersMap[email], score });

          if (exam.examLevel === "1") {
            level1Scores.push({ fullName: usersMap[email], score });
            level1Passed++;
          } else if (exam.examLevel === "2") {
            level2Scores.push({ fullName: usersMap[email], score });
            level2Passed++;
          } else if (exam.examLevel === "3") {
            level3Scores.push({ fullName: usersMap[email], score });
            level3Passed++;
          }
        } else if (exam.grade === "Failed") {
          failed++;
          if (exam.examLevel === "1") {
            level1Failed++;
          } else if (exam.examLevel === "2") {
            level2Failed++;
          } else if (exam.examLevel === "3") {
            level3Failed++;
          }
        }
      });
    });

    totalExam.textContent = total;
    totalPassed.textContent = passed;
    totalFailed.textContent = failed;

    updateRankingList(level1Scores, level1Ranking);
    updateRankingList(level2Scores, level2Ranking);
    updateRankingList(level3Scores, level3Ranking);
    updateRankingList(overallScores, overallRanking);

    updatePieChart(
      overallPieChart,
      overallPieChartCtx,
      passed,
      failed,
      "Overall"
    );
    updatePieChart(
      level1PieChart,
      level1PieChartCtx,
      level1Passed,
      level1Failed,
      "Level 1"
    );
    updatePieChart(
      level2PieChart,
      level2PieChartCtx,
      level2Passed,
      level2Failed,
      "Level 2"
    );
    updatePieChart(
      level3PieChart,
      level3PieChartCtx,
      level3Passed,
      level3Failed,
      "Level 3"
    );
    updatePieChart(
      overallPieChart1,
      overallPieChartCtx1,
      passed,
      failed,
      "Overall"
    );
  } catch (error) {
    console.error("Error retrieving data:", error);
  }
}

function updateRankingList(scores, rankingElement) {
  scores.sort((a, b) => b.score - a.score);
  rankingElement.innerHTML = "";

  scores.forEach((user, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. ${user.fullName} - ${user.score}`;
    rankingElement.appendChild(listItem);
  });
}

function updatePieChart(chart, context, passed, failed, label) {
  if (chart) {
    chart.destroy();
  }
  chart = new Chart(context, {
    type: "pie",
    data: {
      labels: ["Passed", "Failed"],
      datasets: [
        {
          data: [passed, failed],
          backgroundColor: ["#9aeabc", "#ff9393"],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: `${label} Exam Results`,
        },
      },
    },
  });
}

calculateCountersAndRankings();
