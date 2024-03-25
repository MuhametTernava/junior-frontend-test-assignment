import React from "react";
import { Flex, Paragraph, Subtitle } from "../assets/layouts/layouts";
import { Seperator } from "../assets/layouts/seperator";

const Categories = () => {
  return (
    <Flex className="flex-column w-100">
      <Subtitle className="pb-4">Category</Subtitle>
      <Flex className="flex-column pb-3">
        <label className="d-flex me-2 mb-4">
          <input type="checkbox" className="me-2"/>
          <Paragraph className="lh-1">People</Paragraph>
        </label>
        <label className="d-flex me-2 mb-4">
          <input type="checkbox" className="me-2" />
          <Paragraph className="lh-1">Premium</Paragraph>
        </label>
        <label className="d-flex me-2 mb-4">
          <input type="checkbox" className="me-2" />
          <Paragraph className="lh-1">Pets</Paragraph>
        </label>
        <label className="d-flex me-2 mb-4">
          <input type="checkbox" className="me-2" />
          <Paragraph className="lh-1">Food</Paragraph>
        </label>
        <label className="d-flex me-2 mb-4">
          <input type="checkbox" className="me-2" />
          <Paragraph className="lh-1">Landmarks</Paragraph>
        </label>
        <label className="d-flex me-2 mb-4">
          <input type="checkbox" className="me-2" />
          <Paragraph className="lh-1">Cities</Paragraph>
        </label>
        <label className="d-flex me-2 mb-4">
          <input type="checkbox" className="me-2" />
          <Paragraph className="lh-1">Nature</Paragraph>
        </label>
      </Flex>
      <Seperator />
      <Subtitle className="pb-4 pt-3">Price range</Subtitle>
      <Flex className="flex-column">
        <label className="d-flex me-2 mb-4">
          <input type="checkbox" className="me-2" />
          <Paragraph className="lh-1">Lower than $20</Paragraph>
        </label>
        <label className="d-flex me-2 mb-4">
          <input type="checkbox" className="me-2" />
          <Paragraph className="lh-1">$20 - $100</Paragraph>
        </label>
        <label className="d-flex me-2 mb-4">
          <input type="checkbox" className="me-2" />
          <Paragraph className="lh-1">$100 - $200</Paragraph>
        </label>
        <label className="d-flex me-2 mb-4">
          <input type="checkbox" className="me-2" />
          <Paragraph className="lh-1">More than $200</Paragraph>
        </label>
      </Flex>
    </Flex>
  );
};

export default Categories;