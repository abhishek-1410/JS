let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".resetBtn");
let turn = true;

const winPat = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerText = "X";
      turn = false;
    } else {
      box.innerText = "O";
      turn = true;
    }
    box.disabled = true;
    box.classList.add("boxchange");
    checkWinner();
  });
});

const disableBtn = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const checkWinner = () => {
  for (let i of winPat) {
    let pos1 = boxes[i[0]].innerText;
    let pos2 = boxes[i[1]].innerText;
    let pos3 = boxes[i[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        congratulationsFunc(boxes[i[0]].innerText);
        disableBtn();
      }
    }
  }
};

const congratulationsFunc = (winner) => {
  document.querySelector(".container").classList.add("blur");
  document.getElementById(
    "congratulationsText"
  ).innerText = `Congratulations! ${winner}`;
  document.getElementById("congratulationsText").style.display = "block";
  setTimeout(function () {
    document.getElementById("congratulationsText").style.opacity = "1";
  }, 10);
};

resetbtn.addEventListener("click", () => {
  document.getElementById("congratulationsText").style.display = "none";
  document.querySelector(".container").classList.remove("blur");

  boxes.forEach((box) => {
    turn = true;
    box.disabled = false;
    box.innerText = "";
    box.classList.remove("boxchange");
  });
});
