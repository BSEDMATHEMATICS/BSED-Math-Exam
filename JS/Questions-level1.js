const questions = [
  {
    question:
      "1. The Babylonian number system is known for its use of which base?",
    answers: [
      { text: "a. Base 8", correct: false },
      { text: "b. Base 10", correct: false },
      { text: "c. Base 60", correct: true },
      { text: "d. Base 16", correct: false },
    ],
  },
  {
    question:
      "2. Who is credited with the discovery of the Pythagorean Theorem?",
    answers: [
      { text: "a. Pythagoras of Samos", correct: true },
      { text: "b.	Euclid of Alexandria", correct: false },
      { text: "c.	Archimedes of Syracuse", correct: false },
      { text: "d.	Diophantus of Alexandria", correct: false },
    ],
  },
  {
    question: "3. The Vigesimal number system is based on which base?",
    answers: [
      { text: "a.	Base 10", correct: false },
      { text: "b.	Base 20", correct: true },
      { text: "c.	Base 8", correct: false },
      { text: "d.	Base 16", correct: false },
    ],
  },
  {
    question:
      "4. Who is known for developing the concept of zero and the decimal place-value system in Indian mathematics?",
    answers: [
      { text: "a. Brahmagupta", correct: true },
      { text: "b. Madhava", correct: false },
      { text: "c. Aryabhata", correct: false },
      { text: "d. Bhaskara II", correct: false },
    ],
  },
  {
    question:
      "5. The number system introduced by Fibonacci, known as the Hindu-Arabic numeral system, is based on which base?",
    answers: [
      { text: "a. Base 2", correct: false },
      { text: "b. Base 8", correct: false },
      { text: "c. Base 10", correct: true },
      { text: "d. Base 16", correct: false },
    ],
  },
  {
    question:
      "6. Which of the following is an example of a nominal scale of measurement?",
    answers: [
      {
        text: "a. Rating customer satisfaction on a scale of 1-10",
        correct: false,
      },
      {
        text: "b. Categorizing students into grade levels (e.g., 1st grade, 2nd grade, etc.)",
        correct: true,
      },
      {
        text: "c. Measuring the temperature in degrees Celsius",
        correct: false,
      },
      {
        text: "d. Determining the length of a table in centimeters",
        correct: false,
      },
    ],
  },
  {
    question:
      "7. A researcher wants to study the opinions of university students about a new campus policy. Which sampling method would be most suitable?",
    answers: [
      { text: "a. Cluster sampling", correct: false },
      { text: "b. Stratified sampling", correct: true },
      { text: "c. Convenience sampling", correct: false },
      { text: "d. Snowball sampling", correct: false },
    ],
  },
  {
    question:
      "8. What is the term used to describe a function formed by combining two or more functions?",
    answers: [
      { text: "a. Functions", correct: false },
      { text: "b. Domain and range", correct: false },
      { text: "c. Composite functions", correct: true },
      { text: "d. Algebraic function", correct: false },
    ],
  },
  {
    question:
      "9. When solving a system of linear equations using matrix operations, which mathematical concept is being applied?",
    answers: [
      { text: "a. Complex numbers", correct: false },
      { text: "b. Imaginary numbers", correct: false },
      { text: "c. Rational numbers", correct: false },
      { text: "d. Real numbers", correct: true },
    ],
  },
  {
    question: "10. The derivative of a function represents:",
    answers: [
      {
        text: "a. The rate of change of the function at a specific point.",
        correct: true,
      },
      {
        text: "b. The average value of the function over an interval.",
        correct: false,
      },
      { text: "c. The integral of the function.", correct: false },
      { text: "d. The maximum value of the function.", correct: false },
    ],
  },
  {
    question: "11. What is the definition of an antiderivative?",
    answers: [
      { text: "a. The derivative of a function", correct: false },
      { text: "b. The slope of a tangent line", correct: false },
      { text: "c. The reverse process of differentiation", correct: true },
      { text: "d. The area under a curve", correct: false },
    ],
  },
  {
    question:
      "12. What is the result of factoring the expression 9x² + 12x + 4 completely?",
    answers: [
      { text: "a. (3x - 2)²", correct: false },
      { text: "b. (3x + 2)(3x + 2)", correct: false },
      { text: "c. (3x + 2)²", correct: true },
      { text: "d. (3x + 2)(3x - 2)", correct: false },
    ],
  },
  {
    question:
      "13. Which of the following expressions represents a rational exponent?",
    answers: [
      { text: "a. √x", correct: false },
      { text: "b. x²", correct: false },
      { text: "c. x^(2/3)", correct: true },
      { text: "d. x^(3/2)", correct: false },
    ],
  },
  {
    question:
      "14. Who were the prominent figures associated with early origins of Geometry?",
    answers: [
      { text: "a. Euclid and Pythagoras", correct: false },
      { text: "b. Thales and Pythagoras", correct: true },
      { text: "c. Thales and Euclid", correct: false },
      { text: "d. Euclid and Archimedes", correct: false },
    ],
  },
  {
    question:
      "15. Which of the following equations represents a linear equation?",
    answers: [
      { text: "a. x²+3x-2=0", correct: false },
      { text: "b. 2x+3=7", correct: true },
      { text: "c. 3x²-5x+2=0", correct: false },
      { text: "d. 4x²-6x+2=0", correct: false },
    ],
  },
  {
    question:
      "16. Which of the following statements is true about the Cartesian coordinate system?",
    answers: [
      {
        text: "a. It uses vectors to represent points and directions.",
        correct: false,
      },
      {
        text: "b. It uses polar coordinates to represent points in a plane.",
        correct: false,
      },
      {
        text: "c. It uses an x-axis and a y-axis to represent points in a plane.",
        correct: true,
      },
      {
        text: "d. It uses a single line to represent points in a plane",
        correct: false,
      },
    ],
  },
  {
    question:
      "17. Which of the following statements accurately describes a subset relationship between sets A and B?",
    answers: [
      { text: "a. Set A contains all the elements of set B.", correct: true },
      { text: "b. Set B contains all the elements of set A.", correct: false },
      { text: "c. Set A and set B have no common elements.", correct: false },
      {
        text: "d. Set A and set B have exactly the same elements.",
        correct: false,
      },
    ],
  },
  {
    question:
      "18. What is the definition of a reflection in transformational geometry?",
    answers: [
      {
        text: "a. A transformation that slides a figure along a straight line.",
        correct: false,
      },
      {
        text: "b. A transformation that flips a figure across a line.",
        correct: true,
      },
      {
        text: "c. A transformation that rotates a figure around a point.",
        correct: false,
      },
      {
        text: "d. A transformation that stretches or shrinks a figure.",
        correct: false,
      },
    ],
  },
  {
    question:
      "19. What is the primary focus of studying the Backgrounds and History of Non-Euclidean Geometry?",
    answers: [
      {
        text: "a. Exploring the development of Euclidean geometry",
        correct: false,
      },
      {
        text: "b. Analyzing the properties of hyperbolic shapes",
        correct: false,
      },
      {
        text: "c. Investigating the origins and historical context of non-Euclidean geometries",
        correct: true,
      },
      {
        text: "d. Applying geometric transformations in non-Euclidean spaces",
        correct: false,
      },
    ],
  },
  {
    question:
      "20. Which of the following statements correctly defines ordinal numbers?",
    answers: [
      { text: "a. Numbers used to count objects.", correct: false },
      {
        text: "b. Numbers are used to indicate position or order.",
        correct: true,
      },
      { text: "c. Numbers are used to represent quantities.", correct: false },
      {
        text: "d. Numbers are used to perform arithmetic operations.",
        correct: false,
      },
    ],
  },
  {
    question:
      "21. Which of the following best describes a proposition in logic?",
    answers: [
      { text: "a. 'If it is raining, then the ground is wet.'", correct: true },
      { text: "b. 'I like ice cream.'", correct: false },
      { text: "c. 'x + 2 = 7'", correct: false },
      { text: "d. '2 + 2 = 5'", correct: false },
    ],
  },
  {
    question:
      "22. What is the symbol used to represent summation in mathematics?",
    answers: [
      { text: "a. Σ (Sigma)", correct: true },
      { text: "b. Π (Pi)", correct: false },
      { text: "c. Δ (Delta)", correct: false },
      { text: "d. Ω (Omega)", correct: false },
    ],
  },
  {
    question:
      "23. Which of the following theorems states that if a ≡ b (mod n) and c ≡ d (mod n), then a + c ≡ b + d (mod n)?",
    answers: [
      { text: "a. Transitive Property of Congruence", correct: false },
      { text: "b. Reflexive Property of Congruence", correct: false },
      { text: "c. Addition Property of Congruence", correct: true },
      { text: "d. Multiplication Property of Congruence", correct: false },
    ],
  },
  {
    question: "24. What are basic postulates in geometry?",
    answers: [
      {
        text: "a. Fundamental statements that are accepted without proof.",
        correct: true,
      },
      {
        text: "b. Geometric figures with specific properties.",
        correct: false,
      },
      { text: "c. Theorems derived from axioms.", correct: false },
      { text: "d. Points, lines, and planes in space.", correct: false },
    ],
  },
  {
    question: "25. Which of the following best describes a vector space?",
    answers: [
      { text: "a. A set of vectors with different dimensions", correct: false },
      { text: "b. A set of vectors with the same magnitude", correct: false },
      {
        text: "c. A set of vectors closed under addition and scalar multiplication",
        correct: true,
      },
      { text: "d. A set of vectors with the same direction", correct: false },
    ],
  },
  {
    question: "26. What is a linear transformation?",
    answers: [
      {
        text: "a. A transformation that only affects the magnitude of vectors",
        correct: false,
      },
      {
        text: "b. A transformation that only affects the direction of vectors",
        correct: false,
      },
      {
        text: "c. A transformation that preserves vector addition and scalar multiplication",
        correct: true,
      },
      {
        text: "d. A transformation that changes the dimensions of vectors",
        correct: false,
      },
    ],
  },
  {
    question:
      "27. A building casts a shadow that is 12 meters long. At the same time, a tree nearby casts a shadow that is 5 meters long. If the height of the building is 15 meters, what is the height of the tree?",
    answers: [
      { text: "a. 6.25 meters", correct: true },
      { text: "b. 7.2 meters", correct: false },
      { text: "c. 8 meters", correct: false },
      { text: "d. 10 meters", correct: false },
    ],
  },
  {
    question:
      "28. A ladder is leaning against a wall. The foot of the ladder is 4 meters away from the base of the wall, and the ladder reaches a point 6 meters above the ground. What is the length of the ladder?",
    answers: [
      { text: "a. 6.5 meters", correct: false },
      { text: "b. 7.21 meters", correct: true },
      { text: "c. 8 meters", correct: false },
      { text: "d. 9.8 meters", correct: false },
    ],
  },
  {
    question:
      "29. An angle formed by a chord and a tangent that intersect at a point on the circle is known as:",
    answers: [
      { text: "a. Inscribed angle", correct: false },
      { text: "b. Central angle", correct: false },
      { text: "c. Intercepted angle", correct: false },
      { text: "d. Tangent angle", correct: true },
    ],
  },
  {
    question:
      "30. A circle has a radius of 4 cm. What is the length of a chord that is 3 cm away from the center of the circle?",
    answers: [
      { text: "a. 2√7 cm", correct: true },
      { text: "b. 2√8 cm", correct: false },
      { text: "c. 2√9 cm", correct: false },
      { text: "d. 2√10 cm", correct: false },
    ],
  },
  {
    question: "31. What is NCTM?",
    answers: [
      { text: "a. National Center for Teaching Mathematics", correct: false },
      {
        text: "b. National Council of Teachers of Mathematics",
        correct: true,
      },
      {
        text: "c. National Curriculum for Teaching Mathematics",
        correct: false,
      },
      {
        text: "d. National Committee of Mathematics Teachers",
        correct: false,
      },
    ],
  },
  {
    question:
      "32. Which of the following is NOT considered one of the philosophical foundations of mathematics?",
    answers: [
      { text: "a. Logic and reasoning", correct: false },
      { text: "b. Empiricism", correct: true },
      { text: "c. Platonism", correct: false },
      { text: "d. Constructivism", correct: false },
    ],
  },
  {
    question:
      "33.	Which of the following trigonometric functions represents the ratio of the length of the side opposite an angle to the length of the hypotenuse in a right triangle?",
    answers: [
      { text: "a.	Sine", correct: true },
      { text: "b.	Cosine", correct: false },
      { text: "c.	Tangent", correct: false },
      { text: "d.	Secant", correct: false },
    ],
  },
  {
    question:
      "34.	Given an acute angle θ in a right triangle, if the length of the adjacent side is 8 and the length of the hypotenuse is 10, what is the value of the sine of θ?",
    answers: [
      { text: "a.	0.6", correct: true },
      { text: "b.	0.5", correct: false },
      { text: "c.	0.4", correct: false },
      { text: "d.	0.8", correct: false },
    ],
  },
  {
    question:
      "35. Which instructional strategy focuses on students working together in small groups to solve mathematical problems?",
    answers: [
      { text: "a. Cooperative learning", correct: true },
      { text: "b. Direct instruction", correct: false },
      { text: "c. Inquiry-based learning", correct: false },
      { text: "d. Scaffolding", correct: false },
    ],
  },
  {
    question: "36. How would you define a relation in mathematics?",
    answers: [
      { text: "a. It is a specific type of function.", correct: false },
      { text: "b. It is a collection of ordered pairs.", correct: true },
      { text: "c. It is a set of integers.", correct: false },
      { text: "d. It is a subset of the universal set.", correct: false },
    ],
  },
  {
    question: "37. What is the significance of modular arithmetic?",
    answers: [
      {
        text: "a. It is used to solve complex algebraic equations.",
        correct: false,
      },
      {
        text: "b. It provides a way to analyze the properties of prime numbers.",
        correct: false,
      },
      {
        text: "c. It helps in understanding the behavior of exponential functions.",
        correct: false,
      },
      {
        text: "d. It allows for calculations involving remainders.",
        correct: true,
      },
    ],
  },
  {
    question: "38. What does Cayley's Theorem state in Group Theory?",
    answers: [
      {
        text: "a. Every group is isomorphic to a group of permutations.",
        correct: true,
      },
      { text: "b. Every group contains a cyclic subgroup.", correct: false },
      {
        text: "c. Every group has a unique identity element.",
        correct: false,
      },
      {
        text: "d. Every group has a non-trivial normal subgroup.",
        correct: false,
      },
    ],
  },
  {
    question: "39. What is the purpose of a Math Curriculum Framework?",
    answers: [
      {
        text: "a. To outline the specific content and skills to be taught in mathematics",
        correct: true,
      },
      {
        text: "b. To provide guidelines for effective mathematics instruction",
        correct: false,
      },
      {
        text: "c. To evaluate the effectiveness of mathematics teaching methods",
        correct: false,
      },
      {
        text: "d. To determine the appropriate use of manipulatives in the classroom",
        correct: false,
      },
    ],
  },
  {
    question: "40.	What is the solution to the equation sin^((-1)(x)) = π/6?",
    answers: [
      { text: "a.	x = π/6", correct: false },
      { text: "b.	x = π/4", correct: false },
      { text: "c.	x = π/3", correct: true },
      { text: "d.	x = π/2", correct: false },
    ],
  },
  {
    question:
      "41. What is the purpose of preparing a lesson plan in mathematics?",
    answers: [
      {
        text: "a. To create a detailed schedule of classroom activities",
        correct: false,
      },
      {
        text: "b. To ensure that all required topics are covered in the curriculum",
        correct: false,
      },
      {
        text: "c. To provide guidance and structure for effective teaching and learning",
        correct: true,
      },
      {
        text: "d. To evaluate the performance of students in mathematics",
        correct: false,
      },
    ],
  },
  {
    question:
      "42.	When should you use the Pythagorean Theorem to solve for a side length in a right triangle?",
    answers: [
      {
        text: "a.	When you know the lengths of all three sides",
        correct: false,
      },
      {
        text: "b.	When you know the measures of all three angles",
        correct: false,
      },
      {
        text: "c.	When you know the lengths of two sides",
        correct: true,
      },
      {
        text: "d.	When you know the measures of two angles",
        correct: false,
      },
    ],
  },
  {
    question:
      "43. What part does the teacher play in helping students learn mathematics by using proper methods and techniques?",
    answers: [
      {
        text: "a. To strictly adhere to a predefined set of rules and guidelines for teaching mathematics",
        correct: false,
      },
      {
        text: "b. To prioritize methods that are most convenient for the teacher",
        correct: false,
      },
      {
        text: "c. To consider the students' prior knowledge and abilities",
        correct: true,
      },
      {
        text: "d. To exclusively focus only on traditional teaching methods",
        correct: false,
      },
    ],
  },
  {
    question: "44.	What is the basic concept of simple interest?",
    answers: [
      { text: "a.	Interest earned on a loan or investment", correct: true },
      {
        text: "b.	Interest calculated based on compound growth",
        correct: false,
      },
      {
        text: "c.	Interest that varies based on market conditions",
        correct: false,
      },
      {
        text: "d.	Interest that includes both principal and interest amounts",
        correct: false,
      },
    ],
  },
  {
    question:
      "45.	What is the purpose of computing the `maturity value` in simple discount notes?",
    answers: [
      { text: "a.	To determine the original principal amount", correct: false },
      {
        text: "b.	To calculate the interest earned on the note",
        correct: false,
      },
      {
        text: "c.	To find the total value of the note at maturity",
        correct: true,
      },
      {
        text: "d.	To compare the discount rate with the interest rate",
        correct: false,
      },
    ],
  },
  {
    question:
      "46. Which of the following assessment methods focuses on evaluating mathematics learning through real-life applications and problem-solving tasks?",
    answers: [
      { text: "a. Traditional Assessment", correct: false },
      { text: "b. Authentic Assessment", correct: true },
      { text: "c. Formative Assessment", correct: false },
      { text: "d. Summative Assessment", correct: false },
    ],
  },
  {
    question:
      "47. How does the discussion on ethnomathematics relate to the issues in mathematics teaching?",
    answers: [
      {
        text: "a. It explores the connection between mathematics and culture.",
        correct: true,
      },
      {
        text: "b. It focuses on the use of technology in mathematics education.",
        correct: false,
      },
      {
        text: "c. It addresses the impact of socioeconomic status on mathematics learning.",
        correct: false,
      },
      {
        text: "d. It investigates the mathematical education of indigenous people.",
        correct: false,
      },
    ],
  },
  {
    question:
      "48. How does socioeconomic status relate to the issues in mathematics education?",
    answers: [
      {
        text: "a. It explores the mathematical education of indigenous people.",
        correct: false,
      },
      {
        text: "b. It addresses the internal and external issues in mathematical education.",
        correct: false,
      },
      {
        text: "c. It investigates the connection between mathematics and culture.",
        correct: false,
      },
      {
        text: "d. It examines the impact of economic factors on students' mathematics learning.",
        correct: true,
      },
    ],
  },
  {
    question: "49. What does it mean for a sequence to be monotonic?",
    answers: [
      {
        text: "a. It means that the sequence is increasing at a constant rate.",
        correct: true,
      },
      {
        text: "b. It means that the sequence is decreasing at a constant rate.",
        correct: false,
      },
      {
        text: "c. It means that the terms of the sequence are always positive.",
        correct: false,
      },
      {
        text: "d. It means that the terms of the sequence are always negative.",
        correct: false,
      },
    ],
  },
  {
    question:
      "50. What is the key difference between a Taylor series and a Maclaurin series?",
    answers: [
      {
        text: "a. A Taylor series is centered at a specific point, while a Maclaurin series is centered at zero.",
        correct: true,
      },
      {
        text: "b. A Taylor series is used to approximate functions near a specific point, while a Maclaurin series is used to approximate functions near zero.",
        correct: false,
      },
      {
        text: "c. A Taylor series involves only polynomial terms, while a Maclaurin series can have exponential terms as well.",
        correct: false,
      },
      {
        text: "d. There is no difference between a Taylor series and a Maclaurin series; they are interchangeable terms.",
        correct: false,
      },
    ],
  },
];

export default questions;
