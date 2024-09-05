import axios from "axios";
import { WeatherData } from "@/type";
import { WEATHER_API_BASE_URL, WEATHER_API_KEY } from "@/constants";

const api = axios.create({
  baseURL: WEATHER_API_BASE_URL,
});

export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
  try {
    const response = await api.get("/weather", {
      params: {
        q: city,
        units: "metric",
        appid: WEATHER_API_KEY,
      },
    });
    const data = response.data;
    return {
      icon: data.weather[0].icon,
      temperature: Math.floor(data.main.temp),
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      location: data.name,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data.message ||
          `Failed to fetch weather data for ${city}`
      );
    }
    throw error;
  }
};
