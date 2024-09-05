import { useState, useCallback, useEffect } from "react";
import { useWeather } from "./useWeather";
import { DEFAULT_CITY } from "../constants/config";
import { WeatherSearchHookResult } from "../type";

export const useWeatherSearch = (
  initialCity: string = DEFAULT_CITY
): WeatherSearchHookResult => {
  const [city, setCity] = useState(initialCity);
  const { data: weatherData, error, isLoading } = useWeather(city);
  const [searchError, setSearchError] = useState<string | null>(null);

  const handleSearch = useCallback((newCity: string) => {
    if (newCity.trim()) {
      setSearchError(null);
      setCity(newCity);
    } else {
      setSearchError("Please enter a city name");
    }
  }, []);

  useEffect(() => {
    handleSearch(initialCity);
  }, [handleSearch, initialCity]);

  const errorMessage = searchError || (error as Error)?.message;

  return { weatherData, errorMessage, isLoading, handleSearch };
};
