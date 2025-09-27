// src/App.jsx - Con ruta de Colecciones
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Componentes/Navbar";
import HeroCarousel from "./Componentes/CarruselHero";
import Brands from "./Componentes/Socios";
import MisionVisionValores from "./Componentes/ValoresEmpresa";
import ProductosTemporada from "./Componentes/ProductosTemporada";
import Categorias from "./Componentes/Categorias";
import Boletin from "./Componentes/Boletin";
import Footer from "./Componentes/Footer";
import Catalogo from "./Componentes/Catalogo";
import Colecciones from "./Componentes/Colecciones"; // Importar nuevo componente

// Componente para la página de inicio
const Home = () => (
  <>
    <HeroCarousel />
    <Brands />
    <MisionVisionValores />
    <ProductosTemporada />
    <Categorias />
    <img 
      src="/Imagenes/Imagen 2 Vistalica.jpg" 
      alt="Imagen decorativa Vistalica" 
      style={{width:'100%', height:'auto'}}
    />
    <Boletin />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/colecciones" element={<Colecciones />} />
          <Route path="/impacto" element={
            <div className="container py-5">
              <h2>Impacto</h2>
              <p>Próximamente...</p>
            </div>
          } />
          <Route path="/contacto" element={
            <div className="container py-5">
              <h2>Contacto</h2>
              <p>Próximamente...</p>
            </div>
          } />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;