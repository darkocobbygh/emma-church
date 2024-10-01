import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Medias from './pages/Medias';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const App = () => {
/**  const backgroundImageStyle = {
    backgroundImage: "url('/assets/pexels-joshsorenson-976866.jpg')",
  };
   */
  return (
   
      <div className="flex flex-col min-h-screen">
        <Navbar className="h-screen" ></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/medias' element={<Medias/>}/>
        </Routes>
        <Footer/>
      </div>
  );
};

export default App;