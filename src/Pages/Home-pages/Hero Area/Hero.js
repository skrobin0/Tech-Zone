import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slogan from "./Slogan";
import "animate.css";
import "./Hero.css";
import Carousel from "./Carousel";

const Hero = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col className="background-img"></Col>
        </Row>
        <Row>
          <div
            style={{ marginTop: "-510px" }}
            className="background-text text-center"
          >
            <h1 className="animate__animated animate__bounce">
              Stay With Tech <br /> World
            </h1>
          </div>
        </Row>
        <Row>
          <Col>
            <Slogan></Slogan>
          </Col>
          <Col>
            <Carousel></Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
