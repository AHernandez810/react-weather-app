import React from "react";
import ReactDOM from "react-dom";

import "./WeatherApp.css";

function WeatherApp() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="weather-project">
          <form id="search-form" className="mb-3">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter your location"
                  className="form-control"
                  id="city-input"
                  autoComplete="off"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
            </div>
          </form>

          <div className="main-view">
            <h2 id="location"></h2>
            <ul>
              <li>
                <span id="date">Thursday 11:00</span>
              </li>
              <li id="description"></li>
            </ul>
            <div className="row">
              <div className="col-6">
                <div className="cleafix weather-temp">
                  <img
                    src="https://openweathermap.org/img/wn/10n@2x.png"
                    alt="Clear"
                    id="icon"
                    className="float-left"
                  />
                  <div className="float-left">
                    <strong id="temperature"></strong>
                    <span className="units">
                      <a href="#" id="celsius-link">
                        °C
                      </a>
                      |
                      <a href="#" id="fahrenheit-link">
                        °F
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    Humidity: <span id="humidity"></span>%
                  </li>
                  <li>
                    Wind: <span id="wind"></span> mph
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row weather-forecast" id="forecast"></div>
        </div>
      </div>
      <small>
        <a
          href="https://github.com/AHernandez810/Weather-App-Project"
          target="_blank"
        >
          Open-Source
        </a>
        by Ashley Hernandez
      </small>
      <script src="SRC/index.js"></script>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>,
  rootElement
);
