import React from "react";
import Logo from "../../assets/logo.png";
import moment from "moment/moment";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <Link to="/">
          <img src={Logo} alt="" className="" />
        </Link>
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
    </Container>
  );
};

export default Header;
