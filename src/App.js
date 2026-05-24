import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <BackgroundEffects />
        <NavbarComponent />
        <Hero />
        <About />
        <Skills />
        <Stats />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;