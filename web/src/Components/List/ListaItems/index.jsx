import React from 'react';
import { HiOutlineMinus } from 'react-icons/hi';
import { Container } from './styles';


const ListaItem = ({ text, placeholder, type, refName }) => {


  return (
    <Container>
      <h2>Produtos inseridos</h2>
      <div id="container">
        <ul>
          <li>
            <span>Carne Moida 200g</span>
            <div><HiOutlineMinus /></div>
          </li>
          <li>
            <span>Carne Moida 200g</span>
            <div><HiOutlineMinus /></div>
          </li>
          <li>
            <span>Carne Moida 200g</span>
            <div><HiOutlineMinus /></div>
          </li>
          <li>
            <span>Carne Moida 200g</span>
            <div><HiOutlineMinus /></div>
          </li>
          <li>
            <span>Carne Moida 200g</span>
            <div><HiOutlineMinus /></div>
          </li>
        </ul>
      </div>
    </Container>
  )

};

export default ListaItem;