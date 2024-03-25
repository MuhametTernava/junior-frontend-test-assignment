import React from "react";
import styled from "@emotion/styled";
import {
  Flex,
  MainTitle,
  AddCart,
  Subtitle,
  Paragraph,
} from "../assets/layouts/layouts";
import Image from "./image";
import { Row, Col } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { colors } from "../assets/variables";

const HeroImgContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;

  &:before {
    content: "Photo of the day";
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 20px 60px;
    height: 70px;
    background: ${colors.white};
    z-index: 1;
    font-weight: bold;
    font-size: 20px;

    @media (max-width: 567px) {
      padding: 10px 20px;
      height: 40px;
      font-size: 16px;
    }
  }
`;

const HeroDescription = ({ data }) => {
  const imageWidth = data.dimensions.width;
  const imageHeight = data.dimensions.height;

  return (
    <Flex>
      <Row>
        <Col xs={12} sm={6} className="flex-column pb-5 pb-sm-0">
          <Subtitle className="pb-3 pb-sm-2">About the {data.name}</Subtitle>
          <Subtitle className="pb-3 pb-sm-4 font-grey">
            {data.category}
          </Subtitle>
          <Paragraph className="font-grey">{data.description}</Paragraph>
        </Col>
        <Col xs={12} sm={6} className="flex-column align-items-end">
          <Subtitle className="pb-4 text-right">People also buy</Subtitle>
          <Row className="justify-content-end">
            <Col xs={12} sm={7} className="d-flex pb-5">
              {data.recommendations &&
                data.recommendations.map((post, index) => {
                  return (
                    <Image
                      key={index}
                      source={post.url}
                      alt={post.alt}
                      classList="ms-0 me-4 me-sm-0 ms-sm-4"
                      aspectratio="9x16"
                    />
                  );
                })}
            </Col>
            <Col xs={12} sm={12} className="flex-column text-right">
              <Subtitle className="pb-2 mr-5">Details</Subtitle>
              <Paragraph className="pb-2 font-grey">
                Size: {imageWidth} x {imageHeight} pixels
              </Paragraph>
              <Paragraph className="font-grey">Size: {data.size} mb</Paragraph>
            </Col>
          </Row>
        </Col>
      </Row>
    </Flex>
  );
};

const Hero = ({ data }) => {
  const { addItem } = useCart();

  if (!data) return;
  const post = data;

  return (
    <Flex className="flex-column py-4 py-sm-5">
      <Flex className="justify-content-between pb-4">
        <MainTitle>{post?.name}</MainTitle>
        <AddCart
          onClick={() => addItem(post)}
          className="d-none d-sm-inline-block"
        >
          Add to cart
        </AddCart>
      </Flex>
      <Flex className="pb-3 py-sm-4">
        <HeroImgContainer>
          <Image source={post?.image?.url} alt={post.image.alt} />
        </HeroImgContainer>
      </Flex>
      <AddCart
        onClick={() => addItem(post)}
        className="d-sm-none d-inline-block mb-4"
      >
        Add to cart
      </AddCart>
      <HeroDescription data={post} />
    </Flex>
  );
};

export default Hero;
