import { Container, Tools } from './styles';
import InputGeneral from '../../Components/General/Input/InputGeneral';
import Table from '../../layout/components/Table';

function HistoricoVendas(){
  return(
    <Container>
      <Tools>
        <h1>Histórico de Perdas</h1>
        <InputGeneral placeholder="Pesquisar.." type="search"/>
        <InputGeneral type="datetime-local"/>
      </Tools>
      <Table>
        <thead> 
          <tr>
            <th>Data</th>
            <th>Produto</th>
            <th>Quant</th>
            <th>Valor Uni</th>
            <th>Total</th>
            <th>Motivo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>26/03/2022</td>
            <td>Carne de boi</td>
            <td>3 kg</td>
            <td>25.00 R$</td>
            <td>75.00 R$</td>
            <td>Aparas</td>
          </tr>
          <tr>
            <td>03/12/2022</td>
            <td>Refrigerante</td>
            <td>2 L</td>
            <td>9.00 R$</td>
            <td>9.00 R$</td>
            <td>Acidente</td>
          </tr>
        </tbody>
        <tfoot>
          <tr><td colSpan="6">Total: 84.00 R$</td></tr>
        </tfoot>
      </Table>
    </Container>
  );
}

export default HistoricoVendas;