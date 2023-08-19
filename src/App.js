import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Homepage from './pages/home/home';
import Impressum from './pages/impressum/impressum';
import Nutzungsbedingungen from './pages/nutzungsbedingungen/nutzungsbedingungen';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import './App.css';

export default function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/nutzungsbedingungen' element={<Nutzungsbedingungen />} />
          <Route path='/impressum' element={<Impressum />} />
          <Route path='/' element={<Homepage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};
