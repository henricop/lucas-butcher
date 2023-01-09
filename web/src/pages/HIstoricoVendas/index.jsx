import { Container } from './styles';
import InputGeneral from '../../Components/General/Input/InputGeneral';
import ButtonDefault from '../../layout/components/ButtonDefault';

function HistoricoVendas(){
  return(
    <Container>
      <div className='tools'>
        <InputGeneral placeholder="Pesquisar.." type="search"/>
        <InputGeneral type="datetime-local"/>
      </div>
      <table>
        <thead> 
          <tr>
            <th>Data</th>
            <th>ID</th>
            <th>Cliente</th>
            <th>Valor</th>
            <th>-</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>26/03/2022</td>
            <td>008231</td>
            <td>Matheus</td>
            <td>164.50 R$</td>
            <td ><ButtonDefault onClick={() => window?.location.assign("/historico-vendas-detalhes")} text="Detalhes"  width="fit-content" margin="1px"/></td>
          </tr>
          <tr>
            <td>26/03/2022</td>
            <td>008231</td>
            <td>Matheus</td>
            <td>164.50 R$</td>
            <td ><ButtonDefault text="Detalhes"  width="fit-content" margin="1px"/></td>
          </tr>
          <tr>
            <td>26/03/2022</td>
            <td>008231</td>
            <td>Matheus</td>
            <td>164.50 R$</td>
            <td ><ButtonDefault text="Detalhes"  width="fit-content" margin="1px"/></td>
          </tr>
          <tr>
            <td>26/03/2022</td>
            <td>008231</td>
            <td>Matheus</td>
            <td>164.50 R$</td>
            <td ><ButtonDefault text="Detalhes"  width="fit-content" margin="1px"/></td>
          </tr>
          <tr>
            <td>26/03/2022</td>
            <td>008231</td>
            <td>Matheus</td>
            <td>164.50 R$</td>
            <td ><ButtonDefault text="Detalhes"  width="fit-content" margin="1px"/></td>
          </tr>
          <tr>
            <td>26/03/2022</td>
            <td>008231</td>
            <td>Matheus</td>
            <td>164.50 R$</td>
            <td ><ButtonDefault text="Detalhes"  width="fit-content" margin="1px"/></td>
          </tr>
          <tr>
            <td>26/03/2022</td>
            <td>008231</td>
            <td>Matheus</td>
            <td>164.50 R$</td>
            <td ><ButtonDefault text="Detalhes"  width="fit-content" margin="1px"/></td>
          </tr>
          <tr>
            <td>26/03/2022</td>
            <td>008231</td>
            <td>Matheus</td>
            <td>164.50 R$</td>
            <td ><ButtonDefault text="Detalhes"  width="fit-content" margin="1px"/></td>
          </tr>
          <tr>
            <td>26/03/2022</td>
            <td>008231</td>
            <td>Matheus</td>
            <td>164.50 R$</td>
            <td ><ButtonDefault text="Detalhes"  width="fit-content" margin="1px"/></td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

export default HistoricoVendas;
