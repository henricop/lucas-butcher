import api from '../../services/api';

import { Container, MyButton, TextBox } from './styles';

class HistoricoVendas extends React.Component{

  constructor(props){
    super(props);
    this.state = {clicked: false};
    api.get("/vendas").then((r) => this.state.vendas_array = r.data);
  }

  render() {
    return (
      <Container>
        <h1>Teste</h1>
        <p>Teste testando um dois tres</p>
        <MyButton onClick={() => {console.log('click!'); this.setState({clicked: !this.state.clicked});}}>Get Vendas</MyButton>
        {this.state.clicked? <TextBox>{JSON.stringify(this.state.vendas_array.vendas)}</TextBox> : ''}
      </Container>
    )
  }
}

export default HistoricoVendas;
