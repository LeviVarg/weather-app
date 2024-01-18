import React from "react";
import "./weather.css";
import WeatherIcon from "react-icons-weather";

const Weather = ({ currentWeatherData, forcastData }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{currentWeatherData.name}</p>
          <p className="weather-description">
            {currentWeatherData.weather[0].description}
          </p>
        </div>
        <WeatherIcon
          name="owm"
          iconId={currentWeatherData.weather[0].id}
          flip="horizontal"
          rotate="90"
          className="weather-icon"
        />
      </div>
      <div className="bottom">
        <p className="temp">{`${Math.round(
          currentWeatherData.main.temp
        )}°C`}</p>
        <div className="details">
          <div className="detail">
            <p>Details</p>
          </div>
          <div className="detail">
            <p className="detail-param">Feels like</p>
            <p className="detail-param-value">
              {currentWeatherData.main.feels_like}
            </p>
          </div>
          <div className="detail">
            <p className="detail-param">Wind</p>
            <p className="detail-param-value">
              {currentWeatherData.wind.speed}m/s
            </p>
          </div>
          <div className="detail">
            <p className="detail-param">Humidity</p>
            <p className="detail-param-value">
              {currentWeatherData.main.humidity}%
            </p>
          </div>
          <div className="detail">
            <p className="detail-param">Pressure</p>
            <p className="detail-param-value">
              {currentWeatherData.main.pressure} hPa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
