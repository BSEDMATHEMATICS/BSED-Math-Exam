const questions = [
  {
    question:
      "1. Consider a linear transformation T: R² -> R³. The range of T is a subspace of:",
    answers: [
      { text: "a. R²", correct: false },
      { text: "b. R³", correct: true },
      { text: "c. R⁵", correct: false },
      { text: "d. R⁶", correct: false },
    ],
  },
  {
    question:
      "2. How can the Central Limit Theorem help in the process of testing hypotheses?",
    answers: [
      {
        text: "a. It enables precise population parameter estimation.",
        correct: false,
      },
      {
        text: "b. It ensures that the sample mean follows a normal distribution.",
        correct: true,
      },
      {
        text: "c. It assists in figuring out the right sample size for testing hypotheses.",
        correct: false,
      },
      {
        text: "d. It offers a formula for figuring out the sample mean's standard error.",
        correct: false,
      },
    ],
  },
  {
    question: "3. How can the Mean be found using the Deviation Method?",
    answers: [
      {
        text: "a. By calculating the variance of the sample",
        correct: false,
      },
      {
        text: "b. By subtracting the median from the mode of the sample",
        correct: false,
      },
      {
        text: "c. By finding the average of the deviations from the mean of the sample",
        correct: true,
      },
      {
        text: "d. By summing the values in the sample and dividing by the sample size",
        correct: false,
      },
    ],
  },
  {
    question:
      "4. When conducting a chi-square test for independence, what does it assess?",
    answers: [
      { text: "a. The variation between samples", correct: false },
      { text: "b. The variation within samples", correct: false },
      {
        text: "c. The total variation among the values of all the samples",
        correct: false,
      },
      {
        text: "d. The association between two categorical variables",
        correct: true,
      },
    ],
  },
  {
    question:
      "5. Which correlation test is appropriate for analyzing the relationship between two ordinal variables or when the assumption of linearity is violated?",
    answers: [
      { text: "a. Pearson's correlation", correct: false },
      { text: "b. Spearman's correlation", correct: true },
      { text: "c. Kendall's correlation", correct: false },
      { text: "d. Point-biserial correlation", correct: false },
    ],
  },
  {
    question:
      "6. How does multiple regression differ from simple regression analysis?",
    answers: [
      {
        text: "a. Multiple regression can handle non-linear relationships, while simple regression cannot.",
        correct: false,
      },
      {
        text: "b. Multiple regression involves analyzing multiple dependent variables, while simple regression focuses on a single dependent variable.",
        correct: false,
      },
      {
        text: "c. Multiple regression considers multiple independent variables, while simple regression involves only one independent variable.",
        correct: true,
      },
      {
        text: "d. Multiple regression requires a larger sample size compared to simple regression.",
        correct: false,
      },
    ],
  },
  {
    question:
      "7. Which term is commonly used to describe the process of finding the indefinite integral of a function?",
    answers: [
      { text: "a. Basic Integration", correct: false },
      { text: "b. Fundamental Theorem of Calculus", correct: false },
      { text: "c. Integration by Parts", correct: true },
      { text: "d. Definite Integral", correct: false },
    ],
  },
  {
    question:
      "8. Which technique is commonly used to integrate exponential functions?",
    answers: [
      { text: "a. Integration by parts", correct: false },
      { text: "b. Substitution", correct: true },
      { text: "c. Partial fractions", correct: false },
      { text: "d. Trigonometric substitution", correct: false },
    ],
  },
  {
    question:
      "9. Evaluate the integral ∫(x^2 + 2x + 1) dx using algebraic substitution.",
    answers: [
      { text: "a. (1/3)x³ + x² + x + C", correct: false },
      { text: "b. (1/3)x³ + (2/3)x² + x + C", correct: true },
      { text: "c. (1/3)x³ + x + C", correct: false },
      { text: "d. (1/3)x² + x + C", correct: false },
    ],
  },
  {
    question:
      "10. Which geometric application of the definite integral is used to find the area enclosed by two curves?",
    answers: [
      { text: "a. Area under a curve", correct: false },
      { text: "b. Area between two curves", correct: true },
      { text: "c. Area in polar coordinates", correct: false },
      { text: "d. None of the above", correct: false },
    ],
  },
  {
    question:
      "11. The definite integral is employed to determine the ________ of a region enclosed by two curves with respect to a given axis.",
    answers: [
      { text: "a. Area", correct: true },
      { text: "b. Perimeter", correct: false },
      { text: "c. Volume ", correct: false },
      { text: "d. Length", correct: false },
    ],
  },
  {
    question: "12. What is the centroid of a plane area?",
    answers: [
      { text: "a. The center of mass of the area", correct: true },
      { text: "b. The point where the area is balanced", correct: false },
      {
        text: "c. The point of intersection of the medians of the area",
        correct: false,
      },
      {
        text: "d. The average of the coordinates of all the points in the arc",
        correct: false,
      },
    ],
  },
  {
    question:
      "13. Which of the following statements about the moment of inertia of a plane area is correct?",
    answers: [
      {
        text: "a. It represents the resistance of the area to angular acceleration.",
        correct: true,
      },
      {
        text: "b. It is a measure of the area's linear momentum.",
        correct: false,
      },
      { text: "c. It depends on the area's center of mass.", correct: false },
      {
        text: "d. It is calculated by dividing the area by its radius.",
        correct: false,
      },
    ],
  },
  {
    question: "14. What does double integration represent in calculus?",
    answers: [
      {
        text: "a. The area under a curve in two dimensions.",
        correct: true,
      },
      {
        text: "b. The accumulation of a quantity over a rectangular region.",
        correct: false,
      },
      {
        text: "c. The calculation of the average value of a function.",
        correct: false,
      },
      {
        text: "d. The determination of the limit of a sequence",
        correct: false,
      },
    ],
  },
  {
    question: "15. The role of the teacher in math education includes:",
    answers: [
      {
        text: "a. Providing solutions to all problems without student involvement",
        correct: false,
      },
      {
        text: "b. Encouraging students to rely on memorization rather than understanding",
        correct: false,
      },
      {
        text: "c. Facilitating meaningful mathematical discussions and guiding student learning",
        correct: true,
      },
      {
        text: "d. Assigning repetitive drills without explanation or context",
        correct: false,
      },
    ],
  },
  {
    question:
      "16. What are the key elements of sociological preferences in education?",
    answers: [
      { text: "a. Teaching strategies and methods", correct: false },
      { text: "b. Cognitive abilities and learning styles", correct: false },
      { text: "c. Classroom environment and resources", correct: false },
      {
        text: "d. Teacher-student interactions and communication",
        correct: true,
      },
    ],
  },

  {
    question:
      "17. Which of the following statements best reflects the impact of the NCTM Principles on mathematics education?",
    answers: [
      {
        text: "a. The principles have been widely adopted and implemented in schools across the country.",
        correct: true,
      },
      {
        text: "b. The principles have received mixed reviews and have not had a significant impact on mathematics education.",
        correct: false,
      },
      {
        text: "c. The principles are outdated and do not align with current educational practices.",
        correct: false,
      },
      {
        text: "d. The principles have only been implemented in select schools and have not reached a wider audience.",
        correct: false,
      },
    ],
  },

  {
    question:
      "18. Which of the following is an example of summative assessment?",
    answers: [
      {
        text: "a. Observing students' participation in class discussions",
        correct: false,
      },
      {
        text: "b. Conducting a quiz or short test after each lesson",
        correct: false,
      },
      {
        text: "c. Administering a final exam at the end of a semester",
        correct: true,
      },
      {
        text: "d. Providing students with regular opportunities for self-reflection",
        correct: false,
      },
    ],
  },
  {
    question: "19. What is the main goal of effective classroom management?",
    answers: [
      {
        text: "a. To enforce strict discipline and control over students",
        correct: false,
      },
      {
        text: "b. To create a calm and orderly learning environment",
        correct: true,
      },
      {
        text: "c. To prioritize teacher-centered instruction",
        correct: false,
      },
      {
        text: "d. To eliminate all student disruptions and distractions",
        correct: false,
      },
    ],
  },
  {
    question:
      "20. Which of the following is an effective strategy for assessing student learning during a lesson?",
    answers: [
      {
        text: "a. Providing written feedback on assignments",
        correct: false,
      },
      { text: "b. Using a variety of formative assessments", correct: true },
      {
        text: "c. Administering a final exam at the end of the unit",
        correct: false,
      },
      { text: "d. Assigning homework regularly", correct: false },
    ],
  },
  {
    question:
      "21. Which of the following is a common component of micro-teaching?",
    answers: [
      {
        text: "a. Observing experienced teachers in their classrooms",
        correct: false,
      },
      {
        text: "b. Delivering a full-length lecture to a large group of students",
        correct: false,
      },
      {
        text: "c. Conducting research on effective teaching methods",
        correct: false,
      },
      {
        text: "d. Practicing specific teaching skills in a controlled setting",
        correct: true,
      },
    ],
  },

  {
    question:
      "22. Among the following groups, which one is not an Albelian group?",
    answers: [
      { text: "a. The group of integers (Z, +)", correct: false },
      { text: "b. The group of real numbers (R, +)", correct: false },
      { text: "c. The group of rational numbers (Q, *)", correct: false },
      { text: "d. The group of matrices (M, x)", correct: true },
    ],
  },
  {
    question:
      "23. In a group Z, if every element has an inverse and the group operation is associative, what can we conclude about Z?",
    answers: [
      { text: "a. Z is an Abelian group", correct: false },
      { text: "b. Z is a semigroup", correct: true },
      { text: "c. Z is a monoid", correct: false },
      { text: "d. Z is a cyclic group", correct: false },
    ],
  },

  {
    question:
      "24. What is the main purpose of conducting a problem tree analysis in research?",
    answers: [
      { text: "a. To define the research problem clearly", correct: false },
      {
        text: "b. To identify the underlying causes and effects of the problem",
        correct: true,
      },
      {
        text: "c. To determine the appropriate research intervention",
        correct: false,
      },
      {
        text: "d. To present the research findings in a graphical format",
        correct: false,
      },
    ],
  },
  {
    question:
      "25. Which of the following research models focuses on understanding the social and cultural context of a phenomenon?",
    answers: [
      { text: "a. Experimental research model", correct: false },
      { text: "b. Qualitative research model", correct: true },
      { text: "c. Survey research model", correct: false },
      { text: "d. Action research model", correct: false },
    ],
  },
  {
    question:
      "26. What is the role of the 'Rationale and Background' section in a research proposal in mathematics education?",
    answers: [
      {
        text: "a. To summarize the findings of previous studies in the field",
        correct: false,
      },
      {
        text: "b. To present the objectives and research questions of the study",
        correct: false,
      },
      {
        text: "c. To provide a theoretical framework for the research",
        correct: true,
      },
      {
        text: "d. To analyze and interpret the research findings",
        correct: false,
      },
    ],
  },
  {
    question:
      "27. What is the difference between related literature from related studies in a literature review?",
    answers: [
      {
        text: "a. Related ecomplasses published books, where related studies involve academic articles.",
        correct: false,
      },
      {
        text: "b. Related literature offers foundational knowledge, while related studies offers empirical investigations.",
        correct: true,
      },
      {
        text: "c. Related literature is based on qualitative methods, while related studies use quantitative methods.",
        correct: false,
      },
      {
        text: "d. Related literature focuses on theoretical concepts, while related studies examine practical applications.",
        correct: false,
      },
    ],
  },
  {
    question:
      "28. During a dry-run, what is the main objective of seeking feedback from peers or colleagues?",
    answers: [
      {
        text: "a. To receive validation and praise for the presentation",
        correct: false,
      },
      {
        text: "b. To identify areas for improvement and make necessary adjustments",
        correct: true,
      },
      {
        text: "c. To showcase the presentation skills and expertise to others",
        correct: false,
      },
      {
        text: "d. To evaluate the effectiveness of visual aids or presentation slides",
        correct: false,
      },
    ],
  },
  {
    question: "29. What does instrument reliability refer to in research?",
    answers: [
      {
        text: "a. The accuracy of the instrument in measuring the intended variables",
        correct: false,
      },
      {
        text: "b. The consistency of the instrument in producing similar results across multiple administrations",
        correct: true,
      },
      {
        text: "c. The ability of the instrument to measure a wide range of variables",
        correct: false,
      },
      {
        text: "d. The validity of the instrument in capturing the true essence of the research topic",
        correct: false,
      },
    ],
  },
  {
    question: "30. What is the role of data analysis in the research process?",
    answers: [
      {
        text: "a. To develop research objectives and hypotheses",
        correct: false,
      },
      {
        text: "b. To determine the appropriate research methodology",
        correct: false,
      },
      {
        text: "c. To summarize and organize the collected data",
        correct: true,
      },
      {
        text: "d. To gather information or observations relevant to the research objectives",
        correct: false,
      },
    ],
  },
  {
    question:
      "31. What is essential for drawing valid conclusions in research?",
    answers: [
      {
        text: "a. Ensuring that the research findings align with the researcher`s personal beliefs",
        correct: false,
      },
      {
        text: "b. Accurately interpreting the data and evidence collected in the study",
        correct: true,
      },
      {
        text: "c. Generalizing the research findings to a larger population",
        correct: false,
      },
      {
        text: "d. Comparing the research results with those of previous studies",
        correct: false,
      },
    ],
  },
  {
    question:
      "32. What is the primary purpose of presenting a research output to a scientific conference?",
    answers: [
      {
        text: "a. To disseminate research findings to a wider audience",
        correct: true,
      },
      {
        text: "b. To receive feedback and engage in scholarly discussions",
        correct: false,
      },
      {
        text: "c. To establish professional connections and collaborations",
        correct: false,
      },
      {
        text: "d. To enhance the researcher's reputation and visibility in the field",
        correct: false,
      },
    ],
  },

  {
    question:
      "33. At which stage of curriculum development would you typically use a Math Curriculum Framework?",
    answers: [
      { text: "a. Planning and design", correct: true },
      { text: "b. Implementation and instruction", correct: false },
      { text: "c. Assessment and evaluation", correct: false },
      { text: "d. Reflection and revision", correct: false },
    ],
  },
  {
    question:
      "34. What is the main purpose of using manipulatives in mathematics teaching and learning?",
    answers: [
      {
        text: "a. To make mathematics lessons more engaging and entertaining for students",
        correct: false,
      },
      {
        text: "b. To provide visual representations that help students understand abstract concepts",
        correct: true,
      },
      {
        text: "c. To replace traditional teaching methods and textbooks with hands-on materials",
        correct: false,
      },
      {
        text: "d. To promote memorization of mathematical procedures and formulas",
        correct: false,
      },
    ],
  },
  {
    question:
      "35. When considering the appropriateness of teaching aids and instructional materials in mathematics, what criteria should be evaluated?",
    answers: [
      {
        text: "a. The popularity and brand reputation of the materials",
        correct: false,
      },
      {
        text: "b. The availability of the materials in local stores or online platforms",
        correct: false,
      },
      {
        text: "c. The alignment with the curriculum objectives and learning goals",
        correct: true,
      },
      {
        text: "d. The personal preference of the teacher in using specific materials",
        correct: false,
      },
    ],
  },

  {
    question:
      "36. When preparing a lesson plan in mathematics, what is an example of an instructional objective at the application level?",
    answers: [
      {
        text: "a. Reciting multiplication tables accurately",
        correct: false,
      },
      {
        text: "b. Solving word problems involving addition and subtraction",
        correct: false,
      },
      {
        text: "c. Identifying the properties of different shapes",
        correct: false,
      },
      {
        text: "d. Applying geometric principles to solve real-world problems",
        correct: true,
      },
    ],
  },
  {
    question:
      "37. Which of the following is an example of an instructional strategy that can be used to teach multiplication in mathematics?",
    answers: [
      {
        text: "a. Direct instruction with teacher-led explanations",
        correct: true,
      },
      {
        text: "b. Playing educational math games on the computer",
        correct: false,
      },
      {
        text: "c. Watching a documentary about famous mathematicians",
        correct: false,
      },
      {
        text: "d. Writing an essay about the history of mathematics",
        correct: false,
      },
    ],
  },

  {
    question:
      "38. Which of the following differentiates traditional assessment from authentic assessment in evaluating mathematics in learning?",
    answers: [
      {
        text: "a. Traditional assessment emphasizes standardized tests, while authentic assessment emphasizes real-life applications.",
        correct: true,
      },
      {
        text: "b. Traditional assessment relies on multiple-choice questions, while authentic assessment involves open-ended tasks.",
        correct: false,
      },
      {
        text: "c. Traditional assessment evaluates factual knowledge, while authentic assessment evaluates problem-solving skills.",
        correct: false,
      },
      {
        text: "d. Traditional assessment offers immediate feedback, while authentic assessment involves long-term evaluation.",
        correct: false,
      },
    ],
  },
  {
    question:
      "39. What is the kind of assessment that focuses on evaluating students' understanding, application, and problem-solving skills in mathematics?",
    answers: [
      { text: "a. Formative assessment", correct: true },
      { text: "b. Summative assessment", correct: false },
      { text: "c. Diagnostic assessment", correct: false },
      { text: "d. Norm-referenced assessment", correct: false },
    ],
  },
  {
    question:
      "40. What is the primary goal of mathematics instruction and teaching strategies?",
    answers: [
      {
        text: "a. To memorize and reproduce mathematical formulas",
        correct: false,
      },
      {
        text: "b. To promote critical thinking and problem-solving skills",
        correct: true,
      },
      {
        text: "c. To focus on rote learning and repetitive practice",
        correct: false,
      },
      {
        text: "d. To encourage competition and ranking among students",
        correct: false,
      },
    ],
  },
  {
    question:
      "41. What is the role of formative assessment in mathematics instruction?",
    answers: [
      {
        text: "a. Summarizing students' performance at the end of a unit or lesson",
        correct: false,
      },
      {
        text: "b. Providing feedback and guidance to improve students' learning and understanding",
        correct: true,
      },
      {
        text: "c. Comparing students' performance to national or international standards",
        correct: false,
      },
      {
        text: "d. Determining students' final grades and academic achievements",
        correct: false,
      },
    ],
  },
  {
    question:
      "42. What is the main focus of performance standards in assessment?",
    answers: [
      {
        text: "a. Evaluating students' personal characteristics and behavior",
        correct: false,
      },
      {
        text: "b. Assessing students' cognitive abilities and problem-solving skills",
        correct: true,
      },
      {
        text: "c. Measuring students' physical fitness and athletic performance",
        correct: false,
      },
      {
        text: "d. Determining students' artistic talents and creative expression",
        correct: false,
      },
    ],
  },
  {
    question: "43. How does outcomes-based education relate to assessment?",
    answers: [
      {
        text: "a. It focuses on the alignment of assessment with specific learning outcomes.",
        correct: true,
      },
      {
        text: "b. It emphasizes the use of traditional assessment methods.",
        correct: false,
      },
      {
        text: "c. It disregards the importance of performance standards in assessment.",
        correct: false,
      },
      {
        text: "d. It promotes subjective and biased assessment practices.",
        correct: false,
      },
    ],
  },
  {
    question:
      "44. What is the primary purpose of performance standards in assessment?",
    answers: [
      {
        text: "a. Assessing students' personal attributes and conduct.",
        correct: false,
      },
      {
        text: "b. Evaluating students' cognitive capacities and problem-solving aptitude.",
        correct: true,
      },
      {
        text: "c. Measuring students' physical achievements.",
        correct: false,
      },
      {
        text: "d. Determining students' artistic abilities and creative expression.",
        correct: false,
      },
    ],
  },

  {
    question:
      "45. How does the discussion on ethnomathematics contribute to the evaluation of assessment in mathematics teaching?",
    answers: [
      {
        text: "a. It highlights the importance of technology in mathematics education.",
        correct: false,
      },
      {
        text: "b. It explores the impact of socioeconomic status on mathematical achievement.",
        correct: false,
      },
      {
        text: "c. It addresses cultural perspectives and their influence on mathematics learning and assessment.",
        correct: true,
      },
      {
        text: "d. It examines the internal and external issues in mathematical education.",
        correct: false,
      },
    ],
  },

  {
    question: "46. What is the nth-term test for divergence used for?",
    answers: [
      {
        text: "a. To determine if a series converges or diverges.",
        correct: true,
      },
      { text: "b. To find the sum of a convergent series.", correct: false },
      {
        text: "c. To determine if a sequence is bounded or unbounded.",
        correct: false,
      },
      { text: "d. To find the nth term of a series.", correct: false },
    ],
  },
  {
    question:
      "47. Which test is used to determine the convergence or divergence of a series by comparing it to another known series?",
    answers: [
      { text: "a. Integral test", correct: false },
      { text: "b. Comparison test", correct: true },
      { text: "c. Limit comparison test", correct: false },
      { text: "d. Ratio test", correct: false },
    ],
  },
  {
    question:
      "48. Given the series ∑(1/2^n). What is the convergence or divergence of this series using the ratio test?",
    answers: [
      { text: "a. The series converges.", correct: true },
      { text: "b. The series diverges.", correct: false },
      { text: "c. The ratio test is inconclusive.", correct: false },
      {
        text: "d. The series terms are not suitable for the ratio test.",
        correct: false,
      },
    ],
  },
  {
    question:
      "49. Given the power series ∑(n²)(x+3)^n, what is the interval of convergence (IoC) for this power series?",
    answers: [
      { text: "a. -4 < x < -3", correct: false },
      { text: "b. -3 < x < -2", correct: true },
      { text: "c. -2 < x < -1", correct: false },
      {
        text: "d. The IoC cannot be determined from the given information.",
        correct: false,
      },
    ],
  },
  {
    question:
      "50. Given the power series representation of a function f(x) as ∑(n²)(x-3)^n, what is the power series representation of the derivative f'(x)?",
    answers: [
      { text: "a. ∑(n²)(n+1)(x-3)^n", correct: false },
      { text: "b. ∑(n²)(x-3)^(n-1)", correct: false },
      { text: "c. ∑(n³)(x-3)^n", correct: true },
      { text: "d. ∑(n²)(x-3)^(n+1)", correct: false },
    ],
  },

  {
    question:
      "51. When using a Taylor polynomial to approximate a function, which factor determines the accuracy of the approximation?",
    answers: [
      { text: "a. The number of terms in the polynomial", correct: false },
      {
        text: "b. The value of the function at the approximation point",
        correct: false,
      },
      { text: "c. The degree of the polynomial", correct: true },
      { text: "d. The error term of the polynomial", correct: false },
    ],
  },
  {
    question:
      "52. Find the double integral ∫∫R (2x+3y)dA, Where R is the region bounded by the curves y=x and y=2x² in the xy-plane.",
    answers: [
      { text: "a. 3/2", correct: false },
      { text: "b. 5/2", correct: true },
      { text: "c. 6/2", correct: false },
      { text: "d. 11/2", correct: false },
    ],
  },
  {
    question:
      "53. To evaluate the double integral ∫∫R (r²) d A in polar coordinates, we first express the differential area element dA in polar form, which is r dr dθ in this case. Then, we integrate over the region R, which is the circle with a radius of 2.",
    answers: [
      { text: "a. 4π", correct: false },
      { text: "b. 8π", correct: true },
      { text: "c. 16π", correct: false },
      { text: "d. 0", correct: false },
    ],
  },
  {
    question:
      "54. Consider the regions S defined by the inequalities z ≥ 0 and x² + y² ≤ 4. What is the interpretation of hte triple integral ∭szdV?",
    answers: [
      {
        text: "a. The volume of the solid region S above the xy-plane",
        correct: true,
      },
      {
        text: "b. The volume of the solid region S below xy-plane",
        correct: false,
      },
      { text: "c. The average value of z over the region S.", correct: false },
      { text: "d. The centroid of the region S.", correct: false },
    ],
  },
  {
    question:
      "55. Cibsuder a solid region V defined by the inequalites z ≥ 0 and x² + y² ≤ 9. What is the interpretation of hte triple integral ∭szdV?",
    answers: [
      {
        text: "a. The volume of the region V above the xy-plane",
        correct: true,
      },
      {
        text: "b. The volume of the solid region V below the xy-plane",
        correct: false,
      },
      { text: "c. The average value of z over the region V", correct: false },
      { text: "d. The centroid of the region V", correct: false },
    ],
  },
  {
    question:
      "56. When evaluating a triple integral using cylindrical coordinates, which form of the volume element is appropriate?",
    answers: [
      { text: "a. dV = dx dy dz", correct: false },
      { text: "b. dV = r dr dθ dz", correct: true },
      { text: "c. dV = r dr dθ", correct: false },
      { text: "d. dV = ρ² sinφ dp dφ dθ", correct: false },
    ],
  },
  {
    question:
      "57.	A solid region S is bounded by the planes z = 0, x = 0, y = 0, x + y + z = 1. Which of the following triple integrals represents the volume of the solid region S?",
    answers: [
      { text: "a. ∭s 1dV", correct: false },
      { text: "b. ∭s (x + y + z) dV", correct: true },
      { text: "c. ∭s (x² + y² + z²) dV", correct: false },
      { text: "d. ∭s (xyz) dV", correct: false },
    ],
  },

  {
    question:
      "58. An annuity due provides monthly payments of ₱3,500 for 10 years, with the first payment made immediately. If the interest rate is 4% compounded monthly, what is the present value of this annuity as a percentage of the total payments?",
    answers: [
      { text: "a. 11.28%", correct: false },
      { text: "b. 12.98%", correct: true },
      { text: "c. 13.34%", correct: false },
      { text: "d. 14.51%", correct: false },
    ],
  },

  {
    question:
      "59. What type of data representation is a stem-and-leaf diagram?",
    answers: [
      { text: "a. Tabular form", correct: false },
      { text: "b. Graphical form", correct: true },
      { text: "c. Textual form", correct: false },
      { text: "d. None of the above", correct: false },
    ],
  },
  {
    question: "60. What does a cumulative frequency graph show?",
    answers: [
      {
        text: "a. The cumulative frequency of each class interval",
        correct: true,
      },
      { text: "b. The range of values within each class", correct: false },
      { text: "c. The midpoint of each class interval", correct: false },
      { text: "d. The class size of each class interval", correct: false },
    ],
  },
  {
    question:
      "61. In a dataset of 100 scores, what does the 25th percentile represent?",
    answers: [
      { text: "a. The score that is 25% of the range", correct: false },
      {
        text: "b. The score that is higher than 25% of the other scores",
        correct: false,
      },
      {
        text: "c. The score that is lower than 25% of the other scores",
        correct: true,
      },
      {
        text: "d. The score that is exactly in the middle of the dataset",
        correct: false,
      },
    ],
  },
  {
    question:
      "62. Which measure of dispersion is calculated by taking the square root of the variance?",
    answers: [
      { text: "a. Range", correct: false },
      { text: "b. Mean Absolute Deviation", correct: false },
      { text: "c. Interquartile range", correct: false },
      { text: "d. Standard Deviation", correct: true },
    ],
  },
  {
    question:
      "63. What is the name of the rule that states that in any distribution, most of the data is clustered around the mean, with some percentage falling within one, two, and three standard deviations from the mean?",
    answers: [
      { text: "a. Standard Score", correct: false },
      { text: "b. Normal Curve", correct: false },
      { text: "c. Empirical Rule", correct: true },
      { text: "d. Chebyshev's Theorem", correct: false },
    ],
  },
  {
    question: "64. Kurtosis is a measure that describes the:",
    answers: [
      { text: "a. Flatness or peakedness of a distribution", correct: true },
      { text: "b. Skewness of a distribution", correct: false },
      { text: "c. Spread of the data", correct: false },
      { text: "d. Central tendency of the data", correct: false },
    ],
  },
  {
    question:
      "65. Which type of Chi-square test is used to determine if observed data fits an expected distribution?",
    answers: [
      { text: "a. Goodness-of-fit test", correct: true },
      { text: "b. Test of association", correct: false },
      { text: "c. Chi-square independence test", correct: false },
      { text: "d. Chi-square homogeneity test", correct: false },
    ],
  },
  {
    question:
      "66. Which of the following represents the slope-intercept form of the equation of a line?",
    answers: [
      { text: "a. y = mx + b", correct: true },
      { text: "b. Ax + By = C", correct: false },
      { text: "c. (x - h)² + (y - k)² = r²", correct: false },
      { text: "d. y - y₁ = m(x - x₁)", correct: false },
    ],
  },

  {
    question:
      "67. Find the derivative of the function f(x) = x³ + 2x² - 5x + 1 at x = 2.",
    answers: [
      { text: "a. 12", correct: false },
      { text: "b. 13", correct: false },
      { text: "c. 10", correct: false },
      { text: "d. 15", correct: true },
    ],
  },

  {
    question:
      "68. Evaluate the definite integral: ∫(2x + 3) dx from x = 0 to x = 5.",
    answers: [
      { text: "a. 25", correct: false },
      { text: "b. 40", correct: true },
      { text: "c. 38", correct: false },
      { text: "d. 61", correct: false },
    ],
  },

  {
    question:
      "69. In triangle ABC, side AB measures 3 cm and side AC measures 4 cm. If the included angle at vertex A is 90 degrees, what is the length of side BC?",
    answers: [
      { text: "a. 5 cm", correct: true },
      { text: "b. 7 cm", correct: false },
      { text: "c. 9 cm", correct: false },
      { text: "d. 12 cm", correct: false },
    ],
  },

  {
    question:
      "70. What type of symmetry is exhibited by a figure that remains unchanged after a reflection and a translation?",
    answers: [
      { text: "a. Reflectional symmetry", correct: false },
      { text: "b. Translational symmetry", correct: false },
      { text: "c. Rotational symmetry", correct: false },
      { text: "d. Glide reflection symmetry", correct: true },
    ],
  },

  {
    question:
      "71. Which model of non-Euclidean geometry represents hyperbolic geometries on a disk or half-plane?",
    answers: [
      { text: "a. Backgrounds and History", correct: false },
      { text: "b. Models of Hyperbolic Geometry", correct: false },
      { text: "c. Poincare Model", correct: true },
      { text: "d. Lobachevskian Model", correct: false },
    ],
  },
  {
    question:
      "72. What is the significance of studying the backgrounds and history of non-Euclidean geometry?",
    answers: [
      {
        text: "a. It provides insights into the development of mathematical theories.",
        correct: true,
      },
      {
        text: "b. It helps understand the principles of Euclidean geometry.",
        correct: false,
      },
      {
        text: "c. It explores the applications of non-Euclidean geometry in modern technology.",
        correct: false,
      },
      {
        text: "d. It reveals the limitations of Euclidean geometry.",
        correct: false,
      },
    ],
  },

  {
    question:
      "73. What is the purpose of the inductive step in a proof by mathematical induction?",
    answers: [
      { text: "a. To prove the statement for the base case", correct: false },
      {
        text: "b. To assume the statement is true for a particular value of n",
        correct: false,
      },
      {
        text: "c. To prove the statement is true for all values of n",
        correct: true,
      },
      { text: "d. To determine the value of n", correct: false },
    ],
  },
  {
    question:
      "74. What is the greatest common divisor (GCD) of 54 and 72 using the Euclidean Algorithm?",
    answers: [
      { text: "a. 6", correct: false },
      { text: "b. 9", correct: false },
      { text: "c. 18", correct: true },
      { text: "d. 36", correct: false },
    ],
  },
  {
    question:
      "75. Which of the following statements accurately defines a prime number?",
    answers: [
      {
        text: "a. A number that is divisible by 1 and itself only.",
        correct: true,
      },
      {
        text: "b. A number that is divisible by 1 and any other number.",
        correct: false,
      },
      {
        text: "c. A number that is divisible by 2 and itself only.",
        correct: false,
      },
      {
        text: "d. A number that is divisible by 2 and any other number.",
        correct: false,
      },
    ],
  },
  {
    question: "76. What does the Fundamental Theorem of Arithmetic state?",
    answers: [
      {
        text: "a. Every integer greater than 1 can be expressed as a product of prime numbers.",
        correct: true,
      },
      {
        text: "b. Prime numbers have exactly two divisors: 1 and itself.",
        correct: false,
      },
      {
        text: "c. Any number is congruent to 0 modulo 1.",
        correct: false,
      },
      {
        text: "d. Even numbers can always be formed by adding two prime numbers together.",
        correct: false,
      },
    ],
  },

  {
    question:
      "77. The order of an integer a modulo m is defined as the smallest positive integer k such that:",
    answers: [
      { text: "a. a^k ≡ 1 (mod m)", correct: true },
      { text: "b. a^k ≡ 0 (mod m)", correct: false },
      { text: "c. a^k ≡ -1 (mod m)", correct: false },
      { text: "d. a^k ≡ a (mod m)", correct: false },
    ],
  },
  {
    question:
      "78. What does it indicate when the coefficient matrix of a system of linear equations reduces to an identity matrix?",
    answers: [
      { text: "a. It has infinitely many solutions.", correct: false },
      { text: "b. It has no solutions.", correct: false },
      { text: "c. It has a unique solution.", correct: true },
      { text: "d. It is inconsistent.", correct: false },
    ],
  },
  {
    question:
      "79. The determinant of a 2x2 matrix A is 10. What is the determinant of the transpose of matrix A?",
    answers: [
      { text: "a. 10", correct: true },
      { text: "b. -10", correct: false },
      { text: "c. 5", correct: false },
      { text: "d. -5", correct: false },
    ],
  },

  {
    question:
      "80. Which ancient mathematician is known for his contributions to the understanding of the relationship between the sides and angles of a right triangle?",
    answers: [
      { text: "a. Euclid of Alexandria", correct: false },
      { text: "b. Pythagoras of Samos", correct: true },
      { text: "c. Thales of Miletus", correct: false },
      { text: "d. Archimedes of Syracuse", correct: false },
    ],
  },
  {
    question:
      "81. Which mathematician from the 17th century is recognized for formulating the laws of motion and universal gravitation, revolutionizing the field of physics?",
    answers: [
      { text: "a. Descartes", correct: false },
      { text: "b. Fermat", correct: false },
      { text: "c. Pascal", correct: false },
      { text: "d. Newton", correct: true },
    ],
  },
  {
    question:
      "82. Which mathematician duo made significant contributions to mathematical logic and the foundation of mathematics with their seminal work on Principia Mathematica?",
    answers: [
      { text: "a. Turing and Weil", correct: false },
      { text: "b. Hilbert and Godel", correct: false },
      { text: "c. Russel and Whitehead", correct: true },
      { text: "d. Hardy and Ramanujan", correct: false },
    ],
  },

  {
    question:
      "83. Which of the following polynomials is a quadratic polynomial?",
    answers: [
      { text: "a. 5x³ + 2x² - x + 3", correct: false },
      { text: "b. 2x - 1", correct: false },
      { text: "c. x² + 3x + 2", correct: true },
      { text: "d. 4x⁴ + 3x² + 2x + 1", correct: false },
    ],
  },
  {
    question:
      "84. By analyzing the expression 9a°+16b2, Which of the following is obtained by factoring this expression?",
    answers: [
      { text: "a. (3a+4b)(3a-4b)", correct: true },
      { text: "b. (3a+4b)²", correct: false },
      { text: "c. (3a-4b)²", correct: false },
      { text: "d. 9a²+16b²", correct: false },
    ],
  },

  {
    question:
      "85. By analyzing the expression (y4, what simplification can be made?",
    answers: [
      { text: "a. y⁶", correct: false },
      { text: "b. y^7//2", correct: false },
      { text: "c. y^3//2", correct: true },
      { text: "d. y^1/2", correct: false },
    ],
  },

  {
    question:
      "86. By analyzing the exponential function f(x) = 2^x, what is the value of f(0)?",
    answers: [
      { text: "a. 0", correct: false },
      { text: "b. 1", correct: true },
      { text: "c. 2", correct: false },
      { text: "d. undefined", correct: false },
    ],
  },

  {
    question:
      "87. Consider the sets A = {2,4,6} and B = {3,4,5}. What is the intersection of sets A and B?",
    answers: [
      { text: "a. {2, 4, 6, 3, 5}", correct: false },
      { text: "b. {5}", correct: false },
      { text: "c. {2, 6}", correct: true },
      { text: "d. {}", correct: false },
    ],
  },
  {
    question:
      "88. Suppose sets C = {1, 2, 3, 4} and D = {3, 4, 5, 6}. Evaluate the cardinality of the union of sets C and D.",
    answers: [
      { text: "a. 4", correct: false },
      { text: "b. 5", correct: false },
      { text: "c. 6", correct: true },
      { text: "d. 7", correct: false },
    ],
  },

  {
    question:
      "89. Given the statement 'If a shape is a square, then it has four equal sides,' evaluate the truth value of this statement.",
    answers: [
      { text: "a. True", correct: true },
      { text: "b. False", correct: false },
      { text: "c. Indeterminate", correct: false },
      { text: "d. Contradictory", correct: false },
    ],
  },
  {
    question:
      "90. Which rule of inference is used to conclude 'p → q' from '¬q → ¬p'?",
    answers: [
      { text: "a. Modus Ponens", correct: false },
      { text: "b. Modus Tollens", correct: false },
      { text: "c. Hypothetical Syllogism", correct: false },
      { text: "d. Contraposition", correct: true },
    ],
  },

  {
    question:
      "91. When two lines intersect, the angles that are opposite each other are called:",
    answers: [
      { text: "a. Adjacent angles.", correct: false },
      { text: "b. Vertical angles.", correct: true },
      { text: "c. Corresponding angles.", correct: false },
      { text: "d. Alternate interior angles.", correct: false },
    ],
  },
  {
    question: "92. What are the properties of a trapezoid?",
    answers: [
      { text: "a. All sides are congruent.", correct: false },
      { text: "b. Two pairs of opposite sides are congruent.", correct: false },
      { text: "c. One pair of opposite sides is parallel.", correct: true },
      { text: "d. The sum of interior angles is 360 degrees.", correct: false },
    ],
  },

  {
    question:
      "93. Find the are of a regular hexagon given that each side measures 6 cm?",
    answers: [
      { text: "a. 52 cm°", correct: false },
      { text: "b. 53√2 cm²", correct: false },
      { text: "c. 54√3 cm²", correct: true },
      { text: "d. 55 cm²", correct: false },
    ],
  },
  {
    question:
      "94. A pyramid has a base area of 25 cm² and a height of 8 cm. What is the volume of the pyramid?",
    answers: [
      { text: "a. 68 cm³", correct: false },
      { text: "b. 67 cm³", correct: false },
      { text: "c. 66.67 cm³", correct: true },
      { text: "d. 70.98 cm³", correct: false },
    ],
  },

  {
    question: "95.	What is the sum identity for cosine?",
    answers: [
      { text: "a.	cos(A + B) = cos(A) + cos(B)", correct: false },
      { text: "b.	cos(A + B) = cos(A)cos(B) - sin(A)sin(B)", correct: true },
      { text: "c.	cos(A + B) = cos(A)cos(B) + sin(A)sin(B)", correct: false },
      { text: "d.	cos(A + B) = cos(A) - cos(B)", correct: false },
    ],
  },
  {
    question: "96.	What is the double-angle identity for sine?",
    answers: [
      { text: "a.	sin(2θ) = 2sin(θ)", correct: false },
      { text: "b.	sin(2θ) = sin^2(θ) - cos^2(θ)", correct: false },
      { text: "c.	sin(2θ) = 2sin(θ)cos(θ)", correct: true },
      { text: "d.	sin(2θ) = sin(θ) - cos(θ)", correct: false },
    ],
  },

  {
    question:
      "97.	Which of the following trigonometric functions is equivalent to the sine function?",
    answers: [
      { text: "a.	Tangent", correct: false },
      { text: "b.	Secant", correct: false },
      { text: "c.	Cosecant", correct: true },
      { text: "d.	Cotangent", correct: false },
    ],
  },

  {
    question:
      "98.	In the context of compound interest, what does `continuous compounding` refer to?",
    answers: [
      {
        text: "a.	The compounding of interest on a daily basis",
        correct: false,
      },
      {
        text: "b.	The compounding of interest at irregular intervals",
        correct: false,
      },
      {
        text: "c.	The compounding of interest continuously without intervals",
        correct: true,
      },
      {
        text: "d.	The compounding of interest at the end of the investment period",
        correct: false,
      },
    ],
  },
  {
    question:
      "99.	You want to save up for a vacation and decide to make monthly deposits into a savings account. If you need to accumulate ₱50,000 in 2 years with an annual interest rate of 4%, what should be your monthly payment?",
    answers: [
      { text: "a.	₱1,904.90", correct: false },
      { text: "b.	₱2,000.00", correct: false },
      { text: "c.	₱2,083.33", correct: true },
      { text: "d.	₱2,207.28", correct: false },
    ],
  },
  {
    question:
      "100.	Sarah wants to receive ₱20,000 as an annual annuity for the next 5 years. If the interest rate is 6%, how much should she invest today to receive this annuity?",
    answers: [
      { text: "a.	₱84,247.40", correct: true },
      { text: "b.	₱90,234.29", correct: false },
      { text: "c.	₱105,470.04", correct: false },
      { text: "d.	₱120,000.02", correct: false },
    ],
  },
];

export default questions;
