import React from 'react';

import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { Container } from './styles';


const GoBack = ({ text, placeholder, type, refName }) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(-1)}>
      <IoIosArrowBack />
    </Container>
  )

};

export default GoBack;