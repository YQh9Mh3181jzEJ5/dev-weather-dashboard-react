import { IconType } from "react-icons";

export interface WeatherData {
  icon: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  location: string;
}

export interface WeatherInfoProps {
  icon: IconType;
  value: string;
  label: string;
  unit: string;
}
