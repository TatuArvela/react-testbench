import { useState } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  images?: string[];
}

const imageBaseUrl = 'http://localhost:3001/';

const StyledImageCarousel = styled.div`
  background: black;
  position: relative;

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
  width: 60px;
  font-size: 36px;
  color: white;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  border: none;
  opacity: 0.1;
  transition: opacity 0.5s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const PreviousButton = styled.button`
  ${buttonStyle};
  left: 0;
`;

const NextButton = styled.button`
  ${buttonStyle};
  right: 0;
`;

const Dots = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface DotProps {
  isCurrent: boolean;
}

const Dot = styled.button<DotProps>`
  cursor: pointer;
  width: 20px;
  height: 20px;
  background: ${(props) => (props.isCurrent ? 'white' : 'gray')};
  border: none;
  border-radius: 50%;
  margin: 0 10px;
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

  return (
    <StyledImageCarousel>
      <PreviousButton onClick={showPreviousImage}>◀</PreviousButton>
      <img src={imageUrl} alt="Cute animal" />
      <NextButton onClick={showNextImage}>▶</NextButton>
      <Dots>
        {images.map((image, index) => (
          <Dot
            onClick={() => selectImage(image)}
            isCurrent={index === currentImage}
          />
        ))}
      </Dots>
    </StyledImageCarousel>
  );
};

export default ImageCarousel;
