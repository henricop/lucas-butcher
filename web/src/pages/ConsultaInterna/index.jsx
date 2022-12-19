import { Section, TemplateContent } from '../../Components/Layout';
import ButtonDefault from '../../layout/components/ButtonDefault';
import UserList from '../../layout/components/Forms/Table';
import InputSelect from '../../layout/components/InputSelect';
import Search from '../../layout/components/Search';

import { Container } from './styles';


function ConsultaInterna(){
  const tableHead = ["Tipo", "email", "CPF/CNPJ", "Telefone", "Data de Cadastro"]

  const tableItems = [
  {"id": 1234, "name": "Usuario 01", "type": "Cliente", "email": "example@example.com", "cpf": "120.123.123-45", "phone": "(xx) xxxx-xxxx", "register_date": "00/00/0000"}, 
  {"id": 4321, "name": "Funcionário 01", "type": "Funcionario", "email": "example@example.com", "cpf": "321.321.321-12", "phone": "(xx) xxxx-xxxx", "register_date": "00/00/0000"},
  {"id": 5342, "name": "Usuario 01", "type": "Cliente", "email": "example@example.com", "cpf": "120.123.123-45", "phone": "(xx) xxxx-xxxx", "register_date": "00/00/0000"}, 
  {"id": 5434, "name": "Empresa 01", "type": "Empresa", "email": "example@example.com", "cpf": "321.321.321-12", "phone": "(xx) xxxx-xxxx", "register_date": "00/00/0000"},
  {"id": 4921, "name": "Empresa 02", "type": "Empresa", "email": "example@example.com", "cpf": "120.123.123-45", "phone": "(xx) xxxx-xxxx", "register_date": "00/00/0000"}, 
  {"id": 5828, "name": "Funcionário 02", "type": "Funcionario", "email": "example@example.com", "cpf": "321.321.321-12", "phone": "(xx) xxxx-xxxx", "register_date": "00/00/0000"},
  ]

  const options = [{"id": 1, "name": "Cliente"},{"id": 2, "name": "Funcionário"}, {"id": 3, "name": "Empresa"}]

  return(
    <Section>
      <TemplateContent>
        <Container>
          <div className='wrapper'>
            <h1>Consulta Interna</h1>
            <section className='input-section'>
              <Search width="700px" title="Busque por pessoas ou empresas" placeholder="Digite o nome ou código do cliente, funcionário ou empresa"/>
              <InputSelect width="200px" title="Tipo" name="tipo" id="tipo" options={options}/>
              <ButtonDefault text="Buscar" width="200px" margin="50px 0px"/>
            </section>
            <UserList titles={tableHead} 
            name={'name'}
            id={'id'}
            itemKeys={['type', 'email', 'cpf', 'phone', 'register_date']} 
            cellwidth="200px" 
            items={tableItems}/>
          </div>
        </Container>
      </TemplateContent>
    </Section>
  );
}

export default ConsultaInterna;
