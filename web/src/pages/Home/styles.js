import styled from 'styled-components';
import { TemplateContent } from '../../Components/Layout';

export const Container = styled.div`
  width: 100%;
  height: 200px;
`;

export const TemplateContentStyle = styled(TemplateContent)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 250px));
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
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
  
`;