import { useState, useCallback, useEffect } from "react";
import { useWeather } from "./useWeather";

export const useWeatherSearch = (initialCity: string = "tokyo") => {
  const {
    weatherData,
    error: apiError,
    isLoading,
    fetchWeather,
  } = useWeather();
  const [searchError, setSearchError] = useState<string | null>(null);

  const handleSearch = useCallback(
    (city: string) => {
      if (city.trim()) {
        setSearchError(null);
        fetchWeather(city);
      } else {
        setSearchError("Please enter a city name");
      }
    },
    [fetchWeather]
  );

  useEffect(() => {
    handleSearch(initialCity);
  }, [handleSearch, initialCity]);

  const errorMessage = searchError || apiError;

  return { weatherData, errorMessage, isLoading, handleSearch };
};
