import React from "react";
import { WeatherInfoProps } from "../../type";

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

export default React.memo(WeatherInfo);
