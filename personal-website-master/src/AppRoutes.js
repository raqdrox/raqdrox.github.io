import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Games from './pages/Games';
import Flappy from './pages/Flappy';



function AppRoutes() {
  return (
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route  path="/projects" element={<Projects/>} />
        <Route  path="/blog" element={<Blog/>} />
        <Route  path="/contact" element={<Contact/>} />
        <Route  path="/games" element={<Games/>} />
        <Route  path="/games/flappy" element={<Flappy/>} />


      </Routes>
  );
}

export default AppRoutes;
