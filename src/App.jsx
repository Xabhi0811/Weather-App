import { useState } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");
    
    try {
      const res = await axios.get(`http://localhost:4000/weather?city=${city}`);
      setWeather(res.data);
    } catch (err) {
      console.error(err);
      setError("City not found or failed to fetch weather.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchWeather();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-blue-200 flex flex-col items-center justify-start py-12 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* App Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-center">
          <h1 className="text-3xl font-bold text-white">Weather Forecast</h1>
        </div>
        
        {/* Search Section */}
        <div className="p-6">
          <div className="flex mb-4">
            <input
              type="text"
              className="flex-grow px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter city name..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button 
              onClick={fetchWeather}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Searching
                </span>
              ) : 'Search'}
            </button>
          </div>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-3 mb-4 rounded">
              <p>{error}</p>
            </div>
          )}

          {/* Weather Display */}
          {weather ? (
            <div className="mt-6 border-t pt-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{weather.city}, {weather.country}</h2>
                  <p className="text-gray-500">{new Date().toLocaleDateString('en-US', { weekday: 'long' })}</p>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-bold text-gray-800">{weather.temperature}°C</p>
                  <p className="text-gray-600 capitalize">{weather.description}</p>
                </div>
              </div>

              <div className="flex justify-center my-6">
                <img
                  src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
                  alt={weather.description}
                  className="w-32 h-32"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">Humidity</p>
                  <p className="text-xl font-semibold text-gray-800">{weather.humidity}%</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">Wind</p>
                  <p className="text-xl font-semibold text-gray-800">{weather.wind_speed} m/s</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-8 text-center py-8">
              <div className="text-gray-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <p className="text-gray-500">Enter a city to see weather information</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;