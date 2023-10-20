import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Product({ getProduct }) {
  const { id } = useParams();
  const product = getProduct(+id);
  return (
    <Container>
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
    </Container>
  );
}

export default Product;
