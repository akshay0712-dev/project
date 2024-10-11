import React, { useEffect, useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("patna");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "bf455455c1msh8ccbf8fc5cd4b8fp143900jsnbe9cd1f8e4f9", 
      "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
    },
  };

  const fetchWeatherData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error("Network response was not ok");
      const result = await response.json();
      setWeatherData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <>
      <div className="border border-black w-[95vw] md:w-fit mt-[20vh] mx-auto px-3 md:px-8 py-3 md:py-8 + rounded-xl ">
        <div className="flex justify-center text-2xl pb-5">Weather</div>
        <input
          type="text"
          value={city}
          placeholder="Enter City Name here!"
          onChange={handleInputChange}
          className="mb-8 p-2 border border-black"
        />
        <button
          onClick={fetchWeatherData}
          className="ml-2 bg-blue-500 text-white p-2"
        >
          Get Weather
        </button>

        {loading && <div>Loading...</div>}
        {error && <div className="text-red-500">{error}</div>}
        {weatherData && weatherData.current_observation && (
          <div className="mt-4">
            <h2 className="text-xl capitalize">{city}</h2>
            <p>
              Temperature:{" "}
              {(
                ((weatherData.current_observation.condition.temperature - 32) * 5) /
                9
              ).toFixed(2)}{" "}
              °C
            </p>
            <div className="flex flex-row items-center ">
              <span className="capitalize">
                Weather: {weatherData.current_observation.condition.text}
              </span>
            </div>
            <p>Wind Speed: {weatherData.current_observation.wind.speed} mph</p>
            <p>Humidity: {weatherData.current_observation.atmosphere.humidity} %</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Weather;
