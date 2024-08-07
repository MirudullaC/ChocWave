// ServicesCard.jsx
import React from "react";
import { Card } from "react-bootstrap";

function ServicesCard({ imageSrc, title, description }) {
  return (
    <>
      <Card className="my-4 services-card">
        <Card.Img
          variant="top"
          src={imageSrc}
          alt={title}
          className="services-card-image"
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default ServicesCard;
