import ButtonDefault from '../../layout/components/ButtonDefault';
import UploadButton from '../../layout/components/UploadButton';
import Input from '../../layout/components/Input';

import { Container } from './styles';


function CadastroProdutos(){
  return(
    <Container>
      <div className='wrapper'>
        <h1>Cadastro de Produtos</h1>
        <section className='input-section'>
          <Input type="text" width="540px" title="Nome" placeholder="Nome completo do cliente"/>
          <Input type="text" width="540px" title="Tipo" placeholder="Fabricado"/>
        </section>

        <section className='input-section'>
          <Input width="362px" title="Medida" placeholder="kg"/>
          <Input type="text" width="540px" title="Preço de Venda" placeholder="R$ 0,00"/>
          <Input type="text" width="210px" title="Categoria" placeholder="Carne"/>
          <Input type="text" width="380px" title="Estoque Mínimo"/>
          <Input type="text" width="210px" title="Estoque Máximo"/>
          <Input type="text" width="540px" title="Estoque de Re-suprimento"/>
          <UploadButton title="Carregar Imagem" accept="image/*"/>;
        </section>
        <ButtonDefault text="Cadastrar Produto" width="200px" margin="50px 0px"/>
      </div>
    </Container>
  );
}

export default CadastroProdutos;