import React from "react";
import { Container, Col, Row } from "reactstrap";
import "./LandingPage.css";
const crypto = require("crypto");

const getGravatar = () => {
  let md5 = crypto
    .createHash("md5")
    .update("mdyamin.drzee@gmail.com")
    .digest("hex");
  return "https://gravatar.com/avatar/" + md5 + "?s=200";
};

const LandingPage = () => {
  return (
    <div className="landing-page-grid">
      <Container>
        <Row>
          <Col>
            <img
              src={getGravatar()}
              className="landing-page-avatar"
              alt="avatar"
            />

            <div className="landing-page-banner">
              <h1>Software Developer</h1>
              <hr />
              <p>HTML/CSS | Javascript | React | NodeJS | MongoDB</p>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/yamin-abdul-razak-695997b8/"
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin" />
                </a>

                <a
                  href="https://www.github.com/yaminmhd"
                  target="_blank"
                  without
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
