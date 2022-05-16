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
    if (page > 1) {
      console.log("PAGE2", page);

      setPage(page - 1);
    }
  };
  const onChangeNext = () => {
    if (page < pages) {
      setPage(page + 1);
    }
  };
  const onChangeLast = () => {
    setPage(pages);
  };
  const onChangeFirts = () => {
    setPage(1);
  };

  const array = [];
  // console.log("PAGE",page);

  if (page > 1 && page <= pages) {
    if (page != 2) {
      array.push(page - 2);
    }
    array.push(page - 1);
    array.push(page);
    if (page != pages) {
      array.push(page + 1);
      if (page != pages - 1) {
        array.push(page + 2);
      }
    }
    // array.push(page+1);
    // array.push(page+1);
    // console.log("PAGE1",page);
  } else if ((page = 1)) {
    // console.log("PAGE2",page);

    array.push(page);
    array.push(page + 1);
    array.push(page + 2);
  } else {
    // console.log("PAGE3",page);
    // array.slice(page);
    array.push(page - 2);
    array.push(page - 1);
    array.push(page);
  }

  return (
    pages > 1 && (
      <Pagination>
        <Pagination.First onClick={onChangeFirts} />
        <Pagination.Prev onClick={onChangePrev} />
        {array.map((x) => (
          //   <LinkContainer
          //     key={x + 1}
          //     to={ categoryId
          //           ? `/search/${keyword}/page/${x + 1}`
          //           : `/page/${x + 1}`
          //     }
          //   >
          <Pagination.Item
            onClick={() => setPage(x)}
            value={x}
            active={x === page}
          >
            {x}
          </Pagination.Item>
          //   </LinkContainer>
        ))}
        <Pagination.Next onClick={onChangeNext} />
        <Pagination.Last onClick={onChangeLast} />
      </Pagination>
    )
  );
};

export default PaginateCustom;
