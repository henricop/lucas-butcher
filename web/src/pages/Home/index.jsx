import React from 'react';
// import api from '../../services/api';
import { BsCashCoin, BsFillBookmarkStarFill, BsFillJournalBookmarkFill, BsFillPersonPlusFill, BsTrash } from 'react-icons/bs';
import { FaCashRegister, FaStoreAlt } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { GrUserWorker } from 'react-icons/gr';
import { IoIosPeople } from 'react-icons/io';
import { MdOutlineSettingsBackupRestore } from 'react-icons/md';
import { Section } from '../../Components/Layout';
import { CardItem, Container, TemplateContentStyle } from './styles';


function Home(){

  return(
    <Container>
      <Section>
        <TemplateContentStyle>
          <CardItem>
            <FaCashRegister/>
            <p>Caixa</p>
          </CardItem>
          <CardItem>
            <FaStoreAlt/>
            <p>Cadastro de Empresas</p>
          </CardItem>
          <CardItem>
            <GrUserWorker/>
            <p>Cadastro de Funcionários</p>
          </CardItem>
          <CardItem onClick={() => window?.location.assign("/cliente") }>
            <IoIosPeople/>
            <p>Cadastro de Clientes</p>
          </CardItem>
          <CardItem>
            <BsFillPersonPlusFill/>
            <p>Cadastro de Fornecedores</p>
          </CardItem>
          <CardItem>
            <BsCashCoin/>
            <p>Histórico de Vendas</p>
          </CardItem>
          <CardItem>
            <BsFillJournalBookmarkFill/>
            <p>Encomendas</p>
          </CardItem>
          <CardItem>
            <FiShoppingCart/>
            <p>Produtos</p>
          </CardItem>
          <CardItem>
            <BsFillBookmarkStarFill/>
            <p>Cadastro de promoção</p>
          </CardItem>
          <CardItem>
            <MdOutlineSettingsBackupRestore/>
            <p>Devolução</p>
          </CardItem>
          <CardItem>
            <BsTrash/>
            <p>Perda de Produto</p>
          </CardItem>
        </TemplateContentStyle>
      </Section>
    </Container>
  );
}

export default Home;