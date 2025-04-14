// Dynamically adding student ID and name
const studentInfo = document.getElementById("student-info");
studentInfo.textContent = "Student Name: Jane Doe | Student ID: 12345678";

// Function to get weather data using OpenWeatherMap API
const API_KEY = "YOUR_API_KEY"; // Replace with your actual API key
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
