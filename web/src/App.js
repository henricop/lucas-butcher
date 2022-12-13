import React from 'react';
import NavBar from './Components/Navbar';
import Routes from './routes';
import GlobalStyle from "./styles/global";



function App() {
  return (
    <>
    <NavBar/>
    <Routes/>
    <GlobalStyle/>
    </>
  );
}

export default App;