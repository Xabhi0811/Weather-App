🌦 Weather App
A simple full-stack Weather App built using React for the frontend and Node.js + Express for the backend. It allows users to fetch real-time weather data by entering a city name. The backend integrates with the OpenWeatherMap API.

📁 Project Structure
pgsql
Copy
Edit
weather-app/
├── Backend/
│   ├── server.js
│   └── .env
├── Frontend/
│   └── weather-frontend/
│       ├── src/
│       │   ├── App.jsx
│       │   └── App.css
│       └── public/
└── README.md
🚀 Features
🔍 Search weather by city name

🌤 Real-time temperature, humidity, wind, and cloud data

🎨 Simple and clean UI

🛡 CORS and environment-variable support

🌐 OpenWeatherMap API integration

🔧 Tech Stack
🌐 Frontend:
React

Axios

CSS

🖥 Backend:
Node.js

Express

dotenv

cors

axios

📦 Installation and Setup
1️⃣ Clone the repository
bash
Copy
Edit
git clone https://github.com/Xabhi0811/Weather-App.git
cd weather-app
2️⃣ Setup Backend
bash
Copy
Edit
cd Backend
npm install
👉 Create a .env file in the Backend folder:
ini
Copy
Edit
API_KEY=your_openweathermap_api_key
You can get a free API key by signing up at https://openweathermap.org/api

Start the server:
bash
Copy
Edit
node server.js
The server will run at: http://localhost:4000

3️⃣ Setup Frontend
bash
Copy
Edit
cd ../Frontend/weather-frontend
npm install
npm start
