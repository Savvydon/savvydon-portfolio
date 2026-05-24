import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';

const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setExpanded(false);
    }
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand href="#home" onClick={() => scrollToSection('home')} className="nav-logo">
          Savvydon.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-links">
            <Nav.Link onClick={() => scrollToSection('home')}>Home</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('about')}>About</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('skills')}>Skills</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('projects')}>Projects</Nav.Link>
            <Nav.Link onClick={() => scrollToSection('contact')}>Contact</Nav.Link>
          </Nav>
          <a
            href="https://github.com/Savvydon"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
          >
            <FaGithub /> GitHub
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;