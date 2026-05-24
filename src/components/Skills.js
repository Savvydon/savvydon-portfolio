import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";

const skillsData = [
  {
    icon: <FaReact />,
    title: "React.js",
    description:
      "Building dynamic, component-based UIs with hooks, context, and modern patterns",
    percent: 90,
    color: "#818cf8",
  },
  {
    icon: <FaJs />,
    title: "JavaScript (ES6+)",
    description:
      "Modern JavaScript with async/await, modules, and functional programming",
    percent: 85,
    color: "#22d3ee",
  },
  {
    icon: <FaHtml5 />,
    title: "HTML5 & CSS3",
    description:
      "Semantic markup, responsive design, animations, and modern CSS features",
    percent: 80,
    color: "#f9a8d4",
  },
  {
    icon: <FaNodeJs />,
    title: "Node.js & Express",
    description: "Server-side JavaScript, REST APIs, and backend development",
    percent: 75,
    color: "#4ade80",
  },
  {
    icon: <FaPython />,
    title: "Python",
    description:
      "Data processing, scripting, automation, and backend API development with FastAPI, async endpoints, and modern Python patterns",
    percent: 70,
    color: "#fbbf24",
  },
  {
    icon: <FaGitAlt />,
    title: "Git & GitHub",
    description:
      "Version control, collaboration, CI/CD workflows, and open-source contribution",
    percent: 70,
    color: "#fb923c",
  },
  {
    icon: <FaDatabase />,
    title: "Databases",
    description:
      "MongoDB, working with data models, queries, and database design",
    percent: 65,
    color: "#c084fc",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-secondary-section">
      <Container>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">My Expertise</span>
          <h2>
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p>Tools and technologies I use to bring ideas to life</p>
        </motion.div>

        <Row className="skills-grid">
          {skillsData.map((skill, index) => (
            <Col lg={4} md={6} key={index}>
              <motion.div
                className="skill-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className="skill-icon"
                  style={{ color: skill.color, background: `${skill.color}20` }}
                >
                  {skill.icon}
                </div>
                <h4>{skill.title}</h4>
                <p>{skill.description}</p>
                <div className="skill-bar">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                  />
                </div>
                <div className="skill-percent">{skill.percent}%</div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
