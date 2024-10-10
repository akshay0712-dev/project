import React, { useEffect, useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "bf455455c1msh8ccbf8fc5cd4b8fp143900jsnbe9cd1f8e4f9",
      "x-rapidapi-host": "open-weather13.p.rapidapi.com",
    },
  };

  const fetchWeatherData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error("Network response was not ok");
      const result = await response.json(); // Use .json() to parse the response
      setWeatherData(result);
      console.log(weatherData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   fetchWeatherData();
  // }, [city]); // Fetch weather data when city changes

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <>
      <div className="border border-black w-[95vw] md:w-fit mt-[20vh] mx-auto px-3 md:px-8 py-3 md:py-8 + rounded-xl ">
        <div className="flex justify-center text-2xl pb-5 ">Weather</div>
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
        {weatherData && (
          <div className="mt-4">
            <h2 className="text-xl">{weatherData.name}</h2>
            <p>Temperature: {((weatherData.main.temp-32)*5/9).toFixed(2)} °C</p>
            <div className="flex flex-row items-center ">
              <span className="capitalize">Weather: {weatherData.weather[0].description}</span>
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt=""
                className="pl-7 h-8 w-fit "
                />
            </div>
              <p className="">Weather: {weatherData.wind.speed} m/s</p>
                <p className="capitalize">humidity: {weatherData.main.humidity} %</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Weather;
