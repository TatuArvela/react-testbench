import React from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactChildren;
  left: number;
  top: number;
  width: number;
  height: number;
}

type StyledZoomLensProps = Omit<Props, 'children'>;

const StyledZoomLens = styled.div<StyledZoomLensProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  pointer-events: none;
  background: rgba(255, 255, 255, 0.25);

  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

const ZoomLens = ({ children, height, width, left, top }: Props) => {
  return (
    <StyledZoomLens height={height} left={left} top={top} width={width}>
      {children}
    </StyledZoomLens>
  );
};

export default ZoomLens;
