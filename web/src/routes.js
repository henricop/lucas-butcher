import React from 'react';
import { Route, Routes as MainRoutes } from "react-router-dom";

import Cliente from './pages/Cliente';
import Home from './pages/Home';
import Vendas from './pages/Vendas';
import Empresas from './pages/Empresas';
import Clientes from './pages/Clientes'
import Funcionarios from './pages/Funcionarios';
import Fornecedores from './pages/Fornecedores';
import Encomendas from './pages/Encomendas';
import Lote from './pages/Lote';

export default function Routes(){
  return(
    <MainRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/vendas" element={<Vendas />} />
        <Route path="/produtos" element={<Vendas />} />
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/funcionarios" element={<Funcionarios />} />
        <Route path="/fornecedores" element={<Fornecedores />} />
        <Route path="/encomendas" element={<Encomendas />} />
        <Route path="/lote" element={<Lote />} />
        <Route path="/cliente" element={<Cliente />} />
    </MainRoutes>
  );
}