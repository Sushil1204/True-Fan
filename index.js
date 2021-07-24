const read = require("readline-sync");

const questionsList = [
  {
    question: "When was MS Dhoni born ? (DD/MM/YY)  ",
    answer: "7/7/81",
  },
  {
    question: "How many centuries have been scored by the MS Dhoni in ODIs? ",
    answer: "10",
  },
  {
    question: "When MS Dhoni made ODI Debut for the Indian team?",
    answer: "2004",
  },
  {
    question: "What is the nickname of MS Dhoni ? ",
    answer: "Mahi",
  },
  {
    question: "Which railway zone did Dhoni work for, as a TTE?",
    answer: "South Eastern Railways",
  },
];

let score = 0;

function game(question, answer) {
  let userAnswer = read.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    score++;
    console.log(`Correct answer `);
  } else {
    console.log(`Oops ! your ans is wrong`);
  }
  console.log(`Your current score is ${score}`);
}

console.log(" Call Yourself A Dhoni Fan?, Welcome to True-Fan");

let userName = read.question("What is your name ? ");

console.log(`Okay ${userName}, let's begin`);

console.log(
  `Take This Quiz To See How Well You Know 'Captain Cool'`
);

console.log("--------------------------------------");

for (let item of questionsList) {
  game(item.question, item.answer);
  console.log("--------------------------------------");
}

console.log(
  `Well Done !! ${userName} ! True-Fan is completed, your final score is :- ${score}/5`
);