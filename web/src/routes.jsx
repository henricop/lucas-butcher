import React from 'react';
import { Routes as MainRoutes, Route } from "react-router-dom";

import CadastroProdutos from './pages/CadastroProdutos';
import Caixa from './pages/Caixa';
import Clientes from './pages/Clientes';
import ConsultaEncomendas from './pages/ConsultaEncomendas';
import ConsultaInterna from './pages/ConsultaInterna';
import ConsultaProdutos from './pages/ConsultaProdutos';
import Devolucao from './pages/Devolucao';
import Empresas from './pages/Empresas';
import Encomendas from './pages/Encomendas';
import Fornecedores from './pages/Fornecedores';
import Funcionarios from './pages/Funcionarios';
import HistoricoVendas from './pages/HistoricoVendas';
import HistoricoVendasDetalhes from './pages/HistoricoVendas/details';
import HistoricoLotes from './pages/HistoricoLotes';
import HistoricoPerdas from './pages/HistoricoPerdas';
import Home from './pages/Home';
import Lote from './pages/Lote';
import Promocoes from './pages/Promocoes';

export default function Routes() {
  return (
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
      <Route path="/consulta-encomendas" element={<ConsultaEncomendas />} />
      <Route path="/consulta-produtos" element={<ConsultaProdutos />} />
      <Route path="/caixa" element={<Caixa />} />
      <Route path="/historico-vendas" element={<HistoricoVendas />} />
      <Route path="/historico-vendas-detalhes" element={<HistoricoVendasDetalhes />} />
      <Route path="/historico-perdas" element={<HistoricoPerdas />} />
      <Route path="/historico-lotes" element={<HistoricoLotes />} />
    </MainRoutes>
  );
}