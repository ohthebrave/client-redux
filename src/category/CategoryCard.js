import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./category.css";


function CategoryCard({ category }) {
  return (
    <Link
      to={`category/${category}`}
      className="text-decoration-none text-dark"
    >
      <Card className="custom-card">
        <Card.Body>
          <Card.Text className="text-capitalize">{category.name}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default CategoryCard;