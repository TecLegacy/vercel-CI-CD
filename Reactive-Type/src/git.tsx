export const starWarApi = (timeout = 5000): Promise<any> => {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      const error = new Error('Request timed out');
      reject(error);
    }, timeout);

    fetch('https://swapi.dev/api/films')
      .then((response) => {
        clearTimeout(timeoutId);
        if (!response.ok) {
          if (response.status === 404) {
            const error = new Error('The resource you requested was not found');
            reject(error);
          } else {
            const error = new Error(
              'An error occurred while fetching the data'
            );
            reject(error);
          }
        } else {
          response.json().then((data) => {
            resolve(data);
          });
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
