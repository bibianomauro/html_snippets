const quizData = [
  {
    question: "Which language runs the web?",
    a: "Java",
    b: "PHP",
    c: "JavasScript",
    d: "Python",
    correct: "c",
  },
  {
    question: "What is called the worst nightmare of all webdevs?",
    a: "Central Style Sheets",
    b: "Cascading Simple Sheets",
    c: "Cascading Style Sheets",
    d: "Cars SUVs Sailboats",
    correct: "c",
  },
  {
    question: "What does the most powerful programming language stands for?",
    a: "Hypertext Markdown Language",
    b: "Hyperloop Machine Language",
    c: "Hypertext Markup Language",
    d: "Helicopters Terminal Motorboats Lambos",
    correct: "c",
  },
  {
    question: "What year was the GOAT programming language launched?",
    a: "1972",
    b: "1991",
    c: "1995",
    d: "2015",
    correct: "c",
  }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const aText = document.getElementById("a_text");
const bText = document.getElementById("b_text");
const cText = document.getElementById("c_text");
const dText = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

function loadQuiz()
{
  answerEls.forEach(answer => answer.checked = false);

  if(currentQuiz >= quizData.length) return showScore();

  const currentQuizData = quizData[currentQuiz];

  questionEl.textContent = currentQuizData.question;
  aText.textContent = currentQuizData.a;
  bText.textContent = currentQuizData.b;
  cText.textContent = currentQuizData.c;
  dText.textContent = currentQuizData.d;
}

submitBtn.addEventListener("click", checkAnswer);

function checkAnswer()
{
  answerEls.forEach(answer => {
    if(!answer.checked) return;
    if(answer.id === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if(currentQuiz >= quizData.length) {
      submitBtn.removeEventListener("click", checkAnswer);
    }
    loadQuiz();
  });
}

function showScore()
{
  quiz.innerHTML = `
    <div class="quiz-header">
      <h2>Your score was:</h2>
      <h2>${score}/${quizData.length} - ${score/quizData.length * 100}%</h2>
    </div>
    <button onclick="location.reload()">Restart</button>
  `;
}

loadQuiz();
