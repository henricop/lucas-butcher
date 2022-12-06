import React from 'react';
import Home_Bttn from './components/home-bttn';

// import api from '../../services/api';

import { Container, Wrapper } from './styles';


function Home(){

  return(
    <Container>
      <Wrapper>
        <Home_Bttn path="/empresas" title="Empresas"/>
        <Home_Bttn path="/vendas" title="Histórico de Vendas"/>
        <Home_Bttn path="/vendas" title="Histórico de Vendas"/>
        <Home_Bttn path="/vendas" title="Histórico de Vendas"/>
        <Home_Bttn path="/vendas" title="Histórico de Vendas"/>
        <Home_Bttn path="/vendas" title="Histórico de Vendas"/>
        <Home_Bttn path="/vendas" title="Histórico de Vendas"/>
        <Home_Bttn path="/vendas" title="Histórico de Vendas"/>
        <Home_Bttn path="/vendas" title="Histórico de Vendas"/>
        <Home_Bttn path="/vendas" title="Histórico de Vendas"/>
        <Home_Bttn path="/vendas" title="Histórico de Vendas"/>
      </Wrapper>
    </Container>
  );
}

export default Home;