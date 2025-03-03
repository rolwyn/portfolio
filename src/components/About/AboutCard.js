import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="green">Rolwyn Quadras </span>
            currently living in the <span className="green"> United States.</span>
            <br />
            I am currently looking for opportunities in <span className="green">Software Development</span>.
            <br />
            I have completed <span className="green">Master's (Ms) in Information Systems</span> from <span className="green">Northeastern University, Boston (Dec '23)</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading about trends
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p className="green">
            "Create with purpose, build with impact!"{" "}
          </p>
          <footer className="blockquote-footer">Rolwyn</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
