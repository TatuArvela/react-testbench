import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useAuthContext } from '../../auth/AuthContext';
import getImages from './getImages';
import ImageCarousel from './ImageCarousel';
import ImageMasonry from './ImageMasonry';
import { Image } from './types';

const StyledImagesView = styled.div`
  text-align: center;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
`;

const Button = styled.button`
  margin: 8px auto;
  border: 2px solid black;
  padding: 8px;
  font-size: 16px;
  border-radius: 0;
  background: rgb(220, 220, 220);
  transition: all 0.1s;

  &:hover {
    background: rgb(200, 200, 200);
    border-top-width: 1px;
    border-left-width: 1px;
    border-right-width: 3px;
    border-bottom-width: 3px;
  }

  &:active {
    &:hover {
      background: rgb(220, 220, 220);
      border-top-width: 3px;
      border-left-width: 3px;
      border-right-width: 1px;
      border-bottom-width: 1px;
    }
  }
`;

const ImagesView = () => {
  const { identity } = useAuthContext();
  const [images, setImages] = useState<Image[]>();
  const [masonryMode, setMasonryMode] = useState<boolean>(true);
  const switchMode = () => setMasonryMode((prevState) => !prevState);

  useEffect(() => {
    if (identity) {
      getImages(identity).then((images) => setImages(images));
    }
  }, [identity]);

  return (
    <StyledImagesView>
      <Button onClick={() => switchMode()}>Change mode</Button>
      {masonryMode ? (
        <ImageMasonry images={images} />
      ) : (
        <ImageCarousel images={images} />
      )}
    </StyledImagesView>
  );
};

export default ImagesView;
