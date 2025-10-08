import React from "react";
import './App.css'
import { Box } from "@mui/material";
import Header from './components/Header'
import Footer from './components/Footer'
import TesteApi from "./components/TesteApi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  return <h2 style={{ padding: 16 }}>Página Início</h2>;
}
function Buscar() {
  return <h2 style={{ padding: 16 }}>Página Buscar</h2>;
}
function MinhaLista() {
  return <h2 style={{ padding: 16 }}>Página Minha Lista</h2>;
}
function Sobre() {
  return <h2 style={{ padding: 16 }}>Página Sobre</h2>;
}

function App() {

  return(
    
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>

      <TesteApi></TesteApi>

     {/*    <MainContent /> */}
      </Box>
      <Footer />
    </Box>
    
  ) 
    
    

    
  
}

export default App
