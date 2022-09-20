import Form from './Form';
import Result from './Result';
import Loading from './Loading';

import useWheather from '../hooks/useWheather';

const WheatherApp = () => {
  const { result, loading, noResult } = useWheather();

  return (
    <>
      <main className="dos-columnas">
        <Form />

        {loading ? (
          <Loading />
        ) : result?.name ? (
          <Result />
        ) : noResult ? (
          <p>{noResult}</p>
        ) : (
          <p>El clima se va a mostrar aquí</p>
        )}
      </main>
    </>
  );
};

export default WheatherApp;
