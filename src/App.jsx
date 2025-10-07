import React from "react";
import './App.css'
import Header from './components/Header'
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
    <>
    <Header>
      
    </Header>
    
    
    
    
    </>
  ) 
    
    

    
  
}

export default App
