import { FaSearch } from "react-icons/fa";
import {
  WiDaySunny,
  WiStrongWind,
  WiHumidity,
  WiDayCloudy,
  WiNightAltCloudy,
  WiCloud,
  WiCloudy,
  WiShowers,
  WiDayRain,
  WiNightAltRain,
  WiThunderstorm,
  WiSnow,
  WiFog,
} from "react-icons/wi";
import { TiDeleteOutline } from "react-icons/ti";
import { IconType } from "react-icons";
import { useEffect, useState } from "react";
interface WeatherInfoProps {
  icon: IconType;
  value: string;
  label: string;
  unit: string;
}

interface WeatherData {
  icon: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  location: string;
}

const WeatherInfo = ({ icon: Icon, value, label, unit }: WeatherInfoProps) => (
  <div className="bg-white bg-opacity-10 flex items-center p-3 rounded-md">
    <Icon className="w-10 h-10 text-white mr-2" />
    <div>
      <p className="text-lg text-slate-200">
        {value}
        <span className="ml-1">{unit}</span>
      </p>
      <span className="text-sm text-slate-200">{label}</span>
    </div>
  </div>
);

const Weather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [validation, setValidation] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

  const allIcons: { [key: string]: IconType } = {
    "01d": WiDaySunny,
    "01n": WiDaySunny,
    "02d": WiDayCloudy,
    "02n": WiNightAltCloudy,
    "03d": WiCloud,
    "03n": WiCloud,
    "04d": WiCloudy,
    "04n": WiCloudy,
    "09d": WiShowers,
    "09n": WiShowers,
    "10d": WiDayRain,
    "10n": WiNightAltRain,
    "11d": WiThunderstorm,
    "11n": WiThunderstorm,
    "13d": WiSnow,
    "13n": WiSnow,
    "50d": WiFog,
    "50n": WiFog,
  };
  const search = async (city: string) => {
    if (!city.trim()) {
      setValidation("Please enter a city name!");
      return;
    }
    setValidation("");
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;
      const response = await fetch(url);

      const data = await response.json();
      if (!response.ok) {
        setValidation(data.message);
        return;
      }
      setWeatherData({
        icon: data.weather[0].icon,
        temperature: Math.floor(data.main.temp),
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        location: data.name,
      });
    } catch (error) {
      console.error(error);
      setError(
        "Failed to retrieve weather information. Please check the city name and try again."
      );
    }
  };

  useEffect(() => {
    search("tokyo");
  }, []);

  const WeatherIcon = ({ iconCode }: { iconCode: string }) => {
    const Icon = allIcons[iconCode] || WiDaySunny;
    return <Icon className="w-40 h-40 text-slate-200 mt-3" />;
  };

  const handleSearch = () => {
    search(inputValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setValidation("");
  };

  const handleClearInput = () => {
    setInputValue("");
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 text-slate-200 text-center">
        Let's check the weather now!
      </h1>
      <div className="flex flex-col max-w-md items-center justify-between gap-3 bg-gradient-to-br from-blue-700 to-purple-600 p-8 rounded-lg shadow-lg backdrop-blur-md">
        <div className="flex items-center justify-between gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-slate-100 py-2 px-6 pr-10 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
              aria-label="Search for a city"
              value={inputValue}
              onChange={handleInputChange}
            />
            <TiDeleteOutline
              className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 cursor-pointer"
              onClick={handleClearInput}
            />
          </div>
          <div
            className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-200 transition duration-300"
            aria-label="Search"
            onClick={handleSearch}
          >
            <FaSearch />
          </div>
        </div>
        {validation && <p className="text-red-500">{validation}</p>}
        {weatherData ? (
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
        ) : (
          <p className="text-slate-200">{error}</p>
        )}
      </div>
    </div>
  );
};

export default Weather;
