import { FaSearch } from "react-icons/fa";
import { WiDaySunny, WiStrongWind, WiHumidity } from "react-icons/wi";
import { IconType } from "react-icons";
interface WeatherInfoProps {
  icon: IconType;
  value: string;
  label: string;
  unit: string;
}

const WeatherInfo = ({ icon: Icon, value, label, unit }: WeatherInfoProps) => (
  <div className="bg-white bg-opacity-10 flex items-center p-3 rounded">
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
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-red-800">
      <h1 className="text-4xl font-bold mb-4 text-slate-200">Weather Today</h1>
      <div className="flex flex-col max-w-md items-center justify-between gap-3 bg-gradient-to-br from-blue-700 to-purple-600 p-8 rounded-lg shadow-lg backdrop-blur-md">
        <div className="flex items-center justify-between gap-3">
          <input
            type="text"
            placeholder="Search"
            className="bg-slate-100 py-2 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Search for a city"
          />
          <div
            className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-200 transition duration-300"
            aria-label="Search"
          >
            <FaSearch />
          </div>
        </div>
        <WiDaySunny className="w-40 h-40 text-slate-200" />
        <div className="text-center space-y-3 pb-8">
          <p className="text-slate-200 text-8xl">16℃</p>
          <p className="text-slate-200 text-4xl">Tokyo</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <WeatherInfo
            icon={WiHumidity}
            value="71"
            label="Humidity"
            unit={"%"}
          />
          <WeatherInfo
            icon={WiStrongWind}
            value="3.6"
            unit={"km/h"}
            label="Wind Speed"
          />
        </div>
      </div>
    </div>
  );
};

export default Weather;
