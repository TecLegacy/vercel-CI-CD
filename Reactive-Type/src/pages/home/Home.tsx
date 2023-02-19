import { starWarApi } from '../NewEventPages';

type Props = {};

const Home = (props: Props) => {
  const chi = () => {
    starWarApi();
    console.log('logged');
  };
  return (
    <div>
      Home
      <button onClick={chi}>fet</button>
    </div>
  );
};

export default Home;
