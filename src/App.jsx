import React from "react";
import './App.css'
import { Box } from "@mui/material";
import Header from './components/Header'
import Footer from './components/Footer'
import TesteApi from "./components/TesteApi";
import Inicio from "./components/Inicio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {

  return(
    
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Inicio></Inicio>
     
      </Box>
      <Footer />
    </Box>
    
  ) 
    
    

    
  
}

export default App
