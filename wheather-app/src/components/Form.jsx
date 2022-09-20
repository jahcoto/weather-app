import { useState } from 'react';

import useWheather from '../hooks/useWheather';

const Form = () => {
  const { search, searchData, searchWeather } = useWheather();

  const { city, country } = search;

  const [alert, setAlert] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    if (Object.values(search).includes('')) {
      setAlert('Todos los campos son requeridos');
      return;
    }

    searchWeather(search);
  };

  return (
    <div className="contenedor">
      {alert && <p>{alert}</p>}
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="city">Ciudad</label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={searchData}
            value={city}
          />
        </div>
        <div className="campo">
          <label htmlFor="country">País</label>
          <select
            name="country"
            id="country"
            onChange={searchData}
            value={country}
          >
            <option value="">Seleccione un país</option>
            <option value="US">Estados Unidos</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="MX">México</option>
            <option value="ES">España</option>
          </select>
        </div>
        <input type="submit" value="Consultar Clima" />
      </form>
    </div>
  );
};

export default Form;
