import React from 'react';
import styled from 'styled-components';

import { Image } from './types';

interface Props {
  images?: Image[];
}

const IMAGE_BASE_URL = 'http://localhost:3001/';

const MasonryLayout = styled.div`
  column-count: 4;
  padding: 12px;

  @media (max-width: 1200px) {
    column-count: 3;
  }

  @media (max-width: 900px) {
    column-count: 2;
  }

  @media (max-width: 600px) {
    column-count: 1;
  }
`;

const MasonryBlock = styled.div`
  border: 2px solid black;
  background: white;
  break-inside: avoid-column;
  page-break-inside: avoid;
  padding: 6px;
  margin-bottom: 12px;
`;

const BlockImage = styled.img`
  border: 2px solid black;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const BlockTitle = styled.h4`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 4px 0;
`;

const ImageMasonry = ({ images }: Props) => {
  return (
    <MasonryLayout>
      {images?.map((image) => (
        <MasonryBlock key={image.url}>
          <BlockImage alt={image.title} src={`${IMAGE_BASE_URL}${image.url}`} />
          <BlockTitle>{image.title}</BlockTitle>
        </MasonryBlock>
      ))}
    </MasonryLayout>
  );
};

export default ImageMasonry;
