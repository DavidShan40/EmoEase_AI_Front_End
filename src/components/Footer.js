import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      {/* <Row>
        <Col className="footer-links" style={{ textAlign: 'center', marginTop: '10px' }}>
          <a href="#terms" style={{ margin: '0 15px', color: 'white' }}>Terms of Use</a>
          <a href="#privacy" style={{ margin: '0 15px', color: 'white' }}>Privacy Policy</a>
          <a href="#faq" style={{ margin: '0 15px', color: 'white' }}>FAQ</a>
        </Col>
      </Row> */}
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Emoease</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/DavidShan40"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/taoshan88/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
