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
import useHandlingProducts from "./hooks/useHandlingProducts";
import Wraper from "./Wraper";

function App() {
  const { products, isLoading, isError } = useHandlingProducts();

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
          <Route
            path="/products"
            element={
              <Wraper isLoading={isLoading} isError={isError}>
                <Products data={products} />
              </Wraper>
            }
          />
          <Route
            path="/product/:id"
            element={
              <Wraper isLoading={isLoading} isError={isError}>
                <Product getProduct={getProduct} />
              </Wraper>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
