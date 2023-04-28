import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsDetails = ({ news }) => {
  const { title, _id, category_id, details, image_url } = news;
  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="danger">
            <FaArrowLeft /> All news in this category
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default NewsDetails;
