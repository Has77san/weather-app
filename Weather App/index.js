const apikey = "90f3ec5cecc3456a297fea557bb379b9";

const weatherDataEl = document.getElementById("weather-date")

const cityInputEl = document.getElementById("city-input")

const formEl = document.querySelector("form")

formEl.addEventListener("submit", (event)=>{
  event.preventDefault();
  const cityValue = cityInputEl.value;
  getWeatherData(cityValue);
})

async function getWeatherData(cityValue){
  try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`)

    if(!response.ok){
      throw new error("Network response was not ok")
    }

    const data = await response.json();

    const temperature = Math.round(data.main.tempreture)

    const description = data.weather[0].description

    const icon = data.weather[0].icon

    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}`,
      `Humidity: ${data.main.humidity}%`,
      `Wind speed: ${data.wind.speed} m/s`,
    ]

    weatherDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather icon">`;
    weatherDataEl.querySelector(".temperature").textContent = `${temperature}°C`;
    weatherDataEl.querySelector(".description").textContent = description;

    weatherDataEl.querySelector(".details").innerHTML = details.map((detail) => `<div>${deatail}</div>`
    ).join("");
    } catch (error) {}
}