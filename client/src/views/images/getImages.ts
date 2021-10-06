import { Identity } from '../../auth/types';

const IMAGES_ENDPOINT = 'http://localhost:3001/images';

const getImages = async (identity: Identity): Promise<string[]> => {
  return fetch(IMAGES_ENDPOINT, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${identity.token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

export default getImages;
