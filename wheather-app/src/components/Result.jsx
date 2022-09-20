import useWheather from '../hooks/useWheather';

const Result = () => {
  const { result } = useWheather();
  const { name } = result;
  return (
    <div>
      <h2>El clima de {name} es: </h2>;
    </div>
  );
};
export default Result;
