import styled from 'styled-components';

interface Props {
  imageElement: HTMLImageElement;
  lensHeight: number;
  lensWidth: number;
  offsetLeft: number;
  offsetTop: number;
  scale: number;
}

interface StyledZoomResultProps {
  positionX: number;
  positionY: number;
  scaledHeight: number;
  scaledWidth: number;
  imageSrc: string;
  zoomResultHeight: number;
  zoomResultWidth: number;
}

const StyledZoomResult = styled.div<StyledZoomResultProps>`
  background-image: url('${(props) => props.imageSrc}');
  background-position: ${(props) => props.positionX}px
    ${(props) => props.positionY}px;
  background-repeat: no-repeat;
  background-size: ${(props) => props.scaledWidth}px
    ${(props) => props.scaledHeight}px;
  border: 2px solid black;
  bottom: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  height: ${(props) => props.zoomResultHeight}px;
  left: 2px;
  pointer-events: none;
  position: fixed;
  width: ${(props) => props.zoomResultWidth}px;
`;

const ZoomResult = ({
  imageElement,
  lensWidth,
  lensHeight,
  offsetLeft,
  offsetTop,
  scale,
}: Props) => {
  const zoomResultWidth = lensWidth * scale;
  const zoomResultHeight = lensHeight * scale;

  const scaleX = zoomResultWidth / lensWidth;
  const scaleY = zoomResultHeight / lensHeight;

  const positionX = -1 * ((offsetLeft - imageElement?.offsetLeft) * scaleX);
  const positionY = -1 * ((offsetTop - imageElement?.offsetTop) * scaleY);

  const scaledWidth = imageElement.width * scaleX;
  const scaledHeight = imageElement.height * scaleY;

  return (
    <StyledZoomResult
      imageSrc={imageElement.src}
      positionX={positionX}
      positionY={positionY}
      scaledHeight={scaledHeight}
      scaledWidth={scaledWidth}
      zoomResultHeight={zoomResultHeight}
      zoomResultWidth={zoomResultWidth}
    />
  );
};

export default ZoomResult;
