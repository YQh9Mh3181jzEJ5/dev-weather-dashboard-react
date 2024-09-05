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

export interface WeatherSearchHookResult {
  weatherData: WeatherData | undefined;
  errorMessage: string | null;
  isLoading: boolean;
  handleSearch: (city: string) => void;
}

export interface WeatherHookResult {
  data: WeatherData | undefined;
  error: Error | null;
  isLoading: boolean;
}
