import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Outlet } from "react-router-dom";
import RighNav from "../Shared/RighNav";
import Header from "../Header/Header";
import NewsDetails from "./NewsDetails";

const News = () => {
  const id = useParams();
  const news = useLoaderData();
  return (
    <>
      <Header />
      <h3 className="ms-5 ps-2 mb-0">Dragon News</h3>
      <Container className="mt-5">
        <Row>
          <Col lg={9}>
            <NewsDetails news={news} />
          </Col>
          <Col lg={3}>
            <RighNav />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default News;
