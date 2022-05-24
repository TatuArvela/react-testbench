import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import ZoomLens from './ZoomLens';
import ZoomResult from './ZoomResult';

interface Props {
  alt: string;
  height: number;
  lensHeight: number;
  lensWidth: number;
  src: string;
  width: number;
  scale: number;
}

interface ImageContainerProps {
  styleHeight: number;
  styleWidth: number;
}

const ImageContainer = styled.div<ImageContainerProps>`
  align-items: center;
  display: flex;
  height: ${(props) => props.styleHeight}px;
  justify-content: center;
  position: relative;
  width: ${(props) => props.styleWidth}px;
`;

interface ImageProps {
  maxHeight: number;
  maxWidth: number;
}

const Image = styled.img<ImageProps>`
  cursor: zoom-in;
  max-height: ${(props) => props.maxHeight}px;
  max-width: ${(props) => props.maxWidth}px;
`;

const ImageZoom = ({
  alt,
  height,
  lensHeight,
  lensWidth,
  src,
  width,
  scale,
}: Props) => {
  const [imageContainer, setImageContainer] = useState<HTMLDivElement>();
  const imageContainerRef = useCallback((node: HTMLDivElement) => {
    setImageContainer(node);
  }, []);
  const imageElement = imageContainer?.firstElementChild as HTMLImageElement;

  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [offsetLeft, setOffsetLeft] = useState<number>(0);
  const [offsetTop, setOffsetTop] = useState<number>(0);

  useEffect(() => {
    const handleEnter = () => {
      setIsHovering(true);
    };

    const handleMove = (e: any) => {
      const { offsetLeft, offsetTop, clientWidth, clientHeight } =
        imageElement ?? {};

      const positionX = offsetLeft + e.offsetX - lensWidth / 2;
      const positionY = offsetTop + e.offsetY - lensHeight / 2;

      const minX = offsetLeft;
      const minY = offsetTop;
      const maxX = offsetLeft + clientWidth - lensWidth;
      const maxY = offsetTop + clientHeight - lensHeight;

      if (e.offsetX !== -1 && e.offsetY !== -1) {
        const x = Math.max(Math.min(positionX, maxX), minX);
        const y = Math.max(Math.min(positionY, maxY), minY);
        setOffsetLeft(x);
        setOffsetTop(y);
      }
    };

    const handleLeave = () => {
      setIsHovering(false);
    };

    if (imageElement) {
      imageElement.addEventListener('mouseenter', handleEnter);
      imageElement.addEventListener('mousemove', handleMove);
      imageElement.addEventListener('mouseleave', handleLeave);

      return () => {
        imageElement.removeEventListener('mouseenter', handleEnter);
        imageElement.removeEventListener('mousemove', handleMove);
        imageElement.removeEventListener('mouseleave', handleLeave);
      };
    }
  }, [imageContainer, imageElement, lensHeight, lensWidth]);

  return (
    <>
      <ImageContainer
        ref={imageContainerRef}
        styleHeight={height}
        styleWidth={width}
      >
        <Image src={src} alt={alt} maxWidth={width} maxHeight={height} />
        {isHovering && (
          <ZoomLens
            left={offsetLeft}
            top={offsetTop}
            width={lensWidth}
            height={lensHeight}
          />
        )}
      </ImageContainer>

      {isHovering && (
        <ZoomResult
          imageElement={imageElement}
          lensWidth={lensWidth}
          lensHeight={lensHeight}
          offsetLeft={offsetLeft}
          offsetTop={offsetTop}
          scale={scale}
        />
      )}
    </>
  );
};

export default ImageZoom;
