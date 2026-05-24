import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  ButtonGroup,
  Button,
  Image,
} from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHospital,
  FaHandSparkles,
  FaStopwatch,
  FaClock,
  FaUsers,
  FaSignInAlt,
  FaShieldAlt,
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaCodeBranch,
  FaGlobe,
} from "react-icons/fa";

/*
  TO ADD REAL SCREENSHOTS:
  1. Take screenshots of your projects (800x500px recommended)
  2. Save them to: public/images/
  3. Update the 'image' field below from placeholder to: "/images/your-screenshot.jpg"
*/

const projectsData = [
  {
    id: 1,
    title: "NAF PFT System",
    description:
      "A comprehensive Nigerian Air Force Physical Fitness Test management system with role-based dashboards (Evaluator, Admin, Super Admin), certificate generation, analytics charts, and personnel management.",
    tags: ["React", "Python", "Postgres", "Full-Stack"],
    category: "system",
    icon: <FaShieldAlt />,
    image: "/images/naf.png",
    github: "https://pftest-five.vercel.app/",
    live: null,
    stats: { type: "System", status: "Production" },
  },
  {
    id: 2,
    title: "Hospital Management System",
    description:
      "A comprehensive healthcare management platform built to streamline hospital operations, patient records, and administrative workflows.",
    tags: ["React", "Python", "Postgres", "Full-Stack"],
    category: "system",
    icon: <FaHospital />,
    image: "/images/hms.png",
    github: "https://github.com/Savvydon/hms",
    live: null,
    stats: { type: "HMS", status: "Active" },
  },
  {
    id: 3,
    title: "SoftTouch",
    description:
      "An elegant web application showcasing modern UI/UX principles with smooth interactions and responsive design. Sole purpose is to create awareness of a brand services and the call for booking.",
    tags: ["React", "JavaScript", "Web App"],
    category: "web",
    icon: <FaHandSparkles />,
    image: "/images/softTouch.png",
    github: "https://softtouch-ochre.vercel.app/",
    live: null,
    stats: { type: "SoftTouch", status: "Active" },
  },
  {
    id: 4,
    title: "Music portfolio",
    description:
      "An elegant web application showcasing modern UI/UX principles with smooth interactions and responsive design. Sole purpose is to create an awareness of a musician portfolio, displaying his skills and services.",
    tags: ["React", "JavaScript", "Web App"],
    category: "web",
    icon: <FaHandSparkles />,
    image: "/images/musicPortfolio.png",
    github: "https://crownpianostudio.vercel.app/",
    live: null,
    stats: { type: "Music-portfolio", status: "Active" },
  },
  {
    id: 5,
    title: "Stop Clock",
    description:
      "A sleek, fully-functional stopwatch application built with React. Features precise timing, lap tracking, and a clean modern interface.",
    tags: ["React", "JavaScript", "Live"],
    category: "tool",
    icon: <FaStopwatch />,
    image: "images/timer.png",
    github: "https://savvydon.github.io/Stop-Clock/",
    live: "https://savvydon.github.io/Stop-Clock/",
    stats: { type: "Live", status: "Tool" },
  },
  {
    id: 6,
    title: "Digital Clock",
    description:
      "A real-time digital clock with accurate time updates using React and Vite. Clean, minimalist design with smooth animations.",
    tags: ["React", "Vite", "Live"],
    category: "tool",
    icon: <FaClock />,
    image: "images/clock.png",
    github: "https://savvydon.github.io/Digital-Clock/",
    live: "https://savvydon.github.io/Digital-Clock/",
    stats: { type: "Live", status: "Tool" },
  },
  {
    id: 7,
    title: "FriendLists",
    description:
      "An interactive friend management app allowing users to add, delete, and organize their contacts. Built with React state management.",
    tags: ["React", "Vite", "Live"],
    category: "web",
    icon: <FaUsers />,
    image: "images/friendsList.png",
    github: "https://savvydon.github.io/FriendLists/",
    live: "https://savvydon.github.io/FriendLists/",
    stats: { type: "Live", status: "Social" },
  },
  // {
  //   id: 7,
  //   title: "Login Web",
  //   description:
  //     "A beautifully designed login page with modern CSS styling, form validation UI, and responsive layout for any device.",
  //   tags: ["HTML", "CSS", "UI"],
  //   category: "web",
  //   icon: <FaSignInAlt />,
  //   image: "https://placehold.co/800x500/1a1a2e/fb923c?text=Login+Web",
  //   github: "https://github.com/Savvydon/loginweb",
  //   live: null,
  //   stats: { type: "CSS", status: "Responsive" },
  // },
];

const categories = [
  { key: "all", label: "All Projects" },
  { key: "web", label: "Web Apps" },
  { key: "tool", label: "Tools" },
  { key: "system", label: "Systems" },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="bg-secondary-section">
      <Container>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Portfolio</span>
          <h2>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p>Some of my best work, built with passion and precision</p>
        </motion.div>

        <div className="projects-filter">
          <ButtonGroup>
            {categories.map((cat) => (
              <Button
                key={cat.key}
                className={`filter-btn ${activeFilter === cat.key ? "active" : ""}`}
                onClick={() => setActiveFilter(cat.key)}
              >
                {cat.label}
              </Button>
            ))}
          </ButtonGroup>
        </div>

        <Row className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <Col lg={4} md={6} key={project.id}>
                <motion.div
                  className="project-card"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="project-image">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="project-screenshot"
                      fluid
                    />
                    <div className="project-icon-overlay">{project.icon}</div>
                    <div className="project-overlay">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Live Demo"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Code"
                      >
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                  <div className="project-content">
                    <div className="project-tags">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-footer">
                      <div className="project-stats">
                        <span>
                          {project.stats.status === "Live" ||
                          project.stats.status === "Production" ? (
                            <>
                              <FaGlobe /> {project.stats.status}
                            </>
                          ) : (
                            <>
                              <FaCodeBranch /> {project.stats.type}
                            </>
                          )}
                        </span>
                        <span>
                          <FaStar /> {project.stats.status}
                        </span>
                      </div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        View Project <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </AnimatePresence>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
