const questions = [
  {
    question:
      "1.	Solve the right triangle with a hypotenuse of length 10 and an acute angle of 30 degrees. What is the length of the side opposite the 30-degree angle?",
    answers: [
      { text: "a.	5", correct: true },
      { text: "b.	7.5", correct: false },
      { text: "c. 8.7", correct: false },
      { text: "d. 9", correct: false },
    ],
  },
  {
    question:
      "2. In a survey conducted among 500 students, 60% of them preferred playing outdoor sports. What is the most appropriate branch of statistics to analyze and summarize this data?",
    answers: [
      { text: "a. Descriptive statistics", correct: true },
      { text: "b. Inferential statistics", correct: false },
      { text: "c. Probability theory", correct: false },
      { text: "d. Mathematical statistics", correct: false },
    ],
  },
  {
    question:
      "3.	If a point P is located on the unit circle with coordinates (cos θ, sin θ) and the point P is located at (1, 0), what is the value of θ in radians?",
    answers: [
      { text: "a.	0 radians", correct: true },
      { text: "b.	1 radians", correct: false },
      { text: "c.	2 radians", correct: false },
      { text: "d.	3 radians", correct: false },
    ],
  },

  {
    question: "4.	Find the value of x in the equation arccos(x) = π/4.",
    answers: [
      { text: "a.	x = √2/2", correct: true },
      { text: "b.	x = 1/√2", correct: false },
      { text: "c.	x = 1/2", correct: false },
      { text: "d.	x = 2/π", correct: false },
    ],
  },
  {
    question:
      "5.	A triangle has side lengths of 5 cm, 8 cm, and 10 cm. What is the measure of the largest angle in the triangle?",
    answers: [
      { text: "a. 90 degrees", correct: false },
      { text: "b. 60 degrees", correct: false },
      { text: "c. 30 degrees", correct: false },
      { text: "d. 120 degrees", correct: true },
    ],
  },
  {
    question:
      "6.	Jack invests P5,000 in a savings account with an annual interest rate of 6% compounded annually. What will be the maturity value of his investment after 3 years?",
    answers: [
      { text: "a.	P5,955.08", correct: true },
      { text: "b.	P5,980.98", correct: false },
      { text: "c.	P6,000.78", correct: false },
      { text: "d.	P6,090.05", correct: false },
    ],
  },
  {
    question:
      "7. The ages (in years) of a group of individuals are as follows: 25, 28, 30, 32, 35, 35, 35, 40. Determine the mode of the ages.",
    answers: [
      { text: "a. 30", correct: false },
      { text: "b. 32", correct: false },
      { text: "c. 35", correct: true },
      { text: "d. 40", correct: false },
    ],
  },
  {
    question:
      "8.	You want to save up for a vacation and decide to make monthly deposits into a savings account. If you need to accumulate ₱50,000 in 2 years with an annual interest rate of 4%, what should be your monthly payment?",
    answers: [
      { text: "a.	₱1,904.90", correct: false },
      { text: "b.	₱2,000.00", correct: false },
      { text: "c.	₱2,083.33", correct: true },
      { text: "d.	₱2,207.28", correct: false },
    ],
  },

  {
    question: "9. How can one find a matrix A's eigenvalues?",
    answers: [
      { text: "a. A-1x = 0", correct: false },
      { text: "b. Ax = 0", correct: false },
      { text: "c. det(A - λI) = 0", correct: true },
      { text: "d. det(A) = 0", correct: false },
    ],
  },

  {
    question:
      "10. What is the purpose of a two-sample mean test in hypothesis testing?",
    answers: [
      {
        text: "a. To compare the means of two independent samples",
        correct: true,
      },
      {
        text: "b. To estimate the differences between two means",
        correct: false,
      },
      {
        text: "c. To calculate the standard deviation of the sample means",
        correct: false,
      },
      {
        text: "d. To determine the confidence interval for the population mean",
        correct: false,
      },
    ],
  },
  {
    question:
      "11. A bag contains 5 red marbles, 3 blue marbles, and 2 green marbles. If two marbles are drawn from the bag without replacement, what is the probability that both marbles are red?",
    answers: [
      { text: "a. ½", correct: false },
      { text: "b. ⅓", correct: false },
      { text: "c. ¼", correct: true },
      { text: "d. ⅕", correct: false },
    ],
  },

  {
    question:
      "12. When estimating a proportion using a large sample confidence interval, what is the main factor that affects the width of the interval?",
    answers: [
      { text: "a. The sample size", correct: true },
      { text: "b. The population mean", correct: false },
      { text: "c. The confidence level", correct: false },
      { text: "d. The standard deviation of the population", correct: false },
    ],
  },
  {
    question:
      "13. Which correlation coefficient is more appropriate to use when the data is ranked or ordinal?",
    answers: [
      { text: "a. Pearson correlation coefficient", correct: false },
      { text: "b. Spearman correlation coefficient", correct: true },
      {
        text: "c. Both coefficients can be used interchangeably",
        correct: false,
      },
      { text: "d. None of the above", correct: false },
    ],
  },
  {
    question:
      "14. Which statistical technique is commonly used to analyze the variation between multiple groups in hypothesis testing?",
    answers: [
      { text: "a. Regression curve", correct: false },
      { text: "b. Regression analysis", correct: false },
      { text: "c. Least square regression line", correct: false },
      { text: "d. Analysis of Variance (ANOVA)", correct: true },
    ],
  },

  {
    question: "15. Evaluate the integral ∫(2x cos²(x) dx.",
    answers: [
      { text: "a. x sin²(x) + C", correct: true },
      { text: "b. sin²(x) + C", correct: false },
      { text: "c. x² sin(x) + C", correct: false },
      { text: "d. 2x sin(x) + C", correct: false },
    ],
  },
  {
    question:
      "16. A satellite dish is shaped like a parabola. Which conic section does it represent?",
    answers: [
      { text: "a. Circle", correct: false },
      { text: "b. Parabola", correct: true },
      { text: "c. Ellipse", correct: false },
      { text: "d. Hyperbola", correct: false },
    ],
  },

  {
    question: "17. Evaluate the integral ∫(1 / (cos(x)+1) dx.",
    answers: [
      { text: "a. ln|cos(x)| + C", correct: false },
      { text: "b. ln|sin(x)| + C", correct: false },
      { text: "c. ln|tan(x)| + C", correct: false },
      { text: "d. ln|sec(x)| + C", correct: true },
    ],
  },
  {
    question:
      "18. Consider the function f(x) = (x² + 3x + 2) / (x + 2). What is the limit of f(x) as x approaches -2?",
    answers: [
      { text: "a. 1", correct: false },
      { text: "b. 2", correct: false },
      { text: "c. -2", correct: false },
      { text: "d. Does not exist", correct: true },
    ],
  },
  {
    question:
      "19. Consider the function f(x) = (x² - 4) / (x - 2). Which of the following statements about the continuity of f(x) is true?",
    answers: [
      { text: "a. f(x) is continuous at x = 2.", correct: false },
      { text: "b. f(x) is discontinuous at x = 2.", correct: true },
      {
        text: "c. The continuity of f(x) cannot be determined.",
        correct: false,
      },
      { text: "d. f(x) is continuous for all values of x.", correct: false },
    ],
  },

  {
    question: "20. Evaluate the integral ∫ 1 / dx",
    answers: [
      {
        text: "a. ½ (x√x²+1 + In ∣x+√x²+1)+ C",
        correct: false,
      },
      {
        text: "b. ⅓  (x√x²+1 + In ∣x+√x²+1)+ C",
        correct: true,
      },
      {
        text: "c. ½ (x√x²+1 - In ∣x+√x²+1)+ C",
        correct: false,
      },
      {
        text: "d. ⅓  (x√x²+1 - In ∣x+√x²+1)+ C",
        correct: false,
      },
    ],
  },
  {
    question:
      "21. The region bounded by the curves y = x^2 and y = 2x is revolved around the x-axis. Which method should be used to find the volume of the resulting solid?",
    answers: [
      { text: "a. Volume of a solid of revolution", correct: false },
      { text: "b. The circular disk method", correct: true },
      { text: "c. The washer method", correct: false },
      { text: "d. The cylindrical shell method", correct: false },
    ],
  },
  {
    question:
      "22. Determine the intervals on which the function g(x) = x²-4x+3 is in creasing or decreasing.",
    answers: [
      {
        text: "a. Increasing on (-∞, 2), decreasing on (2, ∞)",
        correct: false,
      },
      {
        text: "b. Increasing on (-∞, 3), decreasing on (3, ∞)",
        correct: false,
      },
      {
        text: "c. Increasing on (-∞, 1), decreasing on (1, ∞)",
        correct: true,
      },
      {
        text: "d. Increasing on (-∞, 0), decreasing on (0, ∞)",
        correct: false,
      },
    ],
  },

  {
    question:
      "23. A solid is formed by taking cross sections of a region bounded by the curves, y=x and y-x²  Which method should be used to find the volume of the resulting solid?",
    answers: [
      {
        text: "a. Volumes of solids with known cross sections",
        correct: true,
      },
      { text: "b. Length of an arc", correct: false },
      { text: "c. Area of a surface of revolution", correct: false },
      { text: "d. Integration by parts", correct: false },
    ],
  },
  {
    question:
      "24. A solid region R is bounded by the curves y = x² and y = 4 - x². What is the volume of the solid when rotated about the x-axis?",
    answers: [
      { text: "a. 8π/15", correct: false },
      { text: "b. 4π/15", correct: false },
      { text: "c. 16π/15", correct: true },
      { text: "d. 32π/15", correct: false },
    ],
  },
  {
    question:
      "25. The centroid of a plane region with uniform density is the point of:",
    answers: [
      { text: "a. Maximum area", correct: false },
      { text: "b. Minimum area", correct: false },
      { text: "c. Balance", correct: true },
      { text: "d. Origin", correct: false },
    ],
  },

  {
    question:
      "26. In triangle ABC, angle A measures 40 degrees and angle B measures 60 degrees. What is the measure of angle C?",
    answers: [
      { text: "a. 40 degrees", correct: false },
      { text: "b. 60 degrees", correct: false },
      { text: "c. 80 degrees", correct: true },
      { text: "d. 90 degrees", correct: false },
    ],
  },
  {
    question:
      "27. A bakery sold 48 cupcakes on Monday, 32 cupcakes on Tuesday, and 56 cupcakes on Wednesday. What was the total number of cupcakes sold in these three days?",
    answers: [
      { text: "a. 112 cupcakes", correct: false },
      { text: "b. 136 cupcakes", correct: true },
      { text: "c. 144 cupcakes", correct: false },
      { text: "d. 176 cupcakes", correct: false },
    ],
  },
  {
    question:
      "28. It takes Alice 4 hours to complete a task, while it takes Bob 6 hours to complete the same task. If they work together, how long will it take them to complete the task?",
    answers: [
      { text: "a. 2 hours", correct: false },
      { text: "b. 2.4 hours", correct: true },
      { text: "c. 3 hours", correct: false },
      { text: "d. 3.6 hours", correct: false },
    ],
  },
  {
    question:
      "29. A car travels at a speed of 60 km/h for 2 hours and then increases its speed to 80 km/h for the next 3 hours. What is the total distance traveled by the car?",
    answers: [
      { text: "a. 120 km", correct: false },
      { text: "b. 180 km", correct: false },
      { text: "c. 240 km", correct: false },
      { text: "d. 300 km", correct: true },
    ],
  },
  {
    question:
      "30. If a three-digit number is reversed, the resulting number is 396 less than the original number. What is the original number?",
    answers: [
      { text: "a. 150", correct: true },
      { text: "b. 345", correct: false },
      { text: "c. 396", correct: false },
      { text: "d. 595", correct: false },
    ],
  },
  {
    question:
      "31. Samantha has a total of 45 coins, consisting of nickels and dimes. The total value of the coins is $4.80. How many nickels does she have?",
    answers: [
      { text: "a. 12", correct: false },
      { text: "b. 15", correct: false },
      { text: "c. 18", correct: false },
      { text: "d. 20", correct: true },
    ],
  },
  {
    question: "32. What is the role of the student in math education?",
    answers: [
      {
        text: "a. Passively receive information from the teacher",
        correct: false,
      },
      {
        text: "b. Memorize mathematical procedures without understanding",
        correct: false,
      },
      {
        text: "c. Actively engage in problem-solving and mathematical reasoning",
        correct: true,
      },
      {
        text: "d. Solely rely on calculators or technology for all calculations",
        correct: false,
      },
    ],
  },
  {
    question: "33. What is the primary purpose of microteaching?",
    answers: [
      { text: "a. To provide hands-on training for teachers", correct: true },
      { text: "b. To assess student learning outcomes", correct: false },
      { text: "c. To conduct research on learning models", correct: false },
      {
        text: "d. To develop new technologies for education",
        correct: false,
      },
    ],
  },
  {
    question:
      "34. In a microteaching session, a teacher is working on their instructional delivery and using multimedia resources to enhance student engagement. What is the application level of this micro-teaching activity?",
    answers: [
      {
        text: "a. To provide opportunities for teachers to observe and critique their colleagues' teaching methods",
        correct: false,
      },
      {
        text: "b. To simulate a real classroom environment and allow teachers to practice their teaching skills",
        correct: true,
      },
      {
        text: "c. To evaluate teachers' performance and determine their eligibility for promotion",
        correct: false,
      },
      {
        text: "d. To assess students' learning outcomes and academic achievements",
        correct: false,
      },
    ],
  },

  {
    question: "35. Expand (x + 2)³ using Pascal's Triangle.",
    answers: [
      { text: "a. x³ + 6x² + 12x + 8", correct: true },
      { text: "b. x³ + 6x² + 8x + 12", correct: false },
      { text: "c. x³ + 2x² + 12x + 8", correct: false },
      { text: "d. x³ + 2x² + 8x + 12", correct: false },
    ],
  },
  {
    question:
      "36. During a micro-teaching session, a teacher is practicing different questioning techniques to promote critical thinking among students. Which application level of Bloom's Taxonomy is the teacher focusing on?",
    answers: [
      {
        text: "a. Applying higher-order thinking skills to deepen students' understanding",
        correct: true,
      },
      {
        text: "b. Applying scaffolding techniques to support students' learning",
        correct: false,
      },
      {
        text: "c. Applying differentiated instruction to address students' individual needs",
        correct: false,
      },
      {
        text: "d. Applying effective communication strategies to facilitate classroom discussions",
        correct: false,
      },
    ],
  },

  {
    question:
      "37. If a number leaves a remainder of 3 when divided by 4 and a remainder of 2 when divided by 5, what is the smallest positive integer value it could have?",
    answers: [
      { text: "a. 8", correct: false },
      { text: "b. 17", correct: false },
      { text: "c. 22", correct: true },
      { text: "d. 43", correct: false },
    ],
  },
  {
    question:
      "38. Consider a group G with the operation *, where G = {w,x,y,z} and the group table is as follows:\nWhat is x * z?",
    answers: [
      { text: "a. w", correct: false },
      { text: "b. x", correct: false },
      { text: "c. y", correct: false },
      { text: "d. z", correct: true },
    ],
  },
  {
    question:
      "39. Two friends decide to meet at a park. One friend visits the park every 15 days, and the other friend visits every 20 days. After how many days will they both visit the park on the same day?",
    answers: [
      { text: "a. 30 days", correct: false },
      { text: "b. 40 days", correct: false },
      { text: "c. 60 days", correct: true },
      { text: "d. 120 days", correct: false },
    ],
  },
  {
    question: "40. How can the concept of cosets be applied in Group Theory?",
    answers: [
      {
        text: "a. Cosets help determine the order of a subgroup in relation to the order of the group.",
        correct: true,
      },
      {
        text: "b. Cosets provide a way to analyze the properties of isomorphisms between groups.",
        correct: false,
      },
      {
        text: "c. Cosets are used to define the concept of normal subgroups.",
        correct: false,
      },
      {
        text: "d. Cosets allow for the classification of groups based on their factor groups.",
        correct: false,
      },
    ],
  },

  {
    question: "41. What is the significance of Sylow Theorems in Group Theory?",
    answers: [
      {
        text: "a. Sylow Theorems provide a way to determine the order of a subgroup in relation to the order of the group.",
        correct: false,
      },
      {
        text: "b. Sylow Theorems help classify groups based on their factor groups.",
        correct: false,
      },
      {
        text: "c. Sylow Theorems establish the existence of normal subgroups.",
        correct: false,
      },
      {
        text: "d. Sylow Theorems provide information about the number of subgroups of a given order in a group.",
        correct: true,
      },
    ],
  },

  {
    question: "42. Which of the following is an example of a ring?",
    answers: [
      { text: "a. (Z, +)", correct: true },
      { text: "b. (N, +)", correct: false },
      { text: "c. (Q, *)", correct: false },
      { text: "d. (R, -)", correct: false },
    ],
  },
  {
    question:
      "43. What is the purpose of using stratified sampling in research?",
    answers: [
      {
        text: "a. To ensure that each member of the population has an equal chance of being selected",
        correct: false,
      },
      {
        text: "b. To randomly select participants from different strata or subgroups of the population",
        correct: true,
      },
      {
        text: "c. To select participants based on specific characteristics or criteria of interest",
        correct: false,
      },
      {
        text: "d. To divide the population into clusters and randomly select clusters for the study",
        correct: false,
      },
    ],
  },
  {
    question:
      "44. What is the purpose of pilot testing an instrument before conducting the main study?",
    answers: [
      { text: "a. To collect preliminary data for analysis", correct: false },
      {
        text: "b. To validate the reliability and validity of the instrument",
        correct: false,
      },
      {
        text: "c. To make necessary adjustments and improvements to the instrument",
        correct: true,
      },
      {
        text: "d. To ensure the ethical considerations of the research are met",
        correct: false,
      },
    ],
  },
  {
    question:
      "45. What is the result of the matrix multiplication A * B, where A = [[1, 2], [3, 4]] and B = [[5, 6], [7, 8]]",
    answers: [
      { text: "a. [[19, 22], [43, 50]]", correct: false },
      { text: "b. [[23, 34], [31, 46]]", correct: true },
      { text: "c. [[11, 18], [15, 22]]", correct: false },
      { text: "d. [[12, 16], [18, 24]]", correct: false },
    ],
  },
  {
    question:
      "46. What is the echelon form of this matrix? A = [[2, 4], [1, 3]]",
    answers: [
      { text: "a. [[1, 3], [0, 1]]", correct: false },
      { text: "b. [[1, 2], [0, 1]]", correct: true },
      { text: "c. [[2, 4], [0, 1]]", correct: false },
      { text: "d. [[1, 0], [0, 1]]", correct: false },
    ],
  },
  {
    question: "47. What is the determinant of the matrix A = [[3, 1], [2, -2]]",
    answers: [
      { text: "a. -8", correct: true },
      { text: "b. -4", correct: false },
      { text: "c. 8", correct: false },
      { text: "d. 4", correct: false },
    ],
  },

  {
    question:
      "48. In the context of research, what does data collection involve?",
    answers: [
      {
        text: "a. Analyzing and interpreting research findings",
        correct: false,
      },
      {
        text: "b. Designing the research methodology and sampling technique",
        correct: false,
      },
      {
        text: "c. Gathering information or observations relevant to the research objectives",
        correct: true,
      },
      {
        text: "d. Developing a research question or hypothesis",
        correct: false,
      },
    ],
  },
  {
    question:
      "49. How can researchers ensure the validity of their research findings?",
    answers: [
      {
        text: "a. By using advanced statistical techniques in data analysis",
        correct: false,
      },
      {
        text: "b. By conducting a thorough literature review prior to the study",
        correct: false,
      },
      {
        text: "c. By including a diverse sample of participants in the research",
        correct: false,
      },
      {
        text: "d. By employing appropriate research instruments and measures",
        correct: true,
      },
    ],
  },

  {
    question:
      "50. Which statistical test is appropriate for comparing the means of two independent groups?",
    answers: [
      { text: "a. Chi-square test", correct: false },
      { text: "b. Analysis of variance (ANOVA)", correct: false },
      { text: "c. t-test", correct: true },
      { text: "d. Correlation analysis", correct: false },
    ],
  },
];

export default questions;
