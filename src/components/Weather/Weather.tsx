import React from "react";
import { WiHumidity, WiStrongWind } from "react-icons/wi";

import SearchBar from "../SearchBar/SearchBar";
import WeatherIcon from "./WeatherIcon";
import WeatherInfo from "./WeatherInfo";
import { useWeatherSearch } from "../../hooks/useWeatherSearch";

const Weather: React.FC = () => {
  const { weatherData, errorMessage, isLoading, handleSearch } =
    useWeatherSearch();

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 text-slate-200 text-center">
        Let's check the weather now!
      </h1>
      <div className="flex flex-col max-w-md items-center justify-between gap-3 bg-gradient-to-br from-blue-700 to-purple-600 p-8 rounded-lg shadow-lg backdrop-blur-md">
        <SearchBar onSearch={handleSearch} />
        {isLoading && <p className="text-slate-200">Loading...</p>}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {weatherData && (
          <div className="w-full flex flex-col items-center">
            <WeatherIcon iconCode={weatherData.icon} />
            <div className="text-center space-y-2 pb-8">
              <p className="text-slate-200 text-8xl">
                {weatherData.temperature}℃
              </p>
              <p className="text-slate-200 text-4xl">{weatherData.location}</p>
            </div>
            <div className="flex items-center justify-between gap-4">
              <WeatherInfo
                icon={WiHumidity}
                value={weatherData.humidity.toString()}
                label="Humidity"
                unit="%"
              />
              <WeatherInfo
                icon={WiStrongWind}
                value={weatherData.windSpeed.toString()}
                unit="km/h"
                label="Wind Speed"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
