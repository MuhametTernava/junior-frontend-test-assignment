import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/svg/logo.svg";
import Cart from "./cart/cart";

const Logo = () => {
  return (
    <Col xs={4} sm={6} md={2}>
      <Link to="/">
        <img src={logo} className="w-100 h-100" alt="logo" />
      </Link>
    </Col>
  );
};

const Header = () => {
  return (
    <Row className="py-4 d-flex align-items-center">
      <Col xs={8} className="d-flex align-items-center">
        <Logo />
        <nav className="ms-4">
          <Link to="/best-sellers" className="nav-link">
            Best Sellers
          </Link>
        </nav>
      </Col>
      <Col xs={4} className="d-flex justify-content-end">
        <Cart />
      </Col>
    </Row>
  );
};

export default Header;
