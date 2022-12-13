import React from 'react';

import { Container } from './styles';


const InputGeneral = ({ text, placeholder, type, refName }) => {




  return (
    <Container>
      <label for={refName}>{text}</label>
      <input id={refName} type={type} placeholder={placeholder} />
    </Container>
  )

};

export default InputGeneral;