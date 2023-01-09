import styled from 'styled-components';

export const Container = styled.div`

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

export const Table = styled.table` 

  width: 80%;
  margin: auto;
  margin-top: 20px;
  background: #bfbfc3;
  border-collapse: collapse;

  th, td {
    border: 1px solid;
  }
  
  th {
    color: white;
    border-color: black;
  }

  tr {
    height: 60px;
  }

  td {
    color: white;
    border-color: black;
    text-align: center;
  }
  
  tr:nth-child(odd) {
    background: rgba(0,0,0,0.2);
  }
 
  th {
    background: #646363;
    height: 70px;
    font-size: 150%;
  }

  tr>td:last-child {
    width: 10%;
  }

  tfoot > tr {
    height: 40px;
  }

  tfoot > tr > td{
    background: rgba(0,0,0,0.4);
    padding-left: 10px;
    font-weight: bold;
    font-size: 115%;
    text-align: start;
  }

  button {
    float: none;
  }

  input {
    width: 20px;
    height: 20px;
  }

`;