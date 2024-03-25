import React from "react";
import {
  AddCart,
  Flex,
  Paragraph,
  Price,
  Subtitle,
  Title,
} from "../../assets/layouts/layouts";
import "../../assets/scss/style.scss";
import Image from "../image";
import { Col } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { AddCartEffect, CardAddtoCart, BestSeller } from "./productLayouts";

const Card = ({ data }) => {
  const currency = "€";
  const src = data.image?.url;
  const alt = data.image.alt;

  const { addItem } = useCart();
  return (
    <Col xs={12} sm={3} className="flex-column ps-0 ps-sm-4 mb-5">
      <CardAddtoCart className="mb-2 product-item pointer-events">
        {data.bestseller && <BestSeller>Best Seller</BestSeller>}
        <Image source={src} alt={alt} aspectratio="9x16" />
        <AddCartEffect className="product-item__btn">
          <AddCart onClick={() => addItem(data)} className="w-100 px-3">
            Add To Cart
          </AddCart>
        </AddCartEffect>
      </CardAddtoCart>
      <Flex className="flex-column">
        <Paragraph className="mb-1 font-bold font-grey">
          {data.category}
        </Paragraph>
        <Title className="mb-1">{data.name}</Title>
        <Price className="mb-1 font-grey">
          {currency}
          {data.price}
        </Price>
      </Flex>
    </Col>
  );
};

const Products = ({ data }) => {
  if (!data) {
    return;
  }

  return (
    <Flex className="w-100 flex-wrap">
      {data.map((product, index) => {
        return <Card key={index} data={product} />;
      })}
    </Flex>
  );
};

export default Products;
