import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Product from "./Product";
import Products from "./Products";
import Counter from "./Counter";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  function getProduct(id) {
    return products.find((el) => el.id === id);
  }

  return (
    <>
      <Header />
      <div className="d-flex justify-content-center align-items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/products" element={<Products data={products} />} />
          <Route
            path="/product/:id"
            element={<Product getProduct={getProduct} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
