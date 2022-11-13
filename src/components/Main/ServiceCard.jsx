import React from "react";
import { Card, Col } from "react-bootstrap";

const ServiceCard = ({data}) => {
    const {title,description,img}=data;
  return (
    <Col lg={4} md={6} sm={12} className="margin-top">
      <Card className="shadow-sm p-3 mb-5 bg-white rounded border border-white">
        <img src={img} alt="" className="service-img mx-auto" />
          <Card.Body>
            <Card.Title className="text-center mt-2">{title}</Card.Title>
            <Card.Text className="text-center mt-2">{description}</Card.Text>
          </Card.Body>      
      </Card>
    </Col>
  );
};

export default ServiceCard;
