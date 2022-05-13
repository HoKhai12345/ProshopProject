import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Pagination } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { LinkContainer } from "react-router-bootstrap";
import { listNewsByCate } from "../actions/productActions";

const PaginateCustom = ({
  pages,
  page,
  categorySlug = "",
  setPage = () => {},
}) => {
  const onChangePrev = () => {
    if (page) {
    }
    setPage(page - 1);
  };

  return (
    pages > 1 && (
      <Pagination>
        <Pagination.First />
        <Pagination.Prev onClick={onChangePrev} />
        {[...Array(pages).keys()].map((x) => (
          //   <LinkContainer
          //     key={x + 1}
          //     to={ categoryId
          //           ? `/search/${keyword}/page/${x + 1}`
          //           : `/page/${x + 1}`
          //     }
          //   >
          <Pagination.Item
            onClick={() => setPage(x + 1)}
            value={x + 1}
            active={x + 1 === page}
          >
            {x + 1}
          </Pagination.Item>
          //   </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

export default PaginateCustom;
