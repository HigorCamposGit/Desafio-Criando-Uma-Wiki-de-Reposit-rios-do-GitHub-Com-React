import React from 'react';
import { InputContainer } from './styles';

function Input({ value, onChange }) {
  return (
    <InputContainer>
      <input 
        value={value} 
        onChange={onChange} 
        placeholder="Como pesquisar!! ex: HigorCamposGit/desafio-angular-quiz-superpoderes" 
      />
    </InputContainer>
  );
}

export default Input;