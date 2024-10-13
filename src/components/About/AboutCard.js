import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi!, I'm <span className="purple">Paola Vazquez </span>
            from <span className="purple"> Mexico City, Mexico.</span>
            <br />
            I'm currently working at Globant in Autodesk account.
            <br />
            I have a Computer Science master degree
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">Hiking</li>
            <li className="about-activity">Travel</li>
            <li className="about-activity">Diving</li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
