import React from "react";
import "../Css/Services.css";
import { servicesData } from "../Data";
import ServicesCard from "../Components/ServicesCard";
import { Container, Row, Col } from "react-bootstrap";

function Services() {
  return (
    <>
      <Container className="my-5">
        <h1>Services - Adezon Cloud Services</h1>
        <Row>
          {servicesData.map((service, index) => (
            <Col md={6} lg={4} key={index}>
              <ServicesCard
                imageSrc={service.imageSrc}
                title={service.title}
                description={service.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Services;
