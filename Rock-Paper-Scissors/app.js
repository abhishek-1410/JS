let user = 0;
let comp = 0;

const choices = document.querySelectorAll(".choice");
let user_score = document.querySelector("#user-score");
let comp_score = document.querySelector("#comp-score");
let print_msg = document.querySelector("#msg")

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  let random = Math.floor(Math.random() * options.length);
  return options[random];
};
const playGame = (userChoice) => {
  let compChoice = genCompChoice();
  let msg = "Match is draw";
  console.log(userChoice, " ", compChoice);

  if (userChoice == "rock" && compChoice == "paper") {
    comp++;
    msg = "Computer Won";
  } else if (userChoice == "rock" && compChoice == "scissors") {
    user++;
    msg = "You Won";
  } else if (userChoice == "paper" && compChoice == "rock") {
    user++;
    msg = "You Won";
  } else if (userChoice == "paper" && compChoice == "scissors") {
    comp++;
    msg = "Computer Won";
  } else if (userChoice == "scissors" && compChoice == "paper") {
    user++;
    msg = "You Won";
  } else if (userChoice == "scissors" && compChoice == "rock") {
    comp++;
    msg = "Computer Won";
  }

  user_score.innerText = user;
  comp_score.innerText = comp;
  print_msg.innerText = msg;
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const choiceId = choice.getAttribute("id");
    playGame(choiceId);
  });
});
