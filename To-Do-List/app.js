let input = document.querySelector("#query");
let addbtn = document.querySelector("#addBtn");
let items = document.querySelector(".items");

getData();

function saveData() {
  localStorage.setItem("data", items.innerHTML);
}

function getData() {
  items.innerHTML = localStorage.getItem("data");
}

addbtn.addEventListener("click", () => {
  if (input.value === "") {
    alert("Enter your task to add");
  } else {
    createNewItem();
  }
  input.value = "";
  saveData();
});

function createNewItem() {
  let newEle = document.createElement("li");
  newEle.innerText = input.value;
  items.appendChild(newEle);
  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  newEle.appendChild(span);
}

items.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
