import React from 'react';
import { Route, Routes as MainRoutes } from "react-router-dom";

import Home from './pages/Home';
import Promocoes from './pages/Promocoes';

export default function Routes(){
  return(
    <MainRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/promocoes" element={<Promocoes />} />
    </MainRoutes>
  );
}