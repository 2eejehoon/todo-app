import { useState, useEffect } from "react";

export const Weather = () => {
  // const [city, setCity] = useState("");
  const city = "incheon";
  const [weatherData, setWeatherData] = useState([]);
  const getWeatherData = async () => {
    const json = await (
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=47a2696b7a8b1834f4b79d64284d5466`
      )
    ).json();
    setWeatherData(json.weather[0].main);
  };
  useEffect(() => {
    getWeatherData();
  }, [city]);
  return (
    <>
      <p>인천의 날씨는 {weatherData}</p>
    </>
  );
};
