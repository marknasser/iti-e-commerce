import { useParams } from "react-router-dom";

function Product({ getProduct }) {
  const { id } = useParams();
  const product = getProduct(+id);
  return (
    <>
      <figure>
        <img src={`${product.image}`} alt="" />
      </figure>
      <div>{product.title}</div>;
    </>
  );
}

export default Product;
