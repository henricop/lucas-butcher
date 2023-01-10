import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';



const ModalForm = ({ valor, setValor, closeModal }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/caixa');
  return (
    <Container>
      <h2>Abertura de Caixa</h2>
      <section>
        <p>R$</p><input value={valor} onChange={(e) => setValor(e.target.value)} />
      </section>
      <div>
        <button onClick={handleClick}>Abrir Caixa</button>
        <button onClick={() => { setValor(valor); closeModal(); }}>Cancelar</button>
      </div>
    </Container >

  )
}

export default ModalForm;