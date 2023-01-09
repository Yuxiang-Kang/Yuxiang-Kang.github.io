import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";
import SW from "../../Assets/logos/SolidWorks-Logo.png";
import CAD from "../../Assets/logos/Autocad-Logo.png"
import creo from "../../Assets/logos/CREO-Logo.png"
import catia from "../../Assets/logos/CATIA-Logo.png"
import ansys from "../../Assets/logos/ANSYS-Logo.png"
import abaqus from "../../Assets/logos/abaqus-Logo.png"
import comsol from "../../Assets/logos/comsol-Logo.png"
import matlab from "../../Assets/logos/matlab-Logo.png"

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
              <img src={SW} className="img-fluid" alt="avatar" />

              <h1 style={{ fontSize: "0.02em"}}>
                  <br />
                  <b>SOLIDWORKS</b>
              </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
              <img src={CAD} className="img-fluid" alt="avatar" />

              <h1 style={{ fontSize: "0.02em" }}>
                  <br />
                  <b>AutoCAD</b>
              </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
              <img src={creo} className="img-fluid" alt="avatar" />

              <h1 style={{ fontSize: "0.02em" }}>
                  <br />
                  <b>CREO</b>
              </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
              <img src={catia} className="img-fluid" alt="avatar" />
              <h1 style={{ fontSize: "0.02em" }}>
                  <br />
                  <b>CATIA</b>
              </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
              <img src={ansys} className="img-fluid" alt="avatar" />
              <h1 style={{ fontSize: "0.02em" }}>
                  <br />
                  <b>ANSYS</b>
              </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
              <img src={abaqus} className="img-fluid" alt="avatar" />
              <h1 style={{ fontSize: "0.02em" }}>
                  <br />
                  <b>Abaqus</b>
              </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
              <img src={comsol} className="img-fluid" alt="avatar" />
              <h1 style={{ fontSize: "0.02em" }}>
                  <br />
                  <b>COMSOL</b>
              </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">

              <CgCPlusPlus />

      </Col>
      <Col xs={4} md={2} className="tech-icons">
              <img src={matlab} className="img-fluid" alt="avatar" />
              <h1 style={{ fontSize: "0.02em" }}>
                  <br />
                  <b>Matlab</b>
              </h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
              <DiPython />
      </Col>
    </Row>
  );
}

export default Techstack;
