import { useQuery } from "@tanstack/react-query";
import { fetchWeatherData } from "../utils/api";

export const useWeather = (city: string) => {
  return useQuery({
    queryKey: ["weather", city],
    queryFn: () => fetchWeatherData(city),
    enabled: !!city,
    staleTime: 5 * 60 * 1000,
    retry: false,
  });
};
