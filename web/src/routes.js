import React from 'react';
import { Route, Routes as MainRoutes } from "react-router-dom";

import Home from './pages/Home';
import Vendas from './pages/Vendas';
import Empresas from './pages/Empresas';
import Clientes from './pages/Clientes'

export default function Routes(){
  return(
    <MainRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/vendas" element={<Vendas />} />
        <Route path="/produtos" element={<Vendas />} />
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/clientes" element={<Clientes />} />
    </MainRoutes>
  );
}