import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Products({ data = [] }) {
  return (
    <>
      <div>Products Page</div>
      <Row className="align-items-stretch ">
        {data.length > 0 &&
          data.map((product, i) => (
            <Col key={i} xl={3} lg={4} md={6} sm={12}>
              <Card style={{ width: "18rem" }}>
                <figure className="prod-image">
                  <Card.Img variant="top" src={`${product.image}`} />
                </figure>

                <Card.Body>
                  <Card.Title className="limit-1">{product.title}</Card.Title>
                  <Card.Text className="limit-3">
                    {product.description}
                  </Card.Text>
                  <Card.Text>Category: {product.category}</Card.Text>
                  <Card.Text>Price: {product.price}</Card.Text>
                  <Link to={`/product/${product.id}`}>
                    <Button variant="primary">See More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </>
  );
}

export default Products;
