import React, { useContext } from "react";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../AuthProviders/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <Container className="d-flex align-items-center mt-4">
      <div className="text-center mx-auto d-flex gap-3">
        <Link className="text-secondary text-decoration-none" to="/">
          Home
        </Link>
        <Link className="text-secondary text-decoration-none" to="/about">
          About
        </Link>
        <Link className="text-secondary text-decoration-none" to="/career">
          Career
        </Link>
      </div>
      <div className="text-end me-5 d-flex align-items-center gap-3">
        <FaUserCircle className="user"></FaUserCircle>
        <button className="btn btn-dark">
          {user ? (
            <Link className="text-white text-decoration-none" onClick={logOut}>
              Logout
            </Link>
          ) : (
            <Link className="text-white text-decoration-none" to="/login">
              Login
            </Link>
          )}
        </button>
      </div>
    </Container>
  );
};

export default Navbar;
