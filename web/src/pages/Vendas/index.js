import React, { useEffect } from 'react';
import api from '../../services/api';

import { Container } from './styles';


function Vendas(){

  useEffect(() => {
    api.get("/vendas")
    .then(res => console.log(res.data) )
    .catch(err => console.log("Error: ", err))
  },[])


  return(
    <Container>
    </Container>
  );
}

export default Vendas;
