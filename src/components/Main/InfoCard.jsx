import React from "react";
import { Card, Col } from "react-bootstrap";

const InfoCard = ({ data }) => {
  const { name, description, icon, bgClass } = data;
  return (
    <Col lg={4} md={6} sm={12} className="mt-3">
      <Card className={`${bgClass} card-size`}>
        <div className="d-flex p-4">
          <div className="d-flex align-items-center">
            <Card.Img src={icon} className="info-image" />
          </div>
          <Card.Body>
            <Card.Title className="text-white">{name}</Card.Title>
            <Card.Text className="text-white">{description}</Card.Text>
          </Card.Body>
        </div>
      </Card>
    </Col>
  );
};

export default InfoCard;
