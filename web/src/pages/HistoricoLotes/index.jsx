import { Container, Tools, Select } from './styles';
import InputGeneral from '../../Components/General/Input/InputGeneral';
import Table from '../../layout/components/Table';

function HistoricoLotes(){
  return(
    <Container>
      <Tools>
        <h1>Histórico de Lotes</h1>
        <InputGeneral placeholder="Pesquisar.." type="search"/>
        <InputGeneral type="datetime-local"/>
        <div>
          <label for="filtro">Filtro:</label>
          <Select name="filtro">
          <option value="0">Todos</option>
            <option value="1">Expirando</option>
            <option value="2">Vencido</option>
            <option value="3">Extoque mínimo</option>
            <option value="4">Extoque máximo</option>
          </Select>
        </div>
      </Tools>
      <Table>
        <thead> 
          <tr>
            <th>N° do Lote</th>
            <th>Produto</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>134</td>
            <td>Coca-Cola</td>
            <td>12/05/2022</td>
          </tr>
          <tr>
            <td>235</td>
            <td>Carne bovina</td>
            <td>26/03/2022</td>
          </tr>
          <tr>
            <td>432</td>
            <td>Carne suina</td>
            <td>26/03/2022</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default HistoricoLotes;