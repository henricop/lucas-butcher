import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  gap: 1rem;

  label {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
  input {
    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    border-radius: 2px;
    padding: .5rem;
    min-width: 200px;
    min-height: 36px;
  }
`;