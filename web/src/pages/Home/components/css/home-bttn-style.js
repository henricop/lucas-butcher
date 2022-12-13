import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FrameLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  background-color: #D9D9D9;
  color: #000000;
  border-radius: 10px;
  text-decoration: none;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  background-color: blue;
  margin-top: 20px;
`;

export const Title = styled.h1`
  font-size: 16px;
  width: 115px;
  text-align: center;
`;