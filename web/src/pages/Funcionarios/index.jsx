import ButtonDefault from '../../layout/components/ButtonDefault';
import Input from '../../layout/components/Input';
import InputSelect from '../../layout/components/InputSelect';

import { Container } from './styles';


function Funcionarios(){
  const options = [{"id": 1, "name": "Administrador"}, {"id": 2, "name": "Funcionario"}];

  return(
    <Container>
      <div className='wrapper'>
        <h1>Cadastro de Funcionarios</h1>
        <section className='input-section'>
          <Input type="text" width="540px" title="Nome Completo" placeholder="Nome completo do cliente"/>
          <p className='breaker'/>
          <Input type="text" width="380px" title="CPF" placeholder="CPF"/>
          <Input type="email" width="380px" title="Email" placeholder="johndoe@example.com"/>
          <Input type="text" width="380px" title="Telefone" placeholder="(xx) xxxx-xxxx"/>
          <InputSelect width="380px" title="Nivel" name="nivel" id="nivel" options={options}/>
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
        <ButtonDefault text="Registrar Funcionário" width="200px" margin="50px 0px"/>
      </div>
    </Container>
  );
}

export default Funcionarios;
