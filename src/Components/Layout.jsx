import React from "react";
import NavbarComponent from "./Navbar";
import Aside from "./Aside";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Hero from "./Hero";
import { Col, Container, Row } from "react-bootstrap";

function Layout() {
  return (
    <>
      <div className="px-5">
        <Row>
          {" "}
          <NavbarComponent />
        </Row>
        <Row>
          <Col md={3}>
            {" "}
            <Aside />
          </Col>
          <Col md={9}>
            <Hero />
          </Col>
        </Row>
        <Row className="my-5">
          {" "}
          <Outlet />
        </Row>
        <Row>
          {" "}
          <Footer />
        </Row>
      </div>
    </>
  );
}

export default Layout;
