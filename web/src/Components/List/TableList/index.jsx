import React from 'react';
import { AiFillMinusSquare } from 'react-icons/ai';
import { BsFillFileLock2Fill } from 'react-icons/bs';
import { Container, ContainerButtons } from './styles';

const TableList = ({ setConfirmaVenda }) => {


  return (
    <Container>
      <h2>Produtos inseridos</h2>
      <div id="container">
        <table>
          <tr>
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>PREÇO</th>
          </tr>
          <tr>
            <td>Linguiça</td>
            <td>2kg</td>
            <td>R$ 15,00 &nbsp; <AiFillMinusSquare /></td>
          </tr>
          <tr>
            <td>Linguiça</td>
            <td>2kg</td>
            <td>R$ 15,00 &nbsp; <AiFillMinusSquare /></td>
          </tr>
          <tr>
            <td>Linguiça</td>
            <td>2kg</td>
            <td>R$ 15,00 &nbsp; <AiFillMinusSquare /></td>
          </tr>
          <tr>
            <td>Linguiça</td>
            <td>2kg</td>
            <td>R$ 15,00 &nbsp; <AiFillMinusSquare /></td>
          </tr>
          <tr>
            <td>Linguiça</td>
            <td>2kg</td>
            <td>R$ 15,00 &nbsp; <AiFillMinusSquare /></td>
          </tr>

        </table>
      </div>
      <footer>
        <div><p>Sub total:</p><strong>R$ 2000,00</strong></div>
        <div><p>Total:</p><strong>R$ 2000,00</strong></div>
        <button onClick={() => setConfirmaVenda()}>Confirmar Venda</button>
      </footer>
      <ContainerButtons>
        <button>Sangria</button>
        <BsFillFileLock2Fill />
      </ContainerButtons>
    </Container>
  )

};

export default TableList;