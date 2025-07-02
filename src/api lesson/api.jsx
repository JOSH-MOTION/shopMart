import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
      const response = await axios.get(
        'http://api.weatherapi.com/v1/current.json?key=bf11616c36794afbb52204104250207&q=ghana&aqi=no'
      );
      console.log(response.data); // always inspect the structure
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="p-4 font-sans">
      <h1 className="text-xl font-bold mb-4">Weather in Ghana</h1>
      {weather ? (
        <div className="bg-blue-100 p-4 rounded-md shadow-md">
          <p><strong>Location:</strong> {weather.location.name}, {weather.location.country}</p>
          <p><strong>Temperature:</strong> {weather.current.temp_c}°C</p>
          <p><strong>Condition:</strong> {weather.current.condition.text}</p>
          <p><strong>Humidity:</strong> {weather.current.humidity}%</p>
          <p><strong>Wind:</strong> {weather.current.wind_kph} kph</p>
          <img src={`https:${weather.current.condition.icon}`} alt="weather icon" />
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default App;
