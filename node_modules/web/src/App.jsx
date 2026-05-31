
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage.jsx';
import ServiciosPage from './pages/ServiciosPage.jsx';
import GaleriaPage from './pages/GaleriaPage.jsx';
import ContactoPage from './pages/ContactoPage.jsx';
import ReservasPage from './pages/ReservasPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/galeria" element={<GaleriaPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/reservas" element={<ReservasPage />} />
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center">
              <h1 className="heading-font text-6xl font-bold text-foreground mb-4">404</h1>
              <p className="text-xl text-foreground/70 mb-8">Página no encontrada</p>
              <a href="/" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200">
                Volver al inicio
              </a>
            </div>
          </div>
        } />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
