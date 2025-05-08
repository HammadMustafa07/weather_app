// /api/weather.js
export default async function handler(req, res) {
    const { city } = req.query;  // Get city from query string

    if (!city) {
        return res.status(400).json({ error: "City name is required" });
    }

    const apiKey = process.env.WEATHER_API_KEY;  // Get API key from Vercel environment variables
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            return res.status(404).json({ error: "City not found" });
        }

        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: "Error fetching weather data" });
    }
}
