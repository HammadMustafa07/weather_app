document.querySelector('.search-btn').addEventListener('click', getWeather);

async function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    try {
        // Call the Vercel serverless function (API route)
        const response = await fetch(`/api/weather?city=${city}`);
        if (!response.ok) {
            throw new Error("City not found or error fetching data");
        }

        const data = await response.json();

        // Fill main data
        document.querySelector('.city').textContent = `${data.name}, ${data.sys.country}`;
        document.querySelector('.text').textContent = data.weather[0].description;

        // Optional: Change image based on weather condition
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        document.querySelector('.description img').src = iconUrl;

        // Fill details
        document.querySelector('.feels-like').textContent = data.main.feels_like;
        document.querySelector('.humidity').textContent = data.main.humidity;
        document.querySelector('.wind').textContent = data.wind.speed;
        document.querySelector('.visibility').textContent = (data.visibility / 1000).toFixed(1); // convert m to km
        document.querySelector('.pressure').textContent = data.main.pressure;

    } catch (error) {
        alert(error.message);
        console.error("Fetch error:", error);
    }
}
