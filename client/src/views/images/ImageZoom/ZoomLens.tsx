import React, { CSSProperties } from 'react';
import styled from 'styled-components';

interface Props {
  children?: React.ReactChildren;
  left: number;
  top: number;
  width: number;
  height: number;
}

type StyledZoomLensProps = {
  width: number;
  height: number;
};

const StyledZoomLens = styled.div<StyledZoomLensProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  pointer-events: none;
  background: rgba(255, 255, 255, 0.25);

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

const ZoomLens = ({ children, height, width, left, top }: Props) => {
  const style: CSSProperties = {
    left: `${left}px`,
    top: `${top}px`,
  };

  return (
    <StyledZoomLens height={height} width={width} style={style}>
      {children}
    </StyledZoomLens>
  );
};

export default ZoomLens;
