import React from 'react';

import { Container } from './styles';


const InputGeneral = ({ text, placeholder, type, refName }) => {
  return (
    <Container>
      {refName? (<label htmlFor={refName}>{text}</label>) : (null)}
      <input id={refName} type={type} placeholder={placeholder} />
    </Container>
  )

};

export default InputGeneral;