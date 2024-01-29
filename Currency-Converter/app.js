const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

let selectOption = document.querySelectorAll(".dropdown select");
let msgText = document.querySelector(".msg");
let fromSelect = document.querySelector(".from select");
let toSelect = document.querySelector(".to select");
let exchangeBtn = document.querySelector("#exchangeBtn");

for (let dropdown of selectOption) {
  for (let currencyCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currencyCode;
    newOption.value = currencyCode;
    if (currencyCode === "USD" && dropdown.name === "from")
      newOption.selected = true;

    if (currencyCode === "INR" && dropdown.name === "to")
      newOption.selected = true;

    dropdown.appendChild(newOption);
  }

  dropdown.addEventListener("change", (e) => {
    updateFlag(e.target);
  });
}

async function currencyCoverter() {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  const URL = `${BASE_URL}/${fromSelect.value.toLowerCase()}/${toSelect.value.toLowerCase()}.json`;

  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[toSelect.value.toLowerCase()];
  let finalAmount = amtVal * rate;
  msgText.innerText = `${amtVal} ${fromSelect.value} = ${finalAmount} ${toSelect.value}`;
}

function updateFlag(element) {
  let currencyCode = element.value;
  let newFlagLink = `https://flagsapi.com/${countryList[currencyCode]}/flat/64.png`;
  let imageClass = element.parentElement.querySelector("img");
  imageClass.src = newFlagLink;
}

exchangeBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  currencyCoverter();
});

window.addEventListener("load", () => {
  currencyCoverter();
});
