import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/utilities/fonts.scss";
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import BestSellerProducts from "./pages/bestSellerProd";
import Error from "./pages/error";
import Header from "./components/header";
import { Container } from "react-bootstrap";
import { Seperator } from "./assets/layouts/seperator";
import { CartProvider } from "react-use-cart";

class App extends Component {
  render() {
    return (
      <CartProvider>
        <BrowserRouter>
          <div>
            <Container>
              <Header />
              <Seperator />
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/best-sellers" element={<BestSellerProducts />} />
                <Route element={<Error />} />
              </Routes>
            </Container>
          </div>
        </BrowserRouter>
      </CartProvider>
    );
  }
}

export default App;
