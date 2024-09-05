import { useQuery } from "@tanstack/react-query";
import { fetchWeatherData } from "../utils/api";
import { WeatherHookResult } from "../type";

export const useWeather = (city: string): WeatherHookResult => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchWeatherData(city),
    enabled: !!city,
    staleTime: 5 * 60 * 1000,
    retry: false,
  });

  return { data, error, isLoading };
};
