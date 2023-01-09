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
  align-items:flex-start;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  width: 25vw;
  height: 15vw;
  gap: 1rem;
  padding: 2rem 1rem;
  min-width: 500px;
  min-height: 300px;

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    color: #000000;
  }
  section#forma{
    div#main {
      div {
        padding: 1rem 0 ;
        display: flex;
        align-items:center;
        justify-content:flex-start;
        label { 
          font-size: 16px;
          margin-left: 5px;
        }
      }
    }
    
  }
  section#valor{
    height: 100%;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    div#valor-grid{
      padding: 0 0 1rem 0 ;
      display: flex;
      flex-direction:column;
      align-items:flex-start;
      justify-content:flex-start;
      width: 100%;
    }
    input { 
      font-size: 16px;
      background: #FFFFFF;
      padding: .3rem;
      width: 100%!important;
      opacity: 0.32;
      border: 2px solid rgba(255, 255, 255, 0.32);
    }

  }
  button {
    padding: .5rem;
    transition: all 0.2s;
    &:hover {
      cursor: pointer;
      transform: scale(1.01);
    }
  }

  @media(max-width: 900px ) {
    min-width: 400px;
    h2 {
      font-size: 18px;
    line-height: 22px;
    }
  }
  @media(max-width: 600px ) {
    min-width: 300px;
    h2 {
      font-size: 16px;
    line-height: 20px;
    }
    label { 
      font-size: 14px!important;
    }
  }

`;

export const ContainerDefine = styled.div`
  display: flex;
  min-width: 250px;
  flex-direction:column;
  width: 100%;
  align-items:flex-start;
  justify-content:space-around;
  gap: 1rem;
  
  section#formaPayment {
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap: 1rem;
    div {
      width: 100%;
      display: flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      label {
        width: 100%;
        margin-bottom: 5px;
        text-align: center;
      }
      label {
        text-align: center;
        width: 100%;
        font-size: 20px;
        line-height: 22px;
      }
      input {
        width: 100%;
        padding: .8rem .5rem;
      }
      
    }
    
  }
  button{
    padding: .5rem;
    width: 100%;
    transition: all 0.2s;
    &:hover {
      cursor: pointer;
      transform: scale(1.01);
    }
  }

`
export const ContainerSangria = styled.div`
  display: flex;
  min-width: 250px;
  flex-direction:column;
  width: 100%;
  align-items:flex-start;
  justify-content:space-around;
  gap: 1rem;
  h2{
      text-align : center;
      width: 100%;
    }
  
  section#formaSangria {
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap: 1rem;

    div {
      width: 100%;
      display: flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      label {
        width: 100%;
        margin-bottom: 5px;
        text-align: center;
      }
      label {
        text-align: center;
        width: 100%;
        font-size: 16px;
        line-height: 22px;
      }
      input,textarea {
        width: 100%;
        padding: .8rem .5rem;
      }
      
    }
    
  }
  footer {
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width: 100%;
    time {
      font-size: 14px;
      font-weight: 500;
      padding: 1rem;
    }
    div {
      display: flex;
      flex-direction:row;
      align-items:center;
      width: 100%;
      justify-content: center;
      gap: 1rem;
      button{
        padding: .5rem;
        width: 100%;
        transition: all 0.2s;
        &:hover {
          cursor: pointer;
          transform: scale(1.01);
        }
      }
    }
  }

`