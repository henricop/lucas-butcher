import React from 'react';
import { Route, Routes as MainRoutes } from "react-router-dom";

import Cliente from './pages/Cliente';
import Home from './pages/Home';
import Vendas from './pages/Vendas';
import HistoricoVendas from './pages/HistoricoVendas';
import CadastroProdutos from './pages/CadastroProdutos';
import Devolucao from './pages/Devolucao';

export default function Routes(){
  return(
    <MainRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/vendas" element={<Vendas />} />
        <Route path="/produtos" element={<Vendas />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/historico-vendas" element={<HistoricoVendas />} />
        <Route path="/cadastro-produtos" element={<CadastroProdutos />} />
        <Route path="/devolucao" element={<Devolucao />} />
    </MainRoutes>
  );
}