import { useState, createContext } from 'react';
import axios from 'axios';

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [search, setSearch] = useState({
    city: '',
    country: '',
  });

  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  const [noResult, setNoResult] = useState(false);

  const searchData = e => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const searchWeather = async searchData => {
    setLoading(true);
    setNoResult(false);
    try {
      const { city, country } = searchData;
      const apiID = import.meta.env.VITE_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&limit=1&appid=${apiID}`;
      const { data } = await axios(url);
      const { lat, lon } = data.coord;
      const urlWheather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiID}`;
      const { data: weather } = await axios(urlWheather);
      setResult(weather);
    } catch (error) {
      setNoResult(`No hay resultados para la busqueda`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider
      value={{ search, searchData, searchWeather, result, loading, noResult }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider };

export default WeatherContext;
