import ButtonDefault from '../../layout/components/ButtonDefault';
import Finder from '../../layout/components/Finder';
import List from '../../layout/components/Forms/List';
import Input from '../../layout/components/Input';

import GoBack from '../../Components/Buttons/GoBack';
import { Section, TemplateContent } from '../../Components/Layout';
import { Container } from './styles';


function Lote() {
  return (
    <Section>
      <TemplateContent>
        <Container>
          <div className='wrapper'>
            <GoBack />
            <h1>Cadastro de Lotes</h1>
            <section className='input-section'>
              <Finder type="text" title="Produto" width="400px" placeholder="Código ou nome do produto" />
              <Input type="text" width="200px" title="Preço" placeholder="R$ 0,00" />
              <Input type="text" width="200px" title="Quantidade" placeholder="0,00 KG" />
              <Input type="text" width="380px" title="Número do Lote" placeholder="Número do Lote" />
              <Input type="date" width="380px" title="Data de produção" />
              <Input type="date" width="380px" title="Data de validade" />
              <Input type="text" width="380px" title="Fornecedor" placeholder="Fornecedor" />
            </section>

            <div className='divisor'></div>

            <section className='input-section'>
              <List title="Produtos inseridos" />
              <p className='breaker' />
              <Input type="text" width="200px" title="Valor Total" placeholder="R$ 0,00" />
            </section>
            <ButtonDefault text="Registrar Lote" width="200px" margin="50px 0px" />
          </div>
        </Container>
      </TemplateContent>
    </Section>
  );
}

export default Lote;
