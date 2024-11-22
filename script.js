const apiKey = "9cc1c6365f785a0a2398e84f87199316";

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

document.getElementById("getWeather").addEventListener("click", async () => {
  const city = document.getElementById("city").value;
  if (city) {
    const weatherData = await getWeather(city);
    displayWeather(weatherData);
  } else {
    alert("Please enter a valid city");
  }
}); 

document.getElementById("city").addEventListener("keyup", async (e) => {
  const city = document.getElementById("city").value;
  if(e.keyCode===13){
    if (city) {
      const weatherData = await getWeather(city);
      displayWeather(weatherData);
    } else {
      alert("Please enter a valid city");
    }
  }
}); 

function displayWeather(data) {
  if (data.cod === 200) {
    document.getElementById("cityName").innerText = data.name;
    document.getElementById(
      "temperature"
    ).innerText = `Temperature: ${data.main.temp} °C`;
    document.getElementById("description").innerText =
      data.weather[0].description;
    document.getElementById(
      "humidity"
    ).innerText = `Humidity: ${data.main.humidity} %`;
    document.getElementById("windspeed").innerText = `windspeed: ${data.main.temp}`;
  } else {
    alert("Your desired City couldnot be  found");
  }
}
