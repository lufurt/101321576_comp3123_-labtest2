
import React from 'react';

const WeatherIcon = ({ iconCode }) => {
  return <img src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`} alt="Weather Icon" />;
};

export default WeatherIcon;
