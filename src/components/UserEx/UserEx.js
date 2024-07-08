import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import petz from "../../Assets/Ux/petz.png";
import amazon from "../../Assets/Ux/amazon.png";
import portfolio from "../../Assets/Ux/portfolio.png";

function UserEx() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="green">UI/UX Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my few User Experience designs.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={petz}
              isBlog={false}
              title="Pets Rescue and Training"
              summary="The Petz app simplifies connecting people with the perfect pets for their lives, whether they're seeking emotional support or a furry partner for adventure (including search and rescue)."
              demoLink="https://shorturl.at/1t7WJ"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              isBlog={false}
              title="Ukraine Relief Initiative"
              summary="The Ukraine relief project aims to help the those impacted by the crisis in Ukraine. The focus is to partner with Amazon with it's global humanitarian partners to provide immediate relief in Ukraine"
              demoLink="https://shorturl.at/upoaE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Petz Portfolio"
              summary="This web based portfolio's focus is to detail the design process in the making of the Petz app with Handsketching, High Fidelity prototypes and User Testing"
              demoLink="https://shorturl.at/IIo6S"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default UserEx;
