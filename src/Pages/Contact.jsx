import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../Css/Contactus.css";
import { questionsData } from "../Data";

const Contact = () => {
  return (
    <Container>
      <section className="contact-form my-5">
        <h2 className="text-center">Send us an Inquiry</h2>
        <Form>
          <Form.Group controlId="name" className="my-3">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              className="mb-3"
              required
            />
          </Form.Group>

          <Form.Group controlId="message">
            <Form.Label>Message:</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Enter your message"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="my-3 w-100">
            Submit
          </Button>
        </Form>
      </section>

      <section className="faq-container my-5">
        <h2 className="text-center">Frequently Asked Questions</h2>
        <Row>
          {questionsData.map((question, index) => (
            <Col md={6} key={index} className="mb-3">
              <div className="faq-item">
                <p className="question">{question}</p>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      <section className="contact-map my-5">
        <h2 className="text-center">Our Location</h2>
        <div className="map-embed">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.616718053096!2d-80.54110262387609!3d43.48946857111034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf3e3fe954369%3A0x7838679d960da932!2s133%20Longwood%20Dr%2C%20Waterloo%2C%20ON%20N2L%204B8!5e0!3m2!1sen!2sca!4v1700981577079!5m2!1sen!2sca"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location"
          ></iframe>
        </div>
      </section>
    </Container>
  );
};

export default Contact;
