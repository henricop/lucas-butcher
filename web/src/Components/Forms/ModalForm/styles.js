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
  section {
    width: 80%;
    display: flex;
    align-items:center;
    justify-content: flex-start;
    p {
      display: inline;
      padding: 0 1rem;
      font-size: 1.3rem;
    }
    input{
      padding: 1rem;
      background: #f0f0f0;
      width: 100%;
      display: inline;
      border-radius: 5px;
    }
  }
  div {
    display: flex;
    align-items:center;
    justify-content: flex-start;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    button{
      min-width: 100%;
      padding: .8rem 1rem;
      transition: all .2s; 
      &:hover{
        cursor: pointer;
        background:#c6c6c6;
        transform: scale(1.01);
      }
    }
  }

`;