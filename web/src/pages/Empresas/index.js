import React, { useEffect } from 'react';
import ButtonDefault from '../../layout/components/ButtonDefault';
import Input from '../../layout/components/Input';
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
      <div className='wrapper'>
        <h1>Cadastro de Empresas</h1>
        <section className='input-section'>
          <Input type="text" width="380px" title="Nome Fantasia" placeholder="Nome Fantasia da Empresa"/>
          <Input type="text" width="380px" title="Fundação" placeholder="Nome da Fundação"/>
          <Input type="text" width="380px" title="Atividade Econômica" placeholder="Atividade Econômica"/>
          <Input type="text" width="380px" title="CNPJ" placeholder="CNPJ"/>
          <Input type="text" width="380px" title="Email" placeholder="johndoe@example.com"/>
          <Input type="text" width="380px" title="Telefone" placeholder="(xx) xxxx-xxxx"/>
        </section>

        <div className='divisor'></div>

        <section className='input-section'>
          <Input width="362px" title="CEP" placeholder="CEP"/>
          <p className='breaker'/>
          <Input type="text" width="540px" title="Logradouro" placeholder="Logradouro"/>
          <Input type="text" width="210px" title="Número" placeholder="Número"/>
          <Input type="text" width="380px" title="Complemento" placeholder="Complemento"/>
          <Input type="text" width="210px" title="Estado" placeholder="Estado"/>
          <Input type="text" width="540px" title="Cidade" placeholder="Cidade"/>
          <Input type="text" width="380px" title="Bairro" placeholder="Bairro"/>
        </section>
        <ButtonDefault text="Registrar Empresa" width="200px" margin="50px 0px"/>
      </div>
    </Container>
  );
}

export default Vendas;
