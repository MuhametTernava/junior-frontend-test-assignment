import React, { useEffect, useState } from "react";
import { Flex, Title } from "../assets/layouts/layouts";
import { Row, Col } from "react-bootstrap";
import Categories from "./categories";
import Products from "./product/products";
import Pagination from "./pagination/pagination";

const ProductsList = ({ data, loading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  const [paginateLoading, setPaginateLoading] = useState(true);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Row className="py-5">
      <Col xs={12}>
        <Flex className="justify-content-between mb-4">
          <Flex>
            <Title className="pe-1">Photography /</Title>
            <Title className="ps-1 font-grey font-regular">Premium Photos</Title>
          </Flex>
          <Flex className="align-items-center">
            <p className="me-2">Sort By</p>
            {/* <select onChange={(e) => setSortedType(e.target.value)}> */}
            <select>
              <option value="name">Name</option>
              <option value="price">Price</option>
            </select>
          </Flex>
        </Flex>
      </Col>
      <Col xs={0} sm={2} className="pe-5 d-none d-sm-flex">
        <Categories />
      </Col>
      <Col xs={12} sm={10} className="flex-column">
        <Row className="ps-0 ps-sm-5 ">
          <Products data={currentPosts} />
        </Row>
        {currentPosts && (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            paginate={paginate}
            currentPage={currentPage}
            loading={loading}
          />
        )}
      </Col>
    </Row>
  );
};

export default ProductsList;
