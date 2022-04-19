import React, { useEffect, useState } from 'react';

import { useAuthContext } from '../../auth/AuthContext';
import getImages from './getImages';
import ImageCarousel from './ImageCarousel';

const Images = () => {
  const { identity } = useAuthContext();
  const [images, setImages] = useState<string[]>();

  useEffect(() => {
    if (identity) {
      getImages(identity).then((images) => setImages(images));
    }
  }, [identity]);

  return <ImageCarousel images={images} />;
};

export default Images;
