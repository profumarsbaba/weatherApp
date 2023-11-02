import React, { useState } from "react";
import {
  FaSearch,
  FaWater,
  FaCloudRain,
  FaSun,
  FaCloud,
  FaSnowflake,
  FaWind,
  FaMoon,
  FaCloudMoonRain,
  FaSoundcloud,
  FaCloudflare,
  FaCloudSun,
  FaExclamationCircle,
} from "react-icons/fa";
import WorldImage from "./world-image.png";

const Weatherapp = () => {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState(0);
  const [cityName, setCityName] = useState("");
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [icon, setIcon] = useState("");

  let api_key = "1ea9a5c9b7d6adea45c370bf6af7cecb";

  const search = async () => {
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${api_key}`;
    const response = await fetch(URL);
    const data = await response.json();

    if (data.name != undefined) {
      setTemp(Math.floor(data.main.temp_max));
      setCityName(data.name);
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setIcon(data.weather[0].icon);
    } else {
      setTemp(0);
      setCityName("");
      setHumidity(0);
      setWind(0);
      setIcon("9999");
      setCityName("The city does not exit or Invali city name");
    }
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      <div className="search-input">
        <input
          type="text"
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search city"
          className="search-city"
        />
        <div className="search-icon" onClick={search}>
          <FaSearch className="icon" />
        </div>
      </div>
      <div className="first-section">
        <div className="world-image">
          <img src={WorldImage} />
        </div>
        <div className="weather-icon">
          {icon === "9999" ? (
            <FaExclamationCircle className="icon" />
          ) : icon === "01n" || icon === "01d" ? (
            <FaCloud className="icon" />
          ) : icon === "02n" || icon === "02d" ? (
            <FaCloudRain className="icon" />
          ) : icon === "03n" || icon === "03d" ? (
            <FaSun className="icon" />
          ) : icon === "04n" || icon === "04d" ? (
            <FaCloudSun className="icon" />
          ) : icon === "05n" || icon === "05d" ? (
            <FaMoon className="icon" />
          ) : icon === "06n" || icon === "06d" ? (
            <FaCloudflare className="icon" />
          ) : icon === "07n" || icon === "07d" ? (
            <FaSoundcloud className="icon" />
          ) : icon === "08n" || icon === "08d" ? (
            <FaWater className="icon" />
          ) : icon === "09n" || icon === "09d" ? (
            <FaCloudMoonRain className="icon" />
          ) : (
            <FaSun className="icon" />
          )}
        </div>
      </div>
      <h1 className="temp">{temp}&deg;C</h1>
      <h1>{cityName}</h1>
      <div className="second-section">
        <div className="world-image">
          <FaWater className="humidity-icon" />
          <div>
            <span>
              {humidity}% <br />
              Humidity{" "}
            </span>
          </div>
        </div>
        <div className="weather-icon">
          <FaWind className="wind" />
          <div>
            <span>
              {wind}km/h
              <br />
              Wind Speed{" "}
            </span>
          </div>
        </div>
      </div>
   

</div>
  );
};

export default Weatherapp;
