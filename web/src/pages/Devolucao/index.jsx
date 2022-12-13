import ButtonDefault from '../../layout/components/ButtonDefault';
import Input from '../../layout/components/Input';
import Finder from '../../layout/components/Finder'
import List from '../../layout/components/List';

import { Container } from './styles';

function Devolucao(){
  return(
    <Container>
      <div className='wrapper'>
        <h1>Registrar Devolução</h1>
        <div className='flex-row'>

        <section className='input-section flex-row-wrap'>
            <Input width="80%" title="ID Venda" placeholder="id da venda"/>
            <Input type="text" width="80%" height="200px" title="Descrição" placeholder="Motivo da devolução"/>
          </section>

          <div className='divisor'></div>

          <section className='input-section'>
            <Finder type="text" width="400px" title="Produto" placeholder="Código ou nome do produto"/>
            <List title="Produtos inseridos"/>
            <Input type="text" width="400px" title="Valor Total" placeholder="R$ 0,00"/>
          </section>

        </div>
        <ButtonDefault text="Registrar Devolução" width="200px" margin="50px 0px"/>
      </div>
    </Container>
  );
}

export default Devolucao;