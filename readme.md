# Weather App 🌦️

A simple and elegant Weather App built using **HTML**, **CSS**, and **JavaScript**. It fetches real-time weather data using a weather API and displays current conditions for any city entered by the user.

## Features

- 🌍 Search weather by city name
- 🌡️ Displays temperature, weather condition, humidity, and wind speed
- 🎨 Clean and responsive UI design
- ⚡ Built using only HTML, CSS, and vanilla JavaScript (no frameworks)

## Live Demo

Check out the live app here: [Weather App](https://weather-app-theta-bay-87.vercel.app)



## Tech Stack

- **Frontend**:  
  - HTML  
  - CSS  
  - JavaScript  

- **API**:  
  - [OpenWeatherMap API](https://openweathermap.org/api)

## Getting Started

### Prerequisites

To run the app locally, all you need is a modern web browser.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/weather-app.git
```

2. Navigate to the project folder:

```bash
cd weather-app
```

3. Open `index.html` in your browser:

```bash
# On most systems
open index.html
# or just double click the file in your file manager
```

## Usage

1. Enter a city name in the input field.
2. Click the search button.
3. The current weather information will be displayed below.

## API Setup

This app uses the **OpenWeatherMap API**. To get it working:

1. Go to the official documentation:  
   👉 [OpenWeatherMap Docs](https://openweathermap.org/current)

2. Sign up for a free account at [openweathermap.org](https://openweathermap.org/api).

3. After signing in, go to the **API Keys** section and generate your own key.

4. In the `script.js` file, find the `try` block or the section where the API call is made, and **replace the placeholder token with your actual API key**:

```js
const apiKey = "YOUR_API_KEY"; // Replace this with your actual key from OpenWeather
```

## Folder Structure

```
weather-app/
│
├── index.html       # Main HTML file
├── style.css        # Styling
└── script.js        # JavaScript for API and DOM logic
```




