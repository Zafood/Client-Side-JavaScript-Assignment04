// Dynamically adding student ID and name
const studentInfo = document.getElementById("student-info");
studentInfo.textContent =
  "Student Name: Marshall McDougall | Student ID: 1274438";

// Function to get weather data using OpenWeatherMap API
const API_KEY = "9ddcdbed46d83358c7591d3143296bb9"; // Replace with your actual API key
const city = "Toronto"; // You can change this to any city

// Call the API
async function fetchWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();

    const weatherDiv = document.getElementById("weather-output");
    weatherDiv.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Condition: ${data.weather[0].description}</p>
        `;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    document.getElementById("weather-output").textContent =
      "Failed to load weather data.";
  }
}

fetchWeather();
