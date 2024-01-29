let form = document.querySelector("#form");
let query = document.querySelector("#query");
let queryLocation = document.querySelector("#location");
let temperature = document.querySelector("#temperature");
let humidValue = document.querySelector("#humidValue");
let windSpeed = document.querySelector("#windSpeed");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  apiCalling(query.value);
});

async function apiCalling(queryValue) {
  let data;
  try {
    const response = await fetch(
      "https://api.tomorrow.io/v4/weather/realtime?location=" +
        queryValue +
        "&apikey=92k3pz5XkVaPFHz2M3uKeZk0BRHiFBq6"
    );

    if (response.ok) {
      data = await response.json();
    } else {
      console.error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error(`Download error: ${error.message}`);
  }

  console.log(data);

  let temp = data.data.values.temperature;
  let humid = data.data.values.humidity;
  let wind = data.data.values.windSpeed;
  let val = queryValue.charAt(0).toUpperCase() + queryValue.slice(1);

  updateValue(val, temp, humid, wind);
}

function updateValue(queryValue, temp, humid, wind) {
  queryLocation.innerText = queryValue;
  temperature.innerText = temp + "° C";
  humidValue.innerText = humid + "%";
  windSpeed.innerHTML = wind + "km/h";
}
