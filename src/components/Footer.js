import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
    AiFillInstagram,
    AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" >
          <h3><strong>Yuxiang Kang</strong></h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul className="footer-icons">



                      <li className="social-icons">
                          <a
                              href="mailto:yuk007@ucsd.edu"
                              style={{ color: "white" }}
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              <AiOutlineMail />
                          </a>
                      </li>

                      <li className="social-icons">
                          <a
                              href="https://www.linkedin.com/in/yuxiang-kang-1036b7249/"
                              style={{ color: "white" }}
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              <FaLinkedinIn />
                          </a>
                      </li>
                      <li className="social-icons">
                          <a
                              href="https://www.instagram.com/ins1912923753"
                              style={{ color: "white" }}
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              <AiFillInstagram />
                          </a>
                      </li>

          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
