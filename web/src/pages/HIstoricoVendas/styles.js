import styled from 'styled-components';

export const Container = styled.div`
  tr>td:last-child {
    width: 10%;
  }
`

export const Tools = styled.div`

  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: space-between;
  margin: auto;
  margin-top: 60px;
  gap: 5%;

  div > p {
    font-size: 140%;
    padding-bottom: 5px;
  }

  h1 {
    width: 100%;
    padding-bottom: 20px;
  }

`