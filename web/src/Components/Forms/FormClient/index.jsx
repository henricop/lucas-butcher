import React from 'react';

import { Container } from './styles';



const FormClient = ({ label, cliente, setCliente }) => {
  return (
    <Container>
      <label>{label}</label>
      <input value={cliente} onChange={() => setCliente({...cliente})}/>
    </Container>
    
  )
}

export default FormClient;