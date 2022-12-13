import styled from 'styled-components';
import { TemplateContent } from '../../Components/Layout';

export const Container = styled.div`
  width: 100%;
`;

export const TemplateContentStyle = styled(TemplateContent)`
  
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
  }
  section {
    display: flex;
    justify-content: flex-start;
    align-items:center;
    gap: 1rem;
    margin-top: 30px;
    div{
      display:flex;
      align-items:center;
      justify-content:center;
      gap: .2rem;
    }
  }

`;
export const TemplateContentSection = styled(TemplateContent)`
  div {
    display: flex;
    justify-content: flex-start;
    align-items:flex-start;
    gap: 1rem;
  }
  @media(max-width: 900px){
    div {
      flex-direction: column;
      justify-content: center;
      align-items:center;
    }
  }
`;
export const TemplateContentSectionFinal = styled(TemplateContent)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: flex-start;
  align-items:flex-start;
  @media(max-width: 900px){
    grid-template-columns: 1fr ;
    justify-items: center;
    align-items:center;
    gap: 1rem;
    section#container{
    }
  }
`;
