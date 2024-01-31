let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
let getNew = document.querySelector("#getNew");
let share = document.querySelector("#share");

getQuotes();
getNew.addEventListener("click", () => {
  getQuotes();
});

async function getQuotes() {
  let data;
  try {
    const response = await fetch(`https://api.api-ninjas.com/v1/quotes?`, {
      method: "GET",
      headers: {
        "X-Api-Key": "CVjYBXBmG1PrqSa6ernmIA==1zmsmsEMQ6Q2pmhQ",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    data = await response.json();
  } catch (error) {
    console.error("Error:", error.message);
  }

  console.log(data);
  quote.innerText = '"'+data[0].quote+'"';
  author.innerText = '"'+data[0].author+'"';
}

share.addEventListener("click", () => {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerText +
      "----" +
      author.innerText,
    "Tweet Window",
    "width=600,height=300"
  );
});
