import { Container, Tools} from './styles';
import ButtonDefault from '../../layout/components/ButtonDefault';
import Table from '../../layout/components/Table';

function HistoricoVendas(){
  return(
    <Container>
      <Tools>
        <h1>Informações da Venda</h1>
        <div>
          <p>Cliente: XXX</p>
          <p>Data: dd/mm/yy</p>
          <p>Forma de pagameto: Crédito</p>
        </div>
        <ButtonDefault bgColor='grey' text="Voltar" margin="1px"/>
      </Tools>
      <Table>
        <thead> 
          <tr>
            <th>Produto</th>
            <th>ID</th>
            <th>Quant</th>
            <th>Valor Uni</th>
            <th>Total</th>
            <th><ButtonDefault bgColor='red' text="Devolver"  width="fit-content" margin="1px"/></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>26/03/2022</td>
            <td>Carne</td>
            <td>72832</td>
            <td>24 kg</td>
            <td>164.50 R$</td>
            <td ><input type="checkbox"></input></td>
          </tr>
          <tr>
            <td>26/03/2022</td>
            <td>Carne</td>
            <td>72832</td>
            <td>24 kg</td>
            <td>164.50 R$</td>
            <td ><input type="checkbox"></input></td>
          </tr>
          <tr>
            <td>26/03/2022</td>
            <td>Carne</td>
            <td>72832</td>
            <td>24 kg</td>
            <td>164.50 R$</td>
            <td ><input type="checkbox"></input></td>
          </tr>
        </tbody>
        <tfoot>
          <tr><td colSpan="6">Total: 999 R$</td></tr>
        </tfoot>
      </Table>
    </Container>
  );
}

export default HistoricoVendas;
