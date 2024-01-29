const allCharacters =
  "!@#$%^&*()_-+=<>?/{}[]0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let passValue = document.querySelector("#password");
let copyBtn = document.querySelector(".copyBtn");
let passGenBtn = document.querySelector(".passGenBtn");

passGenBtn.addEventListener("click", () => {
  let newPass = generateRandomPassword();
  passValue.value = newPass;
});

copyBtn.addEventListener("click", () => {
  passValue.select();
  document.execCommand("copy");
});

function generateRandomPassword(length = 12) {
  length = Math.max(length, 8);

  const password = Array.from(
    { length },
    () => allCharacters[Math.floor(Math.random() * allCharacters.length)]
  ).join("");

  return password;
}
