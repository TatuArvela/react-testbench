import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import ImageZoom from './ImageZoom/ImageZoom';
import { Image } from './types';

interface Props {
  images?: Image[];
}

const ZOOM_SCALE = 4;
const LENS_WIDTH = 100;
const LENS_HEIGHT = 80;
const IMAGE_BASE_URL = 'http://localhost:3001/';
const CAROUSEL_PADDING = 32;

const StyledImageCarousel = styled.div`
  background: white;
  border: 2px solid #3a3a3a;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  padding: ${CAROUSEL_PADDING}px;
  position: relative;
`;

const ImageBox = styled.div`
  border: 2px solid black;
  background: black;
`;

const buttonStyle = css`
  position: absolute;
  top: 0;
  bottom: 0;
  width: ${CAROUSEL_PADDING}px;
  font-size: 42px;
  color: black;
  height: 100%;
  border: none;
  opacity: 0.2;
  transition: opacity 0.25s, background-color 0.25s;
  cursor: pointer;

  &:hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.2);
  }
`;

const PreviousButton = styled.button`
  ${buttonStyle};
  left: 0;
  &:before {
    content: '‹';
  }
`;

const NextButton = styled.button`
  ${buttonStyle};
  right: 0;
  &:before {
    content: '›';
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
`;

const Dots = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

interface DotProps {
  isCurrent: boolean;
}

const Dot = styled.button<DotProps>`
  cursor: pointer;
  width: 20px;
  height: 20px;
  background: ${(props) => (props.isCurrent ? '#000000' : '#dddddd')};
  border: none;
  border-radius: 50%;
`;

const Title = styled.h2`
  margin: 0;
  text-align: center;
`;

const ImageCarousel = ({ images }: Props) => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  if (!images || images.length === 0) {
    return null;
  }

  const lastImage = images.length - 1;
  const showPreviousImage = () => {
    if (currentImage === 0) {
      setCurrentImage(lastImage);
    } else {
      setCurrentImage((current) => current - 1);
    }
  };
  const showNextImage = () => {
    if (currentImage === lastImage) {
      setCurrentImage(0);
    } else {
      setCurrentImage((current) => current + 1);
    }
  };
  const selectImage = (imageToSelect: Image) => {
    const index = images.findIndex((image) => image === imageToSelect);
    if (index !== -1) {
      setCurrentImage(index);
    }
  };

  const imageUrl = `${IMAGE_BASE_URL}${images[currentImage].url}`;
  const imageAlt = images[currentImage].title;

  return (
    <StyledImageCarousel>
      <PreviousButton onClick={showPreviousImage} />
      <ImageBox>
        <ImageZoom
          alt={imageAlt}
          height={500}
          lensHeight={LENS_HEIGHT}
          lensWidth={LENS_WIDTH}
          src={imageUrl}
          width={500}
          scale={ZOOM_SCALE}
        />
      </ImageBox>
      <NextButton onClick={showNextImage} />
      <Bottom>
        <Dots>
          {images.map((image, index) => (
            <Dot
              onClick={() => selectImage(image)}
              isCurrent={index === currentImage}
            />
          ))}
        </Dots>
        <Title>{imageAlt}</Title>
      </Bottom>
    </StyledImageCarousel>
  );
};

export default ImageCarousel;
