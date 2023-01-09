import React from 'react';
import InputGeneral from '../../Components/General/Input/InputGeneral';
import ListaItems from '../../Components/List/ListaItems';
// import api from '../../services/api';
import GoBack from '../../Components/Buttons/GoBack';
import InputWithButton from '../../Components/General/Input/InputWithButton';
import { Section, TemplateContent } from '../../Components/Layout';
import { Container, TemplateContentSection, TemplateContentSectionFinal, TemplateContentStyle } from './styles';


const Promocoes = () => {


  return (
    <Container>
      <Section>
        <TemplateContentStyle>
          <GoBack />
          <h1>Cadastrar Promoção</h1>
          <section>
            <div>
              <input type="radio" id="produto" name="drone" value="produto"
                checked />
              <label for="produto">Produto</label>
            </div>
            <div>
              <input type="radio" id="categoria" name="drone" value="categoria"
              />
              <label for="categoria">Categoria</label>
            </div>
          </section>
        </TemplateContentStyle>
      </Section>
      <Section noPaddingTop >
        <TemplateContentSection>
          <div>
            <InputGeneral text="Início da Promoção" placeholder="dd/mm/yyyy" type="date" refName="initial-date" />
            <InputGeneral text="Término da Promoção" placeholder="dd/mm/yyyy" type="date" refName="final-date" />
            <InputGeneral text="Desconto" placeholder="0.00%" type="number" refName="desconto" />
          </div>
        </TemplateContentSection>
      </Section>
      <Section noPaddingTop >
        <TemplateContent>
          <hr style={{
            background: "rgba(0, 0, 0, 0.5)",
            height: "1px",
            margin: "0 auto",
            width: "70%"
          }}></hr>
        </TemplateContent>
      </Section>
      <Section noPaddingTop >
        <TemplateContentSectionFinal>
          <InputWithButton text="Produto" placeholder="Código ou nome do Produto" type="text" refName="produto" />
          <ListaItems />
        </TemplateContentSectionFinal>
      </Section>

    </Container >
  );
}

export default Promocoes;
