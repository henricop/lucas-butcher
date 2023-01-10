import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  gap: 1rem;
  width: 100%;

  label {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align:left;
    align-self: flex-start;
    color: #000000;
  }
  section {
    display: grid;
    align-items:center;
    justify-content:center;
    grid-template-columns: 2fr 1fr;
    gap:1rem;
    width: 100%;
    input {
      background: #FFFFFF;
      border: 1px solid #CCCCCC;
      border-radius: 2px;
      padding: .5rem;
      min-height: 36px;
      width: 100%;
    }
    div {
      padding: .5rem 0;
      min-height: 36px;
      display: flex;
      align-items:center;
      justify-content:center;
      transition: all .2s;
      border-radius: 2px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  @media(max-width: 900px){
    width: 100%;
    section {
      padding: 0 1rem;
    }
  }
`;