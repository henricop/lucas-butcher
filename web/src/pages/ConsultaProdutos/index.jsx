import GoBack from '../../Components/Buttons/GoBack';
import { Section, TemplateContent } from '../../Components/Layout';
import ButtonDefault from '../../layout/components/ButtonDefault';
import UserList from '../../layout/components/Forms/Table';
import InputSelect from '../../layout/components/InputSelect';
import Search from '../../layout/components/Search';

import { Container } from './styles';


function ConsultaInterna() {
  const tableHead = ["Tipo", "Unidade", "Preço de Venda", "Estoque", "Estoque Min", "Estoque Máx", "Estoque Re-sup"]

  const tableItems = [
    {
      "id": 1,
      "nome": "Picanha",
      "imagem": "images/picanha.png",
      "categoria": "Revenda",
      "preco_de_venda": 60,
      "medida_de_unidade": "kg",
      "estoque_minimo": 80,
      "estoque_maximo": 200,
      "quantidade": 90,
      "estoque_de_resuprimento": 100
    },
    {
      "id": 2,
      "nome": "Frango",
      "imagem": "images/frango.png",
      "categoria": "Revenda",
      "preco_de_venda": 26,
      "medida_de_unidade": "kg",
      "estoque_minimo": 60,
      "estoque_maximo": 180,
      "quantidade": 330,
      "estoque_de_resuprimento": 80
    },
    {
      "id": 3,
      "nome": "Costela de Porco",
      "imagem": "images/costela.png",
      "categoria": "Revenda",
      "preco_de_venda": 30,
      "medida_de_unidade": "kg",
      "estoque_minimo": 70,
      "quantidade": 120,
      "estoque_maximo": 100,
      "estoque_de_resuprimento": 50
    },
    {
      "id": 4,
      "nome": "Linguiça de Porco",
      "imagem": "images/linguica_porco.png",
      "categoria": "Fabricado",
      "preco_de_venda": 35,
      "medida_de_unidade": "kg",
      "estoque_minimo": 80,
      "quantidade": 20,
      "estoque_maximo": 200,
      "estoque_de_resuprimento": 110
    },
    {
      "id": 5,
      "nome": "Linguiça de Frango",
      "imagem": "images/linguica_frango.png",
      "categoria": "Revenda",
      "preco_de_venda": 35,
      "medida_de_unidade": "kg",
      "estoque_minimo": 80,
      "estoque_maximo": 200,
      "quantidade": 30,
      "estoque_de_resuprimento": 110
    },
    {
      "id": 6,
      "nome": "Cupim",
      "imagem": "images/cupim.png",
      "categoria": "Revenda",
      "preco_de_venda": 40,
      "medida_de_unidade": "kg",
      "estoque_minimo": 70,
      "estoque_maximo": 170,
      "quantidade": 80,
      "estoque_de_resuprimento": 80
    }
  ]

  const options = [{ "id": 1, "name": "Carne Vermelha" }, { "id": 2, "name": "Embutidos" }, { "id": 3, "name": "Congelados" }]

  return (
    <Section>
      <TemplateContent>
        <Container>
          <div className='wrapper'>
            <GoBack />
            <div className='title-container'>
              <h1>Consulta Interna</h1>
              <div className='buttons-container'>
                <ButtonDefault text="Cadastrar produto" width="200px" margin="0px 0px" />
                <ButtonDefault text="Nova Compra" width="200px" margin="0px 0px" />
              </div>
            </div>
            <section className='input-section'>
              <Search width="700px" title="Nome do produto" placeholder="Digite o nome ou código do produto" />
              <InputSelect width="200px" title="Categoria" name="categoria" id="categoria" options={options} />
              <ButtonDefault text="Buscar" width="200px" margin="50px 0px" />
            </section>
            <UserList titles={tableHead}
              name={'nome'}
              id={'id'}
              itemKeys={['categoria', 'medida_de_unidade', 'preco_de_venda', 'quantidade', 'estoque_minimo', 'estoque_maximo', 'estoque_de_resuprimento']}
              cellwidth="180px"
              items={tableItems} />
          </div>
        </Container>
      </TemplateContent>
    </Section>
  );
}

export default ConsultaInterna;
