import { useState, createContext } from 'react';
import axios from 'axios';

const WheatherContext = createContext();

const WheatherProvider = ({ children }) => {
  const [search, setSearch] = useState({
    city: '',
    country: '',
  });

  const [result, setResult] = useState({});

  const searchData = e => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const searchWeather = async searchData => {
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
      console.log(error);
    }
  };

  return (
    <WheatherContext.Provider
      value={{ search, searchData, searchWeather, result }}
    >
      {children}
    </WheatherContext.Provider>
  );
};

export { WheatherProvider };

export default WheatherContext;
