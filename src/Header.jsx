import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="d-flex p-3 bg-black gap-5">
      <Link className="text-light text-decoration-none" to={"/"}>
        {" "}
        Home
      </Link>
      <Link className="text-light text-decoration-none" to={"/products"}>
        {" "}
        products
      </Link>
      <Link className="text-light text-decoration-none" to={"/about"}>
        {" "}
        About Us
      </Link>
      <Link className="text-light text-decoration-none" to={"/counter"}>
        {" "}
        Donate
      </Link>
    </div>
  );
}

export default Header;

// function HeaderMain(){
//   return
// }
