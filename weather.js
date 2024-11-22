
const API_KEY = "PASTE-YOUR-API-KEY"
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeather() {
    // Get the city from the input field
    const city = document.getElementById('cityInput').value;
    
    if (!city) {
        alert("Please enter a city name.");
        return;
    }
    
    // Prepare the API URL
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    
    try {
        // Fetch data from the API
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error("City not found");
        }
        
        const data = await response.json();
        
        // Extract and display the weather data
        displayWeather(data);
        
    } catch (error) {
        // Show error message if the API call fails
        document.getElementById('weatherInfo').innerHTML = `<p>${error.message}</p>`;
    }
}

function displayWeather(data) {
    // Extract relevant data
    const weatherDescription = data.weather[0].description;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    
    // Display weather information
    document.getElementById('weatherInfo').innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Description: ${weatherDescription}</p>
        <p>Temperature: ${temperature}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
    `;
}
