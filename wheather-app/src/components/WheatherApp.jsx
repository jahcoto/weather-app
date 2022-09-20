import Form from './Form';
import Result from './Result';

import useWheather from '../hooks/useWheather';

const WheatherApp = () => {
  const { result } = useWheather();

  return (
    <>
      <main className="dos-columnas">
        <Form />

        {result?.name && <Result />}
      </main>
    </>
  );
};

export default WheatherApp;
