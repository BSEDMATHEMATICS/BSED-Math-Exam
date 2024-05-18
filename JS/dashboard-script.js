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

const totalExam = document.getElementById("total-exam");
const totalPassed = document.getElementById("passed-exam");
const totalFailed = document.getElementById("failed-exam");
const overallRanking = document.getElementById("overall-ranking");

// const level1Ranking = document.getElementById("level-1-ranking");
// const level2Ranking = document.getElementById("level-2-ranking");
// const level3Ranking = document.getElementById("level-3-ranking");

const overallPieChartCtx = document
  .getElementById("level1-3-pie-chart")
  .getContext("2d");

let overallPieChart;

async function getUsersMap() {
  try {
    const snapshot = await get(ref(db, "users"));
    const users = snapshot.val();
    const usersMap = {};

    if (users) {
      Object.entries(users).forEach(([email, userData]) => {
        usersMap[email.replace(/\./g, "_")] = userData.fullName;
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

    let level1Passed = 0;
    let level2Passed = 0;
    let level3Passed = 0;

    let overallScores = [];
    const firstTakeTracker = {};

    Object.entries(records).forEach(([email, exams]) => {
      if (!firstTakeTracker[email]) {
        firstTakeTracker[email] = {};
      }

      Object.values(exams).forEach((exam) => {
        total++;
        const score = parseInt(exam.score.split("/")[0]);

        if (exam.grade === "Passed") {
          passed++;

          if (!firstTakeTracker[email][exam.examLevel]) {
            firstTakeTracker[email][exam.examLevel] = { score, exam, email };

            if (exam.examLevel === "1") {
              level1Passed++;
            } else if (exam.examLevel === "2") {
              level2Passed++;
            } else if (exam.examLevel === "3") {
              level3Passed++;
            }
          } else {
            if (score > firstTakeTracker[email][exam.examLevel].score) {
              firstTakeTracker[email][exam.examLevel] = { score, exam, email };
            }
          }
        } else {
          failed++;
        }
      });
    });

    Object.values(firstTakeTracker).forEach((levels) => {
      Object.values(levels).forEach(({ score, exam, email }) => {
        overallScores.push({
          fullName: usersMap[email],
          score,
          examLevel: exam.examLevel,
        });
      });
    });

    totalExam.textContent = total;
    totalPassed.textContent = passed;
    totalFailed.textContent = failed;

    // level1Ranking.textContent = level1Passed;
    // level2Ranking.textContent = level2Passed;
    // level3Ranking.textContent = level3Passed;

    const data = [level1Passed, level2Passed, level3Passed];

    updateRankingList(overallScores, overallRanking);

    updatePieChart(overallPieChart, overallPieChartCtx, data, [
      "Level 1",
      "Level 2",
      "Level 3",
    ]);
  } catch (error) {
    console.error("Error retrieving data:", error);
  }
}

function updateRankingList(scores, rankingElement) {
  scores.sort((a, b) => b.score - a.score);
  rankingElement.innerHTML = "";

  scores.forEach((user, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. (Level ${user.examLevel}) ${
      user.fullName
    } - ${user.score} `;
    rankingElement.appendChild(listItem);
  });
}

function updatePieChart(chart, context, data, labels) {
  if (chart) {
    chart.destroy();
  }
  chart = new Chart(context, {
    type: "pie",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Passed",
          data: data,
          backgroundColor: ["#ff7373", "#2757da", "#35bb23"],
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
          text: "Passed",
        },
      },
    },
  });
}

calculateCountersAndRankings();
