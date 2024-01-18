import React from "react";
import {
  Accordion,
  AccordionItemHeading,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import WeatherIcon from "react-icons-weather";
import "./forcast.css";

const daysOfTheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forcast = (forcastData) => {
  const forcast =
    forcastData && forcastData.forcastData.list
      ? forcastData.forcastData.list.slice(0, 7)
      : [];

  const today = new Date().getDay();
  const nextWeek = daysOfTheWeek
    .slice(today, daysOfTheWeek.length)
    .concat(daysOfTheWeek.slice(0, today));

  return (
    <section>
      <Accordion allowZeroExpanded>
        {forcast.map((item, i) => (
          <AccordionItem key={i}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <WeatherIcon
                    name="owm"
                    iconId={item.weather[0].id}
                    flip="horizontal"
                    rotate="90"
                    className="forcast-icon"
                  ></WeatherIcon>
                  <label htmlFor="" className="day">
                    {nextWeek[i]}
                  </label>
                  <label className="forcast-description">
                    {item.weather[0].description.toUpperCase()}
                  </label>
                  <label htmlFor="" className="min-max">
                    {`${Math.round(item.main.temp_min)}°C/
                    ${Math.round(item.main.temp_max)}°C`}
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily__details-grid">
                <div className="daily__details-grid-item">
                  <label htmlFor="">Pressure</label>
                  <label htmlFor="">{item.main.pressure} mPa</label>
                </div>
                <div className="daily__details-grid-item">
                  <label htmlFor="">Humidity</label>
                  <label htmlFor="">{item.main.humidity} %</label>
                </div>
                <div className="daily__details-grid-item">
                  <label htmlFor="">Clouds</label>
                  <label htmlFor="">{item.clouds.all}%</label>
                </div>
                <div className="daily__details-grid-item">
                  <label htmlFor="">Wind</label>
                  <label htmlFor="">{item.wind.speed} m/s</label>
                </div>
                <div className="daily__details-grid-item">
                  <label htmlFor="">Feels Like</label>
                  <label htmlFor="">{Math.round(item.main.feels_like)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default Forcast;
