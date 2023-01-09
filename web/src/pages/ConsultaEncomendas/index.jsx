import { Section, TemplateContent } from '../../Components/Layout';
import ButtonDefault from '../../layout/components/ButtonDefault';
import Table from '../../layout/components/Forms/Table';
import Input from '../../layout/components/Input';
import Search from '../../layout/components/Search';

import { Container } from './styles';


function ConsultaInterna(){
  const tableHead = ["Produto", "Quantidade", "Valor a pagar", "Valor pago", "Status"]

  const tableItems = [
  {"id": 1234, "name": "Cliente 01", "produto": "Picanha", "quantidade": "2kg", "valor": "46,00" , "pago": "46,00", "status": "concluido"}, 
  {"id": 4321, "name": "Funcionário 01", "produto": "Frango Congelado", "quantidade": "2.6kg","valor": "32,00",  "pago": "0,00", "status": "pendente"},
  {"id": 5342, "name": "Cliente 02", "produto": "Linguiça Suína", "quantidade": "0.700kg", "valor": "21,00", "pago": "21,00", "status": "concluido"}, 
  {"id": 5434, "name": "Cliente 04", "produto": "Lombo de Porco", "quantidade": "1.3kg", "valor": "23,00", "pago": "0,00", "status": "cancelado"},
  {"id": 4921, "name": "Funcionario 02", "produto": "Cupim", "quantidade": "1.45kg", "valor": "52,00", "pago": "20,00", "status": "pendente"}, 
  {"id": 5828, "name": "Cliente 03", "produto": "Batata Palha", "quantidade": "2 un","valor": "18,00" , "pago": "18,00", "status": "concluido"},
  ]

  return(
    <Section>
      <TemplateContent>
        <Container>
          <div className='wrapper'>
            <div className='title-container'>
              <h1>Consulta Encomendas</h1>
              <div className='buttons-container'>
                <ButtonDefault link="/Encomendas" text="Cadastrar Encomenda" width="200px" margin="0px 0px"/>
              </div>
            </div>
            <section className='input-section'>
              <Search width="700px" title="Busque por encomendas" placeholder="Digite o nome ou código do cliente, funcionário ou empresa"/>
              <Input width="300px" title="Data de Cadastro" type="date"/>
              <ButtonDefault text="Buscar" width="200px" margin="50px 0px"/>
            </section>
            <Table 
              titles={tableHead} 
              name={'name'}
              id={'id'}
              itemKeys={['produto', 'quantidade', 'valor', 'pago', 'status']} 
              cellwidth="200px" 
              items={tableItems}
            />
          </div>
        </Container>
      </TemplateContent>
    </Section>
  );
}

export default ConsultaInterna;
