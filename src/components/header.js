import React from "react";
import { Row, Col } from "react-bootstrap";
import logo from "../assets/svg/logo.svg";
import Cart from "./cart/cart";

const Logo = () => {
  return (
    <Col xs={4} sm={6} md={2}>
      <img src={logo} className="w-100 h-100" alt="logo" />
    </Col>
  );
};

const Header = () => {
  return (
    <Row className="py-4 d-flex">
      <Col xs={8}>
        <Logo />
      </Col>
      <Col xs={4} className="d-flex justify-content-end">
        <Cart />
      </Col>
    </Row>
  );
};

export default Header;
