import styled from "styled-components";

export const Container = styled.table` 

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