import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftNav from "../Shared/LeftNav";
import News from "../Pages/News";
import { Outlet } from "react-router-dom";
import RighNav from "../Shared/RighNav";

const Home = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col lg={3}>
          <LeftNav />
        </Col>
        <Col lg={6}>
          <Outlet></Outlet>
        </Col>
        <Col lg={3}>
          <RighNav />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
