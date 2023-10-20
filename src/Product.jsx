import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Product({ getProduct, isLoading }) {
  const { id } = useParams();
  const product = getProduct(+id);
  if (isLoading) return <p style={{ fontSize: "60px" }}> Loading ...</p>;
  return (
    <Container>
      {product ? (
        <Row>
          <Col>
            <figure>
              <img src={`${product.image}`} alt="" />
            </figure>
          </Col>
          <Col>
            <div>{product.title}</div>;
          </Col>
        </Row>
      ) : (
        <p>no product has founded</p>
      )}
    </Container>
  );
}

export default Product;
