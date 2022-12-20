import styled from 'styled-components';
import { TemplateContent } from '../../Components/Layout';


export const Container = styled.div`
  width: 100%;
  height: 200px;
`;

export const TemplateContentStyle = styled(TemplateContent)`
  display: flex;
  justify-content:center;
  align-items:center;
  justify-items:center;
  max-width: 1400px;
  flex-wrap: wrap;
  gap:20px;
`;

export const CardItem = styled.div`
  width: 250px;
  height: 250px;
  background: #D9D9D9;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  align-self: center;
  transition: var(--transition);
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
    text-align: center;
    color: #222;
  }
  svg {
    font-size: 46px;
    color: #222;
  }
  @media(max-width: 1300px) {
    width: 200px;
    height: 200px;
  }
  @media(max-width: 900px) {
    width: 150px;
    height: 150px;
  }
  
`;