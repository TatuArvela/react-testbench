import { Identity } from '../../auth/types';
import { Image } from './types';

const IMAGES_ENDPOINT = 'http://localhost:3001/images';

const getImages = async (identity: Identity): Promise<Image[]> => {
  return fetch(IMAGES_ENDPOINT, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${identity.token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error(error);
      return [];
    });
};

export default getImages;
