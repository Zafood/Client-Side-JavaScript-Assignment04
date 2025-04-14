// Set student info
const studentInfo = document.getElementById("student-info");
if (studentInfo) {
  studentInfo.textContent = "Student Name: Jane Doe | Student ID: 12345678";
}

// Replace with your actual OpenWeatherMap API key
const API_KEY = "9ddcdbed46d83358c7591d3143296bb9";
const CITY_ID = "6167865"; // Toronto

const url = `https://api.openweathermap.org/data/2.5/forecast?id=${CITY_ID}&appid=${API_KEY}&units=metric`;

async function fetchForecast() {
  const forecastContainer = document.getElementById("forecast-container");

  if (!forecastContainer) {
    console.error("Missing #forecast-container element in HTML.");
    return;
  }

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Network error");

    const data = await res.json();

    for (let i = 0; i < 3; i++) {
      const forecast = data.list[i];
      const date = new Date(forecast.dt * 1000).toLocaleString();
      const temp = forecast.main.temp;
      const condition = forecast.weather[0].description;

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
    if (forecastContainer) {
      forecastContainer.innerHTML = "<p>Failed to load forecast data.</p>";
    }
  }
}

fetchForecast();
