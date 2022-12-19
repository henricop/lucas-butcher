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
import ConsultaEncomendas from './pages/ConsultaEncomendas';

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
        <Route path="/consulta-encomendas" element={<ConsultaEncomendas />} />
    </MainRoutes>
  );
}