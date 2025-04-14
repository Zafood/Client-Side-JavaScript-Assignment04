// Add student info dynamically
document.getElementById("student-info").textContent =
  "Student Name: Marshall McDougall | Student ID: 1274438";

// Weather API configuration
const API_KEY = "9ddcdbed46d83358c7591d3143296bb9"; // Replace with your actual key from weatherapi.com
const CITY = "Toronto";

// Fetch weather data
async function getWeather() {
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}&aqi=no`;

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

// Call the function
getWeather();
