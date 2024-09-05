import { WiDaySunny } from "react-icons/wi";
import { allIcons } from "../../constants/icon";
import React from "react";

interface WeatherIconProps {
  iconCode: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({
  iconCode,
}: {
  iconCode: string;
}) => {
  const Icon = allIcons[iconCode] || WiDaySunny;
  return <Icon className="w-40 h-40 text-slate-200 mt-3" />;
};

export default React.memo(WeatherIcon);
