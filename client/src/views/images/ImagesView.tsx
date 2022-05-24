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
  background: rgb(220, 220, 220);
  border-radius: 0;
  border: none;
  box-shadow: inset 0 0 0 2px black;
  font-size: 16px;
  margin: 8px auto;
  padding: 8px;

  &:hover {
    background: rgb(200, 200, 200);
    box-shadow: inset 0 0 0 1px black, inset -1px -1px 0 1px black;
    padding: 7px 9px 9px 7px;
  }

  &:active {
    &:hover {
      background: rgb(220, 220, 220);
      box-shadow: inset 0 0 0 1px black, inset 1px 1px 0 1px black;
      padding: 9px 7px 7px 9px;
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
