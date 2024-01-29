let createBtn = document.querySelector("#createBtn");
let box = document.querySelector(".box");
let textArea = document.querySelectorAll(".textArea");

function showNotes(){
    box.innerHTML = localStorage.getItem("textArea");
}
showNotes();
function updateStorage(){
    localStorage.setItem("textArea",box.innerHTML);

}

createBtn.addEventListener("click", () => {
  let newEle = document.createElement("p");
  newEle.classList.add("textArea");
  newEle.contentEditable = true;
  let imgEle = document.createElement("img");
  imgEle.src = "images/delete.png";
  newEle.appendChild(imgEle);
  box.appendChild(newEle);
});

box.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
  else if(e.target.tagName === "P"){
    notes = document.querySelectorAll(".textArea");
    notes.forEach(nt => {
        nt.onkeyup = function(){
            updateStorage();
        }
    });
  }
});


document.addEventListener("keydown",event =>{
    if (event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})