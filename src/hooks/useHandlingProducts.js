import { useState, useEffect } from "react";
import axios from "axios";

function useHandlingProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getAllProducts() {
      try {
        setIsLoading(true);
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
        setIsError(false);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }

    getAllProducts();
  }, []);
  return { products, isLoading, isError };
}

export default useHandlingProducts;
