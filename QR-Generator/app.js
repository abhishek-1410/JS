let btn = document.querySelector("#btn");
let input = document.querySelector("#input");
let qr = document.querySelector(".qr img");

btn.addEventListener("click", () => {
  getQR();
});

function getQR() {
  qr.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    input.value;
}
