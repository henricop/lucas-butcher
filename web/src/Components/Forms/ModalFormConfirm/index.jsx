import React from 'react';

import { Container, ContainerCloseCaixa, ContainerDefine, ContainerGrid, ContainerSangria } from './styles';



const ModalFormConfirm = ({ valor, closeModal, type = "formaVenda", setType }) => {

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
          <div id="valor-grid">
            <h2>Valor a pagar</h2>
            <div>
              <input type="text" placeholder="R$ 2000,00" />
            </div>
          </div>
          <input type="text" placeholder="R$ 2000,00" />
        </section>
        <button onClick={closeModal}>Cancelar</button>
        <button onClick={() => {
          setType("formPagamentos");
          // closeModal();
        }}>Confirmar</button>

      </ContainerGrid >

    )
  }
  if (type === "formPagamentos") {

    return (
      <ContainerDefine>
        <section id="formaPayment">
          <div>
            <label for="Método">Método</label>
            <input type="text" id="Método" name="Método" value="Método"
              placeholder='À vista'
            />
          </div>
          <div>
            <label for="parcelas">Parcelas</label>
            <input type="text" id="parcelas" name="parcelas" value="parcelas"
              placeholder='2x' />
          </div>
          <div>
            <label for="Bandeira">Bandeira</label>
            <input type="text" id="Bandeira" name="Bandeira" value="Bandeira"
              placeholder='Mastercard'
            />
          </div>
          <div>
            <label for="operadora">Pix</label>
            <input type="text" id="operadora" name="operadora" value="operadora"
              placeholder='Stone' />
          </div>
        </section>

        <button onClick={closeModal}>Confirmar</button>
        <button onClick={closeModal}>Cancelar</button>

      </ContainerDefine >

    )
  }
  if (type === "sangria") {

    return (
      <ContainerSangria>
        <h2>Sangria</h2>
        <section id="formaSangria">
          <div>
            <label for="Valor">Valor</label>
            <input type="text" id="Valor" name="Valor" value="Valor"
              placeholder='R$ 2000,00'
            />
          </div>
          <div>
            <label for="Descricao">Descrição</label>
            <textarea type="text" id="Descricao" name="Descricao" value="Descricao"
              placeholder='descreva o ocorrido' />
          </div>
        </section>

        <footer>
          <time>{new Date().toLocaleString()}</time>
          <div>
            <button onClick={closeModal}>Cancelar</button>
            <button onClick={closeModal}>Confirmar</button>
          </div>
        </footer>

      </ContainerSangria >

    )
  }
  if (type === "closeCaixa") {

    return (
      <ContainerCloseCaixa>
        <h2>Fechamento de Caixa</h2>
        <div id="fechaCaixa">
          <label for="Valor">Caixa inicial</label>
          <input type="text" id="Valor" name="Valor" value="Valor"
            placeholder='R$ 2000,00'
          />
        </div>
        <h2>Entradas</h2>
        <section id="formaFechaCaixa">
          <div>
            <label for="Dinheiro">Dinheiro</label>
            <input type="text" id="Dinheiro" name="Dinheiro" value="Dinheiro"
              placeholder='R$ 2000,00'
            />
          </div>
          <div>
            <label for="Cartao">Cartao</label>
            <input type="text" id="Cartao" name="Cartao" value="Cartao"
              placeholder='R$ 00,00'
            />
          </div>
          <div>
            <label for="Outros">Outros</label>
            <input type="text" id="Outros" name="Outros" value="Outros"
              placeholder='R$ 00,00'
            />
          </div>
          <div>
            <label for="sangria">Sangria</label>
            <input type="text" id="sangria" name="sangria" value="sangria"
              placeholder='R$ 00,00'
            />
          </div>
          <div>
            <time>{new Date().toLocaleString()}</time>
          </div>
          <div>
            <label for="saldo">Saldo Final</label>
            <input type="text" id="saldo" name="saldo" value="saldo"
              placeholder='R$ 00,00' disabled
            />
          </div>
        </section>

        <footer>
          <div>
            <button onClick={closeModal}>Cancelar</button>
            <button onClick={closeModal}>Confirmar</button>
          </div>
        </footer>

      </ContainerCloseCaixa >

    )
  }
  return (
    <Container>
      <h2>Forma de pagamento</h2>

    </Container >

  )
}

export default ModalFormConfirm;