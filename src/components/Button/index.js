import React from 'react';
import { ButtonContainer } from './styles';

function Button({ onClick }) {
  return (
    <ButtonContainer onClick={onClick}>
      <h4>Buscar</h4>
    </ButtonContainer>
  );
}

export default Button;