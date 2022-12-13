import React from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { Container } from './styles';


const InputWithButton = ({ text, placeholder, type, refName }) => {




  return (
    <Container>
      <label for={refName}>{text}</label>
      <section>
        <input id={refName} type={type} placeholder={placeholder} />
        <div>
          <BsPlusLg />
        </div>
      </section>
    </Container>
  )

};

export default InputWithButton;