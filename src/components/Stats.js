import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaFolderOpen,
  FaCodeBranch,
  FaStar,
  FaCalendarAlt,
} from "react-icons/fa";

const statsData = [
  {
    icon: <FaFolderOpen />,
    number: 9,
    suffix: "+",
    label: "Repositories",
    color: "#818cf8",
  },
  {
    icon: <FaCodeBranch />,
    number: 20,
    suffix: "+",
    label: "Total Commits",
    color: "#22d3ee",
  },
  {
    icon: <FaStar />,
    number: 5,
    suffix: "+",
    label: "Live Projects",
    color: "#fbbf24",
  },
  {
    icon: <FaCalendarAlt />,
    number: 2021,
    label: "Started Coding",
    color: "#f472b6",
  },
];

const Stats = () => {
  return (
    <section id="stats">
      <Container>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">GitHub Activity</span>
          <h2>
            My <span className="gradient-text">GitHub</span> Stats
          </h2>
          <p>A snapshot of my open-source contributions</p>
        </motion.div>

        <Row className="stats-grid justify-content-center">
          {statsData.map((stat, index) => (
            <Col lg={3} md={6} key={index}>
              <motion.div
                className="stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="stat-icon" style={{ color: stat.color }}>
                  {stat.icon}
                </div>
                {/* <div className="stat-number">
                  <CountUp
                    end={stat.number}
                    duration={2.5}
                    suffix={stat.suffix || ""}
                  />
                </div> */}
                <div className="stat-number">
                  {stat.label === "Started Coding" ? (
                    <span>2021</span>
                  ) : (
                    <CountUp
                      end={stat.number}
                      duration={2.5}
                      suffix={stat.suffix || ""}
                    />
                  )}
                </div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Stats;
