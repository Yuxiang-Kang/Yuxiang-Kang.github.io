import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Particle from "../Particle";

import Techstack from "./Techstack";

import Toolstack from "./Toolstack";

function About() {
    return (



    <Container fluid className="about-section">
          <Particle />

          <Container>


              <Row>
              <Col md={12} className="home-about-social">

                      <h1 style={{ fontSize: "2.5em", paddingBottom: "20px" }}>
                          ABOUT<strong className="purple"> ME</strong>
                      </h1>




                      <p className="home-about-body" >

                          Hey there! I'm
                          <b className="purple">&nbsp;Yuxiang Kang</b>
                          , a Mechanical Engineer. I've obtained my Bachelor's degree in
                          <b className="purple">&nbsp;Mechanical Engineering&nbsp;</b>
                          from
                          <b className="purple"> Tsinghua University</b>
                          <br/>
                          and am working on an Mechanical Engineering
                          <b className="purple">&nbsp;Master's degree</b> in
                          <b className="purple">&nbsp;UC San Diego.</b>
                          <br />
                          <br />
                          In school I've
                          <b className="purple">&nbsp;designed and manufactured </b>
                          several mechanical devices either for commercial or competition use.
                          I've also worked as a mechanical engineer during an internship in
                          <b className="purple"> NAURA Technology Group.</b>
                          <br />
                          <br />
                          I'm now looking for a grad position about mechanical design, finite element analysis(FEA), tolerence analysis or robotics.
                          Feel free to
                          <b className="purple"> contact </b>
                          me!
                          



                      </p>




              </Col>
              </Row>







              <br />
              <br />
              <br />







        

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />




      </Container>
    </Container>
    );

}

export default About;
