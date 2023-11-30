
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherDisplay from './components/WeatherDisplay';


const API_KEY = '80d77c1d6d9b22e6ce283f9cff72f388';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
  
    fetchData('Toronto');
  }, []);

  const fetchData = async (location) => {
    try {
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

 

  return (
    <div>

      {weatherData && (
        <>
          <WeatherDisplay weatherData={weatherData} />
     
        </>
      )}
    </div>
  );
};

export default App;
