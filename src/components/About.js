import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";

const About = () => {
  const techStack = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Vite",
    "Git",
    "GitHub",
    "Bootstrap",
    "Node.js",
    "Express",
    "Python",
  ];

  return (
    <section id="about">
      <Container>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">About Me</span>
          <h2>
            Passionate About Building{" "}
            <span className="gradient-text">Great Software</span>
          </h2>
          <p>
            A dedicated developer focused on creating impactful digital
            solutions
          </p>
        </motion.div>

        <Row className="about-grid align-items-center">
          <Col lg={6}>
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="image-frame">
                <Image
                  src="/images/savvy.jpg"
                  alt="Savvydon"
                  className="about-avatar"
                  fluid
                />
              </div>
              <div className="floating-card experience">
                <div className="number">5+</div>
                <div className="label">Years Coding</div>
              </div>
              {/* <div className="floating-card projects">
                <div className="number">9+</div>
                <div className="label">Projects Built</div>
              </div> */}
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3>Turning Ideas Into Reality</h3>
              <p>
                I'm a passionate Full-Stack Developer with a strong foundation
                in programming algorithms. My journey in software development
                started with a curiosity about how things work on the web, and
                it has evolved into a deep love for creating elegant, efficient
                solutions.
              </p>
              <p>
                Knowlegde acquired from my undergraduate course such as Data
                structure, Software engineering, and some other programming
                courses enabled me in thriving on solving real-world problems
                through code. I believe in writing code that are neat and
                modular as well as staying up-to-date with the latest industry
                trends.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or refining my skills
                through continuous learning.
              </p>
              <div className="tech-stack">
                {techStack.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
