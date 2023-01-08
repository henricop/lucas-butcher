import styled from 'styled-components';


export const Container = styled.div` 

  table, th, td {
    border: 1px solid;
  }

  table {
    width: 80%;
    margin: auto;
    margin-top: 20px;
    background: #bfbfc3;
    border-collapse: collapse;
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

  .tools {
    display: flex;
    width: 80%;
    justify-content: end;
    margin: auto;
    margin-top: 60px;
    gap: 5%;
  }

  button {
    float: none;
  }

`;