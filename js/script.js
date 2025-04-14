// Dynamically show student name and ID
document.getElementById("student-info").textContent =
  "Student Name: Jane Doe | Student ID: 12345678";

// Replace with your actual OpenWeatherMap API key
const API_KEY = "YOUR_API_KEY_HERE";
const CITY_ID = "6167865"; // Toronto

const url = `https://api.openweathermap.org/data/2.5/forecast?id=${CITY_ID}&appid=${API_KEY}&units=metric`;

async function fetchForecast() {
  try {
    const res = await fetch(url);
    const data = await res.json();

    const forecastContainer = document.getElementById("forecast-container");

    // Get the first 3 forecasts (each 3 hours apart)
    for (let i = 0; i < 3; i++) {
      const forecast = data.list[i];
      const date = new Date(forecast.dt * 1000).toLocaleString();
      const temp = forecast.main.temp;
      const condition = forecast.weather[0].description;

      // Create a forecast card
      const card = document.createElement("div");
      card.className = "forecast-card";
      card.innerHTML = `
        <h3>${date}</h3>
        <p>🌡️ ${temp}°C</p>
        <p>☁️ ${condition}</p>
      `;
      forecastContainer.appendChild(card);
    }
  } catch (error) {
    console.error("Error fetching forecast:", error);
    document.getElementById("forecast-container").innerHTML =
      "<p>Failed to load forecast data.</p>";
  }
}

fetchForecast();
