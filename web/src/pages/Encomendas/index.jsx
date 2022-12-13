import ButtonDefault from '../../layout/components/ButtonDefault';
import Input from '../../layout/components/Input';
import Finder from '../../layout/components/Finder'
import List from '../../layout/components/Forms/List';

import { Container } from './styles';



function Encomendas(){
  return(
    <Container>
      <div className='wrapper'>
        <h1>Cadastro de Encomendas</h1>
        <div className='flex-row'>
          <section className='input-section'>
            <Finder type="text" width="400px" title="Produto" placeholder="Código ou nome do produto"/>
            <List title="Produtos inseridos"/>
            <Input type="text" width="400px" title="Valor Total" placeholder="R$ 0,00"/>
          </section>

          <div className='divisor'></div>

          <section className='input-section flex-row-wrap'>
            <Input width="362px" title="CEP" placeholder="CEP"/>
            <p className='breaker'/>
            <Input type="text" width="100%" title="Logradouro" placeholder="Logradouro"/>
            <Input type="text" width="130px" title="Número" placeholder="Número"/>
            <Input type="text" width="380px" title="Complemento" placeholder="Complemento"/>
            <Input type="text" width="100%" title="Bairro" placeholder="Bairro"/>
            <Input type="text" width="130px" title="Estado" placeholder="Estado"/>
            <Input type="text" width="380px" title="Cidade" placeholder="Cidade"/>
          </section>
        </div>
        <ButtonDefault text="Registrar Encomenda" width="200px" margin="50px 0px"/>
      </div>
    </Container>
  );
}

export default Encomendas;
