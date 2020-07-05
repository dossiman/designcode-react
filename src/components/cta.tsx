import styled from 'styled-components';
import { InputBase } from '@material-ui/core';
import React, { FC } from 'react';
import RoundedButton from './rounded-button';

const CTAGroup = styled.div`
  background-color: white;
  border-radius: 30px;
  display: flex;
  padding: 8px;
  > * {
    margin-left: 8px;
  }
  > :first-child {
    flex-grow: 1;
  }
`;

const CTA: FC = () => {
  const handleSubmit = (): void => {
    console.log('submit email');
  };

  return (
    <CTAGroup>
      <InputBase
        margin="dense"
        type="email"
        id="email"
        name="email"
        placeholder="name@email.com"
      />
      <RoundedButton onClick={handleSubmit}>NOTIFY ME</RoundedButton>
    </CTAGroup>
  );
};

export default CTA;
