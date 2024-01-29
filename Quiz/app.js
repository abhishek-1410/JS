let options = document.querySelector(".option");
let questionElement = document.querySelector("#question");
let nextBtn = document.querySelector(".nextBtn");
let button;
let idx = 0;
let ans = 0;

let qa = [
  {
    question: "question1",
    option: [
      { ans: "ans1", correct: "true" },
      { ans: "ans2", correct: "false" },
      { ans: "ans3", correct: "false" },
      { ans: "ans4", correct: "false" },
    ],
  },
  {
    question: "question2",
    option: [
      { ans: "2ans1", correct: "true" },
      { ans: "2ans2", correct: "yes" },
      { ans: "2ans3", correct: "no" },
      { ans: "2ans4", correct: "qwer" },
    ],
  },
];

StartQuiz();

function StartQuiz() {
  nextBtn.innerText = "Next";
  idx = 0;
  ans = 0;
  ShowQuestion();
}

function ShowQuestion() {
  resetState();
  questionElement.innerText = `${idx + 1}. ` + qa[idx].question;

  for (let k = 0; k < 4; k++) {
    let newOption = document.createElement("button");
    newOption.classList.add("btn");
    newOption.innerText = qa[idx].option[k].ans;
    newOption.setAttribute("optionCheck", qa[idx].option[k].correct);
    options.appendChild(newOption);
    newOption.addEventListener("click", selectAnswer);
  }
}

function resetState() {
  nextBtn.style.display = "none";
  while (options.firstChild) {
    options.removeChild(options.firstChild);
  }
}

nextBtn.addEventListener("click", () => {
  if (idx < qa.length) {
    handleNextButton();
  } else {
    StartQuiz();
  }
});

function handleNextButton() {
  idx++;
  if (idx < qa.length) {
    ShowQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  resetState();
  questionElement.innerText = `your correct answers are ${ans}`;
  nextBtn.innerText = "Play Again";
  nextBtn.style.display = "block";
}

function selectAnswer(e) {
  console.log(e.target.getAttribute("optionCheck"));

  if (e.target.getAttribute("optionCheck") === "true") {
    e.target.classList.add("optionCorrect");
    ans++;
  } else {
    e.target.classList.add("optionWrong");
  }
  document.querySelectorAll(".btn").forEach((btn) => {
    if (btn.getAttribute("optionCheck") === "true") {
      btn.classList.add("optionCorrect");
    }
    btn.disabled = true;
    btn.classList.add("cursorChange");
  });
  nextBtn.style.display = "block";
}
