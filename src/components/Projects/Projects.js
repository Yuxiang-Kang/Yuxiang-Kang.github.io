import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import plugging from "../../Assets/Projects/Plugging-3.png";
import fish from "../../Assets/Projects/fish-1.png";
import car from "../../Assets/Projects/car-1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on in UCSD and Tsinghua University.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={9} className="project-card">
            <ProjectCard
              imgPath={plugging}
              isBlog={false}
                          title="Disc Type Plugging Device for Gas Pipeline"
                          description1="
Mechanical device to plug gas pipeline under 4 atm pressure, operated manually."
                          description2="
Individual Graduation Project, designing an eccentric mechanism including 30 non-standard parts in SOLIDWORKS."
                          description3="
Simulated the deformation and contact pressure of the rubber disc in ANSYS, proving the design's plugging ability."
                          description4="
Calculated the stress in heavy-duty parts and drew the stress-movement curve of the plugging process via MATLAB"

                          
                      />

                  </Col>

                  <Col md={9} className="project-card">
                      <ProjectCard
                          imgPath={fish}
                          isBlog={false}
                          title="Bionic Fish Robot"
                          description1="
Underwater robot inspired by manta ray and squad."
                          description2="
Used 2 motors to power 14 fin rays through crank rocker mechanisms"
                          description3="
Set up an embedded control system based on a STM32 MCU and sent instructions via Bluetooth serial part."
                          description4="
Used double O-rings design to keep water-proof at the transmission shaft."
                          description5="
The prototype could move forward, reverse, turn and roll in water with its fins and tails."


                      />

                  </Col>

          <Col md={9} className="project-card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
                          title="Automatic self-tracing electric vehicle"
                          description1="
Electric vehicle controlled by a single-chip-microcomputer, able to trace tracks and avoid obstacles automatically."
                          description2="
Collected road information with a 128 pixel CCD and identified obstacles with 4 ultrasonic sensors."
                          description3="
Applied PID algorithm to PWM wave function which. controls the motors."
            />
          </Col>





     
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
