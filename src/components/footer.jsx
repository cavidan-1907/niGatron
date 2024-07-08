import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} className="footer-column">
            <h5>About Us</h5>
            <p>We provide the best online learning experience with a variety of courses.</p>
          </Col>
          <Col md={4} className="footer-column">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" className="social-icon"><FaFacebook /></a>
              <a href="https://twitter.com" className="social-icon"><FaTwitter /></a>
              <a href="https://instagram.com" className="social-icon"><FaInstagram /></a>
              <a href="https://linkedin.com" className="social-icon"><FaLinkedin /></a>
            </div>
          </Col>
          <Col md={4} className="footer-column">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="footer-copy">&copy; 2024 Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
