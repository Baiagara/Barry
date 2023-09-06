const apiKey = "775d40454f6b3cc4a250c889466f7eb7";
const button = document.querySelector("button");

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  getWeather();
});

function getWeather() {
  const latitudeInput = document.getElementById("Latitude");
  const locationLatitude = latitudeInput.value;
  const longitudesInput = document.getElementById("Longitudes");
  const locationLongitudes = longitudesInput.value;
  console.log(locationLatitude);
  console.log(locationLongitudes);

  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    locationLatitude +
    "&lon=" +
    locationLongitudes +
    "&appid=" +
    apiKey;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.write(JSON.stringify(data));
    });
}
