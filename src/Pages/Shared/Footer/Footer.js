import React from "react";
import { Col, Container, Row } from "react-bootstrap";


const Footer = () => {
  return (
    <div>
      
        <Container fluid className="bg-dark">
          <Row>
            <Col md={4} className="p-5">
              <div>
                <p className="fs-5 text-info">
                  <i className="fa-2x fab fa-gripfire"></i> Greninja Trip <br />{" "}
                  <small className="lead brand">
                    # marge with nature
                  </small>
                </p>
              </div>
              <br />
              <p className="text-info">
                Better Arrangements <br /> Ensured
                Safety <br /> Maximum Comfortness <br />
              </p>
            </Col>
            <Col md={4} className="p-5 text-info">
              <h5>
                <i className="fas fa-2x fa-location-arrow"></i> Our Head Office
              </h5>
              <p className="mt-4">
                121, Chattagram Nasirabad <br /> Nasirabad Residential R/A{" "}
                <br /> Chattagram, Bangladesh
              </p>
              <p>
                Email Us: support@greninja.com <br /> Phone: +183 80 01 3921
              </p>
            </Col>
            <Col md={4} className="p-5 text-info">
              <h5>
                <i className="far fa-2x fa-clock"></i> Working Time
              </h5>
              <p className="mt-4">
                Mon - Wed - 10:00 AM - 6:00 PM <br />
                Thursday - 9:00 AM - 7:30 PM <br />
                Friday - 3:30 AM - 8:30 PM <br />
                Sat - Sun - Closed
              </p>
            </Col>
          </Row>
          <p className="text-center text-secondary mb-0 copyright fs-5">
            Greninja Trip &copy; All Rights Reserved | | Saidul Karim | | 2022
          </p>
        </Container>
      </div>
  );
};

export default Footer;