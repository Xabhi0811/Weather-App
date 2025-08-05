
const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const API_KEY = process.env.WEATHER_API_KEY;

app.get("/weather", async (req, res) => {
  const city = req.query.city || "London"; 

  if (!API_KEY) {
    return res.status(500).json({ error: "API key not found in .env file" });
  }

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    );


       
    const data = response.data;
    const simplified = {
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      humidity: data.main.humidity,
      wind_speed: data.wind.speed,
    };
      res.json(simplified);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch weather data",
      message: error.response?.data?.message || error.message,
    });
  }
});

app.listen(4000, () => {
  console.log(" Server running on 4000");
});

