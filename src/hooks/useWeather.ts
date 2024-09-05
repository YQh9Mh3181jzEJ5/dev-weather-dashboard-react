import { useState, useCallback } from "react";
import { fetchWeatherData } from "../utils/api";
import { WeatherData } from "../type";

export const useWeather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeather = useCallback(async (city: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred");
      }
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { weatherData, error, isLoading, fetchWeather };
};
