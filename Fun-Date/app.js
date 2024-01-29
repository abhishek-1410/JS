var div = document.getElementById("no");
let divyes = document.getElementById("yes");
let gif = document.getElementById("gif");
let question = document.getElementById("ques");


divyes.addEventListener("click",() =>{
    divyes.innerText = "Let's fix a date";
    div.style.display = 'none';
    gif.src = "images/milk-mocha.gif";
    question.innerText = "Yeyyyy Finally !!"
})

console.log(divyes.innerText);

no.addEventListener("mousemove", function (event) {
  let cursorX = event.clientX;
  let cursorY = event.clientY;

  let divRect = div.getBoundingClientRect();
  let divX = divRect.left + divRect.width / 2;
  let divY = divRect.top + divRect.height / 2;

  let distance = Math.sqrt(
    Math.pow(cursorX - divX, 2) + Math.pow(cursorY - divY, 2)
  );

  if (distance < 50) {
    // Adjust the distance threshold as needed
    div.classList.add("motion");
    moveDiv();
  }
});

function getRandomPosition() {
  let screenWidth = window.innerWidth - div.offsetWidth;
  let screenHeight = window.innerHeight - div.offsetHeight;
  let randomX = Math.floor(Math.random() * screenWidth);
  let randomY = Math.floor(Math.random() * screenHeight);
  return { x: randomX, y: randomY };
}

function moveDiv() {
  let newPosition = getRandomPosition();
  div.style.left = newPosition.x + "px";
  div.style.top = newPosition.y + "px";
}
