import React from 'react';
import HomeBttn from './components/HomeBttn';

// import api from '../../services/api';

import { Container, Wrapper } from './styles';


function Home(){

  return(
    <Container>
      <Wrapper>
        <HomeBttn path="/empresas" title="Empresas"/>
        <HomeBttn path="/clientes" title="Cadastro de clientes"/>
        <HomeBttn path="/funcionarios" title="Cadastro de funcionarios"/>
        <HomeBttn path="/fornecedores" title="Cadastro de fornecedores"/>
        <HomeBttn path="/encomendas" title="Cadastro de encomendas"/>
        <HomeBttn path="/vendas" title="Histórico de Vendas"/>
        <HomeBttn path="/vendas" title="Histórico de Vendas"/>
        <HomeBttn path="/vendas" title="Histórico de Vendas"/>
        <HomeBttn path="/vendas" title="Histórico de Vendas"/>
        <HomeBttn path="/vendas" title="Histórico de Vendas"/>
        <HomeBttn path="/vendas" title="Histórico de Vendas"/>
      </Wrapper>
    </Container>
  );
}

export default Home;