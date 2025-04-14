// Add student info dynamically
document.getElementById("student-info").textContent =
  "Student Name: Marshall McDougall | Student ID: 1274438";

/// Your API key
const API_KEY = "9ddcdbed46d83358c7591d3143296bb9";
const LAT = 43.65107; // Toronto Latitude
const LON = -79.347015; // Toronto Longitude
const EXCLUDE = "minutely,hourly,daily,alerts";

// Get weather data using One Call API
async function fetchWeather() {
  const url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${API_KEY}`;
  try {
    const res = await fetch(url);
    const data = await res.json();

    document.getElementById(
      "location"
    ).textContent = `📍 Location: ${data.location.name}, ${data.location.country}`;
    document.getElementById(
      "temperature"
    ).textContent = `🌡️ Temperature: ${data.current.temp_c}°C`;
    document.getElementById(
      "condition"
    ).textContent = `☁️ Condition: ${data.current.condition.text}`;
  } catch (error) {
    console.error("Error fetching weather:", error);
    document.getElementById("location").textContent =
      "Failed to load weather data.";
  }
}

fetchWeather();
