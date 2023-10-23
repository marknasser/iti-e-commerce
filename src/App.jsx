import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

// pages
import Products from "./pages/Products";
import Counter from "./pages/Counter";
import Product from "./pages/Product";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

// layoouts - components - hooks
import Wraper from "./layouts/Wraper";
import Header from "./components/Header";
import useHandlingProducts from "./hooks/useHandlingProducts";

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
          <Route
            path="/"
            element={
              <Wraper isLoading={isLoading} isError={isError}>
                <Products data={products} />
              </Wraper>
            }
          />
          <Route path="/counter" element={<Counter />} />

          <Route
            path="/product/:id"
            element={
              <Wraper isLoading={isLoading} isError={isError}>
                <Product getProduct={getProduct} />
              </Wraper>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
