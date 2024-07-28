import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import Games from './pages/Games';
import PlayGame from './pages/PlayGame';


function AppRoutes() {
  return (
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route  path="/projects" element={<Projects/>} />
        <Route  path="/contact" element={<Contact/>} />
        <Route  path="/games" element={<Games/>} />
        <Route  path="/games/play/:id" element={<PlayGame/>} />
      </Routes>
  );
}

export default AppRoutes;
