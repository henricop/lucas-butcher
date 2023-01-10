import ButtonDefault from '../../layout/components/ButtonDefault';
import Input from '../../layout/components/Input';
import InputSelect from '../../layout/components/InputSelect';
import UploadButton from '../../layout/components/UploadButton';

import GoBack from '../../Components/Buttons/GoBack';
import { Section, TemplateContent } from '../../Components/Layout';
import { Container } from './styles';


function CadastroProdutos() {
  const categorias = [{ "id": 1, "name": "Carne Vermelha" }, { "id": 2, "name": "Carne Branca" }, { "id": 3, "name": "Embutidos" }]
  const medidas = [{ "id": 1, "name": "KG" }, { "id": 2, "name": "UN" }]

  return (
    <Section>
      <TemplateContent>
        <Container>
          <div className='wrapper'>
            <GoBack />
            <h1>Cadastro de Produtos</h1>
            <section className='input-section'>
              <Input type="text" width="540px" title="Nome" placeholder="Nome completo do cliente" />
              <Input type="text" width="540px" title="Tipo" placeholder="Fabricado" />
            </section>

            <section className='input-section'>
              <InputSelect width="210px" title="Medida de peso" name="medida de peso" id="medida" options={medidas} />
              <Input type="text" width="540px" title="Preço de Venda" placeholder="R$ 0,00" />
              <InputSelect width="210px" title="Categoria" name="categoria" id="categoria" options={categorias} />
              <Input type="text" width="380px" title="Estoque Mínimo" />
              <Input type="text" width="210px" title="Estoque Máximo" />
              <Input type="text" width="540px" title="Estoque de Re-suprimento" />
              <UploadButton title="Carregar Imagem" accept="image/*" />;
            </section>
            <ButtonDefault text="Cadastrar Produto" width="200px" margin="50px 0px" />
          </div>
        </Container>
      </TemplateContent>
    </Section>
  );
}

export default CadastroProdutos;