import React from "react";
import { Card, Col, Container, Row, Image } from "react-bootstrap";
import founderImage from "../assets/images/founder.jpg";
import marketingImage from "../assets/images/marketing.jpg";
import operationHeadImage from "../assets/images/operation-head.jpg";
import customerSupportImage from "../assets/images/customer-support.jpg";
import "../Css/Aboutus.css";

const AboutUs = () => {
  return (
    <Container>
      <section className="team-section my-5">
        <h2 className="text-center">Meet Our Team</h2>

        <Row className="my-5">
          <Col className="align-items-center justify-content-center d-flex">
            <Card className="border-0 founder-card">
              <Image src={founderImage} className="founder-image" />
              <Card.Body className="">
                <Card.Text>
                  <strong>John Doe</strong>
                  <br />
                  Founder & CEO
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={4} className="">
            <Card className="border-0">
              <Image src={marketingImage} className="team-image" />
              <Card.Body>
                <Card.Text>
                  <strong>Jane Smith</strong>
                  <br />
                  Marketing Director
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="">
            <Card className="border-0">
              <Image src={operationHeadImage} className="team-image" />
              <Card.Body>
                <Card.Text>
                  <strong>Bob Johnson</strong>
                  <br />
                  Head of Operations
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="border-0">
              <Image src={customerSupportImage} className="team-image" />
              <Card.Body>
                <Card.Text>
                  <strong>Alice Brown</strong>
                  <br />
                  Customer Support Manager
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      <Row className="text-center my-5">
        <Col md={4}>
          <h2>About Adezon</h2>
          <p>
            Your go-to online marketplace for quality products. At Adezon, we
            strive to provide a seamless shopping experience, connecting buyers
            with a wide range of products from trusted sellers. Our commitment
            is to deliver excellence and satisfaction to our customers.
          </p>
        </Col>
        <Col md={4}>
          <h2>Our Mission</h2>
          <p>
            At Adezon, our mission is to empower individuals and businesses by
            providing a platform that fosters reliable and efficient
            transactions. We aim to create a vibrant community where buyers and
            sellers can engage in a secure and enjoyable online shopping
            experience.
          </p>
        </Col>
        <Col md={4}>
          <h2>Our Vision</h2>
          <p>
            At Adezon, our vision is to be a leading online marketplace known
            for innovation and customer satisfaction. We envision a future where
            our platform sets the standard for e-commerce excellence, creating
            opportunities and value for both buyers and sellers globally.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
