import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaWhatsapp,
  FaPaperPlane,
  FaCheck,
} from "react-icons/fa";

const contactLinks = [
  {
    icon: <FaGithub />,
    title: "GitHub",
    subtitle: "github.com/Savvydon",
    href: "https://github.com/Savvydon",
  },
  {
    icon: <FaLinkedinIn />,
    title: "LinkedIn",
    subtitle: "Connect professionally",
    href: "#",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    subtitle: "donsave4real@gmail.com",
    href: "mailto:donsave4real@gmail.com",
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    subtitle: "+234 708 755 7625",
    href: "https://wa.me/2347087557625",
  },
  // {
  //   icon: <FaTwitter />,
  //   title: 'Twitter',
  //   subtitle: 'Follow my journey',
  //   href: '#'
  // }
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      e.target.reset();
    }, 3000);
  };

  return (
    <section id="contact">
      <Container>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Get In Touch</span>
          <h2>
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p>Have a project in mind? I'd love to hear about it.</p>
        </motion.div>

        <Row className="contact-grid">
          <Col lg={6}>
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3>Let's Create Something Amazing</h3>
              <p>
                Whether you have a project idea, want to collaborate, or just
                want to say hi — my inbox is always open.
              </p>
              <div className="contact-links">
                {contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="contact-link"
                  >
                    <div className="link-icon">{link.icon}</div>
                    <div>
                      <div className="link-text">{link.title}</div>
                      <div className="link-sub">{link.subtitle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Form onSubmit={handleSubmit} className="contact-form">
                <Form.Group className="form-group">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="John Doe" required />
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Project Collaboration"
                    required
                  />
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Tell me about your project..."
                    required
                  />
                </Form.Group>
                <Button
                  type="submit"
                  className={`btn-primary w-100 ${submitted ? "btn-success-custom" : ""}`}
                >
                  {submitted ? (
                    <>
                      <FaCheck /> Message Sent!
                    </>
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </Button>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
