import ButtonDefault from '../../layout/components/ButtonDefault';
import Finder from '../../layout/components/Finder';
import List from '../../layout/components/Forms/List';
import Input from '../../layout/components/Input';

import GoBack from '../../Components/Buttons/GoBack';
import { Section, TemplateContent } from '../../Components/Layout';
import { Container } from './styles';

function Devolucao() {
  return (
    <Section>
      <TemplateContent>
        <Container>
          <div className='wrapper'>
            <GoBack />

            <h1>Registrar Devolução</h1>
            <div className='flex-row'>

              <section className='input-section flex-row-wrap'>
                <Input width="80%" title="ID Venda" placeholder="id da venda" />
                <Input type="text" width="80%" height="200px" title="Descrição" placeholder="Motivo da devolução" />
              </section>

              <div className='divisor'></div>

              <section className='input-section'>
                <Finder type="text" width="100%" title="Produto" placeholder="Código ou nome do produto" />
                <List width="500px" title="Produtos inseridos" />
                <Input type="text" width="100%" title="Valor Total" placeholder="R$ 0,00" />
              </section>
            </div>
            <ButtonDefault text="Registrar Devolução" width="200px" margin="50px 0px" />
          </div>
        </Container>
      </TemplateContent>
    </Section>
  );
}

export default Devolucao;