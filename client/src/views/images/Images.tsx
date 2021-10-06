import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useAuthContext } from '../../auth/AuthContext';
import getImages from './getImages';
import ImageCarousel from './ImageCarousel';

const StyledImages = styled.div`
  background: white;
  border: 2px solid #3a3a3a;
  padding: 32px;

  h2 {
    text-align: center;
  }
`;

const Images = () => {
  const { identity } = useAuthContext();
  const [images, setImages] = useState<string[]>();

  useEffect(() => {
    if (identity) {
      getImages(identity).then((images) => setImages(images));
    }
  }, [identity]);

  return (
    <StyledImages>
      <ImageCarousel images={images} />
      <h2>Cute animals!</h2>
    </StyledImages>
  );
};

export default Images;
