import logo from './logo.svg';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import Contact from './component/Contact';
import AppNavbar from './component/AppNavbar';
import Footer from './component/Footer'
import { Route, Routes } from 'react-router-dom'
import './App.css';


function App() {
  return (
    <React.Fragment>
      <AppNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
