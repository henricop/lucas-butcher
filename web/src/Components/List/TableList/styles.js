import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  justify-content: center;
  /* gap: 1rem; */

  h2 { 
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: left;
  }
  div#container {
    max-height: 250px;
    overflow-y:scroll;
    overflow-x: hidden;
    border: 1px solid #CCCCCC;
    border-radius: 2px;
    width: 100%;
    min-width: 400px;
    table {
      width: 100%;
      background: #D9D9D9;
      border-collapse: collapse;
      tr {
        text-align: center;
        th {
          background: #2D2E2F;
          color: #FFFFFF;
          padding: 1rem 2rem;
        }
        td{
          padding: 1rem 0 ;
          align-self: center;
        }
      }
    }
    
  }
  footer {
    width: 100%;
    padding: 5px 1rem;
    background: #D9D9D9;
    div {
      display: flex;
      justify-content:space-between;
      align-items:center;
      p {
        font-size: 16px;
        line-height: 18px;
        padding: .3rem 0;
      }
    }
    button { 
      width: 100%;
      padding: .8rem;
      margin-top: 10px;
      font-weight: 500;
      transition: all .2s;
      &:hover {
        cursor: pointer;
        transform: scale(1.01);
      }
    }

  }
  @media(max-width: 900px){
    width: 100%;
    div#container {
      min-width: 100%;
      width: 100%;
    }
  }
`;
export const ContainerButtons = styled.div`
  width: 100%;
  display:flex;
  align-items:center;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
  
  button {
    background: #3DC327;
    color: #fff;
    padding: .5rem 2rem;
    border-radius: 5px;
    transition: all .2s;
    &:hover {
      cursor: pointer;
      transform: scale(1.01);
    }
  }
  svg {
    font-size: 30px;
    color: #3DC327;
    transition: all .2s;
    &:hover {
      cursor: pointer;
      transform: scale(1.01);
    }
  }


`;