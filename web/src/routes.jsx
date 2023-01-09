import React from 'react';
import { Route, Routes as MainRoutes } from "react-router-dom";

import Home from './pages/Home';
import Empresas from './pages/Empresas';
import Clientes from './pages/Clientes'
import Funcionarios from './pages/Funcionarios';
import Fornecedores from './pages/Fornecedores';
import ConsultaInterna from './pages/ConsultaInterna';
import Encomendas from './pages/Encomendas';
import Lote from './pages/Lote';
import Promocoes from './pages/Promocoes';
import CadastroProdutos from './pages/CadastroProdutos';
import Devolucao from './pages/Devolucao';
import HistoricoVendas from './pages/HistoricoVendas';
import HistoricoVendasDetalhesPlaceHolder from './pages/HistoricoVendas/details'
import HistoricoPerdas from './pages/HistoricoPerdas';
import HistoricoLotes from './pages/HistoricoLotes';
import ConsultaEncomendas from './pages/ConsultaEncomendas';
import ConsultaProdutos from './pages/ConsultaProdutos';;

export default function Routes(){
  return(
    <MainRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/funcionarios" element={<Funcionarios />} />
        <Route path="/fornecedores" element={<Fornecedores />} />
        <Route path="/consulta-interna" element={<ConsultaInterna />} />
        <Route path="/encomendas" element={<Encomendas />} />
        <Route path="/lote" element={<Lote />} />
        <Route path="/promocoes" element={<Promocoes />} />
        <Route path="/cadastro-produtos" element={<CadastroProdutos />} />
        <Route path="/devolucao" element={<Devolucao />} />
        <Route path="/historico-vendas" element={<HistoricoVendas />} />
        <Route path="/historico-vendas-detalhes" element={<HistoricoVendasDetalhesPlaceHolder />} />
        <Route path="/historico-perdas" element={<HistoricoPerdas />} />
        <Route path="/historico-lotes" element={<HistoricoLotes />} />
        <Route path="/consulta-encomendas" element={<ConsultaEncomendas />} />
        <Route path="/consulta-produtos" element={<ConsultaProdutos />} />
    </MainRoutes>
  );
}