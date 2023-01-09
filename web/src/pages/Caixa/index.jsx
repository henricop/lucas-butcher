import React from 'react';
import TableList from '../../Components/List/TableList';
// import api from '../../services/api';
import { useState } from 'react';
import Modal from 'react-modal';
import GoBack from '../../Components/Buttons/GoBack';
import ModalFormConfirm from '../../Components/Forms/ModalFormConfirm';
import DoubleInput from '../../Components/General/Input/DoubleInput';
import { Section } from '../../Components/Layout';
import { ClientInput, Container, ConteinerProduct, TemplateContentSectionFinal, TemplateContentStyle } from './styles';
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

const Caixa = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
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
          <GoBack />
          <h1>Caixa</h1>

        </TemplateContentStyle>
      </Section>
      <Section noPaddingTop >
        <TemplateContentSectionFinal>
          <div>
            <DoubleInput placeholder="Código ou nome do Produto" placeholder2="quantidade" type="text" />
            <ConteinerProduct>
              <img src="/linguica.png"></img>
              <div id="prod">
                <ul>
                  <li>Produto: <i>Linguiça</i></li>
                  <li>Preço Uni: <i>R$ 10,00</i></li>
                  <li>Desconto: <i>R$ 0,50</i></li>
                  <li>Total: <i>R$ 9,50</i></li>
                </ul>
              </div>
            </ConteinerProduct>
            <ClientInput placeholder='Cliente' />
          </div>
          <TableList setConfirmaVenda={openModal} />
        </TemplateContentSectionFinal>
      </Section>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ModalFormConfirm valor="200" closeModal={closeModal} />
      </Modal>
    </Container >
  );
}

export default Caixa;
