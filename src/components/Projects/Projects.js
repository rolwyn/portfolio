import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kpit from "../../Assets/Projects/kpit.png";
// import CitiusTech from "../../Assets/Projects/CitiusTech_Logo.png";
import peapod from "../../Assets/Projects/peapod.png";
import aggrepay from "../../Assets/Projects/aggrepay.png";
import getsethome from "../../Assets/Projects/getsethome.png";
import sqcm from "../../Assets/Projects/sqcm.png";
import cloud from "../../Assets/Projects/cloud.png";
import insulin from "../../Assets/Projects/insulin.png";
import eventracker from "../../Assets/Projects/eventracker.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="green">Professional Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my few professional acheivements.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/*<Col md={4} className="project-card">
            <ProjectCard
              imgPath={CitiusTech}
              isBlog={false}
              title="Front End Developer – CitiusTech, USA "
              summary="CitiusTech enables healthcare organizations (payers, providers, medical tech and life sciences companies) powering the shift to next-gen digital technology."
              point1="● Crafted responsive and intuitive web application leveraging React.js and Tailwind to improve overall user engagement"
              point2="●Seamlessly integrated GraphQL to expedite data querying and presentation on web interfaces to improve application performance."
              point3="● Assembled the infrastructure using Cloud tools like Google Cloud and Terraform"
            />
          </Col>*/}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={peapod}
              isBlog={false}
              title="Front-End Co-op - Peapod Digital Labs (US)"
              summary="Peapod Digital Labs is the ecommerce engine of Ahold Delhaize USA, one of the nation's largest grocery retail groups"
              point1="●	Spearheaded development of highly reactive reusable components using VueJs and Vuex, reducing code size and backlog by 30%"
              point2="●	Enhanced code efficiency for grocery store websites like Shop&Shop, Martins, Giants, and Food Lion, reducing redundancy"
              demoLink="https://stopandshop.com/savings/coupons/browse"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aggrepay}
              isBlog={false}
              title="Software Engineer - Aggrepay Payment Solutions (Mumbai, IN)"
              summary="AggrePay offers a comprehensive and secure range of payment channels to simplify making payments or receiving them."
              point1="●	Developed admin and merchant dashboard UI for nationalized banks using HTML, CSS, and JavaScript to elevate user experience"
              point2="●Architected the 'buy now pay later' feature using React and NodeJS, leading to a substantial 24% surge in customer spending"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kpit}
              isBlog={false}
              title="Software Engineer - KPIT Technologies (Pune, IN)"
              summary="KPIT is a global partner to the Automotive Industry and Mobility Ecosystem for making software-defined vehicles a reality."
              point1="●	Incorporated a ReactJS dashboard to visualize Carla simulation data for analyzing and validating the autonomous driving algorithms"
              point2="● Established a web-based solution in Angular 4 for Cummins India Pvt. Ltd. to collect and show data for power systems"
              point3="● Developed new features in HTML, CSS and JS for Annotation and Labelling Service tool resulting in a 33.3% boost in productivity"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={getsethome}
              isBlog={false}
              title="GetSetHome.com (Mumbai, IN)"
              summary="GetSetHome is a platform for managed & shared rental solutions that provide access to good quality shared accommodations for long term stays."
              point1="● Designed SEO blog module with HTML, CSS, JavaScript, and Schema.org, leading to improved site ranking and appearance"
            />
          </Col>
        </Row>
      </Container>
      {/* Professional project*/}
      {/* ghLink="https://github.com/soumyajit4419/Bits-0f-C0de" demoLink="https://blogs.soumya-jit.tech/"*/}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="green">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sqcm}
              isBlog={false}
              title="Student Hub Automation"
              summary="A fully automated course registration system using Selenium Test Automation Framework Utilized Java and TestNG suite for scripting and generating reports post each testing phase to indicate success or failure"
              ghLink="https://github.com/rolwyn/selenium-automation"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloud}
              isBlog={false}
              title="Cloud Lens Image Store"
              summary="A highly scalable infrastructure as code utilizing CloudFormation to deploy a Nodejs application along with PostgreSQL incorporating auto-scaling, Load balancing, DNS, automated CI/CD, monitoring, security, and automated rollback features. It Leveraged GitHub actions along with HCL Packer and AWS Code deploy to perform CI/CD actions using GitHub workflow."
              ghLink="https://github.com/rolwyn/infrastructure"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eventracker}
              isBlog={false}
              title="Event Tracker"
              summary="Event tracker which helps track live events around the Northeastern University campus. It is built using ReactJS/Redux, NodeJs, and MongoDB, adhering to the MVC design pattern, a search filter API for searching different real time events occurring throughout the campus based on tags and existing keywords."        
              ghLink="https://github.com/rolwyn/final-project-team-7"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={insulin}
              isBlog={false}
              title="Insulin Delivery System"
              summary="A scalable and large-scale Java-based system for an Insulin distribution chain with a seamless restocking mechanism and a review system to track client satisfaction using MVC design pattern."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
