import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaWhatsapp,
  FaRocket,
} from "react-icons/fa";
import { ReactTyped } from "react-typed";

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} className="text-center">
            <div className="hero-badge">
              <span className="pulse"></span>
              Available for hire
            </div>
            <h1 className="hero-title">
              Hello, I'm a<br />
              <span className="gradient-text">
                <ReactTyped
                  strings={[
                    "Full-Stack Developer",
                    "React Developer",
                    "Tech Enthusiast",
                    "Problem Solver",
                  ]}
                  typeSpeed={80}
                  backSpeed={50}
                  backDelay={2000}
                  loop
                />
              </span>
            </h1>
            <p className="hero-desc">
              I craft exceptional digital experiences with cutting-edge
              technologies. Specializing in React, JavaScript, Python and modern
              web development with a passion for building clean, performant, and
              user-friendly applications.
            </p>
            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() => scrollToSection("projects")}
              >
                <FaRocket /> View My Work
              </button>
              <button
                className="btn-secondary"
                onClick={() => scrollToSection("contact")}
              >
                <FaEnvelope /> Get In Touch
              </button>
            </div>
            <div className="hero-socials">
              <a
                href="https://github.com/Savvydon"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a href="#" title="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="mailto:donsave4real@gmail.com" title="Email">
                <FaEnvelope />
              </a>
              <a
                href="https://wa.me/2347087557625"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              {/* <a href="#" title="Twitter">
                <FaTwitter />
              </a> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
