import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
type Props = {};

const ErrorEle = (props: Props) => {
  const navigate = useNavigate();

  const navigateHandler = (e: any) => {
    e.preventDefault();

    //Programatic Navigation
    navigate('/');
  };
  return (
    <>
      <Layout />
      <div className="  mt-10 flex flex-col items-center justify-center gap-8 py-10 text-2xl">
        <h2>No page Found</h2>
        <p>Go back </p>
        <button
          onClick={navigateHandler}
          className={`  rounded-md bg-teal-300 px-4 py-2 text-black  transition  duration-500 ease-in-out  hover:bg-red-300 `}
        >
          Back to Home Page
        </button>
      </div>
    </>
  );
};

export default ErrorEle;
