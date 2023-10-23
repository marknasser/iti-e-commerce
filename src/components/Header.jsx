import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="d-flex p-3 bg-black gap-5">
      <Link className="text-light text-decoration-none" to={"/"}>
        Products
      </Link>
      <Link className="text-light text-decoration-none" to={"/login"}>
        Login
      </Link>
      <Link className="text-light text-decoration-none" to={"/signup"}>
        SignUp
      </Link>
    </div>
  );
}

export default Header;
