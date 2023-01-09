import { Section, TemplateContent } from '../../Components/Layout';
import ButtonDefault from '../../layout/components/ButtonDefault';
import Input from '../../layout/components/Input';

import { Container } from './styles';


function Clientes(){
  return(
    <Section>
      <TemplateContent>
          <Container>
          <div className='wrapper'>
            <h1>Cadastro de Clientes</h1>
            <section className='input-section'>
              <Input type="text" width="540px" title="Nome Completo" placeholder="Nome completo do cliente"/>
              <p className='breaker'/>
              <Input type="text" width="380px" title="CPF/CNPJ" placeholder="CPF/CNPJ"/>
              <Input type="email" width="380px" title="Email" placeholder="johndoe@example.com"/>
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
            <ButtonDefault text="Registrar Cliente" width="200px" margin="50px 0px"/>
          </div>
          </Container>
      </TemplateContent>
    </Section>
  );
}

export default Clientes;
