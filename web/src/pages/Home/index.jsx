import React, { useState } from 'react';

// import api from '../../services/api';

import { BsCashCoin, BsFillBookmarkStarFill, BsFillJournalBookmarkFill, BsFillPersonPlusFill, BsPersonLinesFill, BsTrash } from 'react-icons/bs';
import { FaCashRegister, FaStoreAlt } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { GrUserWorker } from 'react-icons/gr';
import { IoIosPeople } from 'react-icons/io';
import { MdOutlineSettingsBackupRestore } from 'react-icons/md';
import Modal from 'react-modal';
import ModalForm from '../../Components/Forms/ModalForm';
import { Section } from '../../Components/Layout';
import { CardItem, Container, TemplateContentStyle } from './styles';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: "#D9D9D9"
  },
};

// Modal.setAppElement('#caixa');


function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [valor, setValor] = useState(100);
  let subtitle;

  function openModal() {
    setModalIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setModalIsOpen(false);
  }


  return (
    <Container>
      <Section>
          <TemplateContentStyle>
            <CardItem id="caixa" onClick={() => openModal()}>
              <FaCashRegister />
              <p>Caixa</p>
            </CardItem>
            <CardItem onClick={() => window?.location.assign("/empresas")}>
              <FaStoreAlt />
              <p>Cadastro de Empresas</p>
            </CardItem>
            <CardItem onClick={() => window?.location.assign("/funcionarios")}>
              <GrUserWorker />
              <p>Cadastro de Funcionários</p>
            </CardItem>
            <CardItem onClick={() => window?.location.assign("/clientes")}>
              <IoIosPeople />
              <p>Cadastro de Clientes</p>
            </CardItem>
            <CardItem onClick={() => window?.location.assign("/fornecedores")}>
              <BsFillPersonPlusFill />
              <p>Cadastro de Fornecedores</p>
            </CardItem>
            <CardItem onClick={() => window?.location.assign("/consulta-interna")}>
              <BsPersonLinesFill />
              <p>Consulta Interna</p>
            </CardItem>
            <CardItem onClick={() => window?.location.assign("/historico-vendas")}>
              <BsCashCoin />
              <p>Histórico de Vendas</p>
            </CardItem>
            <CardItem onClick={() => window?.location.assign("/consulta-encomendas")}>
              <BsFillJournalBookmarkFill />
              <p>Encomendas</p>
            </CardItem>
            <CardItem onClick={() => window?.location.assign("/cadastro-produtos")}>
              <FiShoppingCart />
              <p>Produtos</p>
            </CardItem>
            <CardItem onClick={() => window?.location.assign("/promocoes")}>
              <BsFillBookmarkStarFill />
              <p>Cadastro de promoção</p>
            </CardItem>
            <CardItem onClick={() => window?.location.assign("/devolucao")}>
              <MdOutlineSettingsBackupRestore />
              <p>Devolução</p>
            </CardItem>
            <CardItem onClick={() => window?.location.assign("/historico-perdas")}>
              <BsTrash />
              <p>Perda de Produto</p>
            </CardItem>
          </TemplateContentStyle>
      </Section>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalForm valor={valor} setValor={setValor} closeModal={closeModal} />
      </Modal>
    </Container>
  )
};

export default Home;
