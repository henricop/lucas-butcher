import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  flex-direction: column;
  width: 25vw;
  height: 15vw;
  padding: 2rem 1rem;
  min-width: 400px;
  min-height: 300px;

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    color: #000000;

  }
  

`;

export const ContainerGrid = styled.div`

display: grid;
  align-items:center;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  width: 25vw;
  height: 15vw;
  padding: 2rem 1rem;
  min-width: 400px;
  min-height: 300px;

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    color: #000000;

  }
`;
