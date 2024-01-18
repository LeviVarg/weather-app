import "./App.css";
import { Search, Weather, Forcast } from "./components";
import { weatherApiUrl, weatherApiKey, forcastApiUrl } from "./api";
import { useState } from "react";

const App = () => {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [forcastData, setForcastData] = useState(null);

  const handleSearchOptions = async (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const weatherFetch = await fetch(
      `${weatherApiUrl}lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`
    );

    const weatherRespons = await weatherFetch.json();
    setCurrentWeatherData(weatherRespons);

    const forcastFetch = await fetch(
      `${forcastApiUrl}lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`
    );

    const forcastRespons = await forcastFetch.json();

    setForcastData(forcastRespons);
  };
  console.log(currentWeatherData);
  console.log("forcast data", forcastData);

  return (
    <div className="container">
      <Search handleSearchOptions={handleSearchOptions}></Search>
      {currentWeatherData && (
        <Weather currentWeatherData={currentWeatherData}></Weather>
      )}

      {forcastData && <Forcast forcastData={forcastData}></Forcast>}
    </div>
  );
};

export default App;
