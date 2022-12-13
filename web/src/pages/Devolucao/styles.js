import styled from 'styled-components';


export const Container = styled.div`
  width: 100vw;
  height: 100%;
  
  display:flex;
  justify-content: center;
  
  p {
    color: #000;
  }

  h1{
    font-size: 22px;
  }

  .wrapper{
    max-width: 1280px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }

  .flex-row{
    display: flex;
    flex-direction: row;
  }

  .input-section{
    width: 50%;
    display: flex;
    flex-direction: column;
  }

  .divisor{
    align-self: center;
    width: 1px;
    margin-right: 9%;
    background-color: #707070;
    height: 440px;
  }

  .breaker{
    margin: 0;
    padding: 0;
    width: 100%;
  }

  .flex-row-wrap{
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;