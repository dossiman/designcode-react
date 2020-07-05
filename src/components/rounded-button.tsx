import styled from 'styled-components';
import { Button } from '@material-ui/core';
import React, { FC } from 'react';

const RoundButton = styled(Button)`
  border-radius: 24px;
`;

const RoundedButton: FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <RoundButton variant="contained" color="primary" onClick={onClick}>
      NOTIFY ME
    </RoundButton>
  );
};

export default RoundedButton;
