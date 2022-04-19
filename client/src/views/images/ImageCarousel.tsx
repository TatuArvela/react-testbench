import React, { useState } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  images?: string[];
}

const imageBaseUrl = 'http://localhost:3001/';
const carouselPadding = 32;

const StyledImageCarousel = styled.div`
  background: white;
  border: 2px solid #3a3a3a;
  padding: ${carouselPadding}px;
  position: relative;
`;

const ImageContainer = styled.div`
  border: 2px solid black;
  background: black;

  img {
    width: 500px;
    height: 500px;
    object-fit: contain;
  }
`;

const buttonStyle = css`
  position: absolute;
  top: 0;
  bottom: 0;
  width: ${carouselPadding}px;
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
  const selectImage = (imageToSelect: string) => {
    const index = images.findIndex((image) => image === imageToSelect);
    if (index !== -1) {
      setCurrentImage(index);
    }
  };

  const imageUrl = `${imageBaseUrl}${images[currentImage]}`;
  const imageAlt = 'Cute animal!';

  return (
    <StyledImageCarousel>
      <PreviousButton onClick={showPreviousImage} />
      <ImageContainer>
        <img src={imageUrl} alt={imageAlt} />
      </ImageContainer>
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
