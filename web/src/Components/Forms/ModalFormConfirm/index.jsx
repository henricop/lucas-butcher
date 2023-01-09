import React from 'react';

import { Container, ContainerGrid } from './styles';



const ModalFormConfirm = ({ valor, closeModal, type = "formaVenda" }) => {

  if (type === "formaVenda") {

    return (
      <ContainerGrid>
        <section id="forma">
          <div id="main">
            <h2>Forma de pagamento</h2>
            <div>
              <input type="radio" id="dinheiro" name="dinheiro" value="dinheiro"
                checked />
              <label for="dinheiro">dinheiro</label>
            </div>
            <div>
              <input type="radio" id="cartao-de-credito" name="cartao-de-credito" value="cartao-de-credito"
              />
              <label for="cartao-de-credito">Cartao de Crédito</label>
            </div>
            <div>
              <input type="radio" id="cartao-de-debito" name="cartao-de-debito" value="cartao-de-debito"
              />
              <label for="cartao-de-debito">Cartão de Débito</label>
            </div>
            <div>
              <input type="radio" id="pix" name="pix" value="pix"
              />
              <label for="pix">Pix</label>
            </div>
          </div>
        </section>
        <section id="valor">
          <h2>Valor a pagar</h2><p>OKOKOKOK</p>
        </section>

      </ContainerGrid >

    )
  }
  return (
    <Container>
      <h2>Forma de pagamento</h2>

    </Container >

  )
}

export default ModalFormConfirm;