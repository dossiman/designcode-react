import React, { FC } from 'react';
import styled from 'styled-components';

const CellGroup = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  grid-gap: 25px;
  align-items: center;
`;

const CellImage = styled.div<{ image: string }>`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  background: black url(${({ image }) => image});
  background-size: 60px;
`;

const CellTitle = styled.div`
  font-size: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 30px 0;
`;

const Cell: FC<{
  image: string;
  title: string;
}> = ({ image, title }) => (
  <CellGroup>
    <CellImage image={image} />
    <CellTitle>{title}</CellTitle>
  </CellGroup>
);

export default Cell;
