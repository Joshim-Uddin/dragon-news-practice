import React from "react";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const TextScroll = () => {
  return (
    <Container>
      <div className="d-flex bg-secondary text-white">
        <button className="btn btn-danger">Latest</button>
        <Marquee>
          <p className="me-4 mb-0">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            asperiores sed dolores labore error mollitia unde culpa ullam
            provident ex.
          </p>
          <p className="mb-0">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            asperiores sed dolores labore error mollitia unde culpa ullam
            provident ex.
          </p>
        </Marquee>
      </div>
    </Container>
  );
};

export default TextScroll;
