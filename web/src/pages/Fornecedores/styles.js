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

  .input-section{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .divisor{
    margin: auto;
    width: 66%;
    height: 1px;
    background-color: #707070;
    margin-top: 80px;
    margin-bottom: 60px;
  }

  .breaker{
    margin: 0;
    padding: 0;
    width: 100%;
  }
`;