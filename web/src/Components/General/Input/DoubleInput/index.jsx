import React from 'react';
import { Container } from './styles';


const DoubleInput = ({ placeholder, placeholder2, type }) => {

  return (
    <Container>
      <section>
        <input type={type} placeholder={placeholder} />
        <div>
          <input type={type} placeholder={placeholder2} />
        </div>
      </section>
    </Container>
  )

};

export default DoubleInput;