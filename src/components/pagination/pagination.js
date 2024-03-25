import React from "react";
import { PaginateNumber, PrevNext } from "./paginationLayouts";

function getPageNumbers(totalPosts, postsPerPage) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return pageNumbers;
}

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const prevDisabled = currentPage === 1;
  const nextDisabled = currentPage === Math.ceil(totalPosts / postsPerPage);

  const pageNumbers = getPageNumbers(totalPosts, postsPerPage);

  return (
    <nav className="d-flex justify-content-center">
      <PaginateNumber>
        <PrevNext
          disabled={prevDisabled}
          onClick={() => paginate(currentPage - 1)}
        >
          {"<"}
        </PrevNext>
      </PaginateNumber>
      {pageNumbers.map((number, index) => {
        const activeClass = currentPage === index + 1 && "active";

        return (
          <PaginateNumber
            className={activeClass}
            onClick={() => paginate(number)}
            key={number}
          >
            <span>{number}</span>
          </PaginateNumber>
        );
      })}
      <PaginateNumber>
        <PrevNext
          disabled={nextDisabled}
          onClick={() => paginate(currentPage + 1)}
        >
          {">"}
        </PrevNext>
      </PaginateNumber>
    </nav>
  );
};

export default Pagination;
