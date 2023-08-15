let quizQuestions = [
  {
    id: 0,
    question: "Q.1 | What does HTML stand for?",
    option1: "Hyperlinks and Text Markup Language",
    option2: "Hyper Text Markup Language",
    option3: "Home Tool Markup Language",
    correctAns: "ans2",
  },

  {
    id: 1,
    question: "Q.2 | What does CSS stand for?",
    option1: "Computer Style Sheets",
    option2: "Creative Style Sheets",
    option3: "Cascading Style Sheets",
    correctAns: "ans3",
  },

  {
    id: 2,
    question: "Q.3 | Which HTML attribute is used to define inline styles?",
    option1: "styles",
    option2: "style",
    option3: "class",
    correctAns: "ans2",
  },

  {
    id: 3,
    question: "Q.4 | Which property is used to change the background color?",
    option1: "bgcolor",
    option2: "color",
    option3: "background-color",
    correctAns: "ans3",
  },

  {
    id: 4,
    question:
      "Q.5 | Which CSS property is used to change the text color of an element?",
    option1: "color",
    option2: "text-color",
    option3: "fgcolor",
    correctAns: "ans1",
  },
];
//Initially score and question count are set to 0
let score = 0;
let questionCount = 0;

const question = document.querySelector(".ques");
const questionBox = document.querySelector(".QuestionBox");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const nextBtn = document.querySelector(".btn");
const scoreSection = document.querySelector(".scoreSection");
const scoreTxt = document.querySelector(".scoreTxt");
const answers = document.querySelectorAll(".option");
const playAgainBtn = document.querySelector(".btn2");

//Display the questions
function displayQues() {
  const quiz = quizQuestions[questionCount];
  question.innerHTML = quiz.question;
  option1.innerHTML = quiz.option1;
  option2.innerHTML = quiz.option2;
  option3.innerHTML = quiz.option3;
}

displayQues();

//Check the correct answer
const checkAnswer = () => {
  let correctAns;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      correctAns = curAnsElem.id;
    }
  });
  return correctAns;
};


function deselect() {
  answers.forEach((curAnsElem) => {
    curAnsElem.checked = false;
  });
}
//check the answer and display the next question or the final result
nextBtn.addEventListener("click", () => {
  const checkedAnswer = checkAnswer();
  if (checkedAnswer === quizQuestions[questionCount].correctAns) {
    score++;
  }
  questionCount++;
  deselect();
  if (questionCount < quizQuestions.length) {
    displayQues();
  } else {
    scoreSection.style.visibility = "visible";
    questionBox.style.visibility = "hidden";
    scoreTxt.innerText =
      "Your Score is " + score + "/" + quizQuestions.length + " ✌️.";
  }
});
//Reset the quiz
playAgainBtn.addEventListener("click", () => {
  location.reload();
});
