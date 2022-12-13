import React, { useEffect } from 'react';
import { Section, TemplateContent } from '../../Components/Layout';
import ButtonDefault from '../../layout/components/ButtonDefault/ButtonDefault';
import Input from '../../layout/components/Input';

import { Container } from './styles';


function Fornecedores(){
  return(
    <Section>
      <TemplateContent>
        <Container>
          <div className='wrapper'>
            <h1>Cadastro de Fornecedores</h1>
            <section className='input-section'>
              <Input type="text" width="540px" title="Nome" placeholder="Nome do Fornecedor"/>
              <p className='breaker'/>
              <Input type="text" width="380px" title="CNPJ" placeholder="CNPJ"/>
              <Input type="text" width="380px" title="Inscrição Estadual" placeholder="Inscrição Estadual"/>
              <Input type="email" width="380px" title="Email" placeholder="johndoe@example.com"/>
              <Input type="text" width="380px" title="Telefone" placeholder="(xx) xxxx-xxxx"/>
            </section>

            <div className='divisor'></div>

            <section className='input-section'>
              <p className='breaker'/>
            </section>
            <ButtonDefault text="Registrar Fornecedor" width="200px" margin="50px 0px"/>
          </div>
        </Container>
      </TemplateContent>
    </Section>
  );
}

export default Fornecedores;
