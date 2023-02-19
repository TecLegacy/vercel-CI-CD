import { useLoaderData, useNavigation } from 'react-router-dom';
import StarWarData from './StarWarData';

type Props = {};

const NewEventPage = (props: Props) => {
  // const navigation = useNavigation();
  // let loading;
  // if (navigation.state === 'loading') {
  //   loading = true;
  // }

  // accesing data with RR inbuilt hook
  const starWarData = useLoaderData();
  console.log('star war data');
  console.log(typeof starWarData);
  return (
    <>
      {/* {loading && <p>Loading...</p>} */}

      <StarWarData onData={starWarData} />
    </>
  );
};

export default NewEventPage;

//Convention for loader attri
//@ where you want to use data use loader in that component

export const starWarApi = async () => {
  // setTimeout(async () => {
  const response = await fetch('https://swapi.dev/api/films');
  try {
    if (!response.ok) {
      // Typescript conversion of code - Error method is of type string
      // & response.status is type of number
      throw new Error(response.status.toString());
    }

    const data = await response.json();

    return data;
  } catch (error: any) {
    let errorMessage;
    switch (error.message) {
      case 'Failed to fetch':
        errorMessage =
          'Unable to fetch data. Please check your internet connection.';
        break;
      case '404':
        errorMessage = 'The user you requested does not exist.';
        break;
      case '500':
        errorMessage = 'Server error. Please try again later.';
        break;
      default:
        errorMessage = 'An error occurred. Please try again later.';
        break;
    }

    throw new Error(errorMessage);
  }
  // }, 2000);
};
