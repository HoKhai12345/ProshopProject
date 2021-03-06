import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, Row } from "react-bootstrap";
import Rating from "./Rating";
import NewsRightSocker from "./NewsRightSocker";
import { listNewsTraffic } from "../actions/productActions";
import Slider from "react-slick";
import { countCatePost } from "../actions/productActions";

import { listNewsSocerRight } from "../actions/productActions";

let trimString = function (string, length) {
  return string.length > length ? string.substring(0, length) + "..." : string;
};

const CountNewsCate = ({ data, title, currentCategory }) => {
  const dispatch = useDispatch();
  // lấy tổng bản ghi theo từng chuyên mục trong store
  const countNewsPostCate = useSelector((state) => state.countNewsPostCate);
  const { count } = countNewsPostCate;
  useEffect(() => {
    dispatch(countCatePost());
  }, []);
  const settings = {
    dots: true,
    className: "slide2",
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    ltr: false,
  };
  return (
    <>
      <div className="sidebar-widget">
        <h2 className="sw-title">{title}</h2>
        <div className="category">
          <ul>
            {data &&
              data.map((value) => {
                if (currentCategory == value.name) {
                  return (
                    <li className="activeCurrentCate">
                      <Link to={"/cate/" + value.slugs}>
                        <a>{value.name}</a>
                      </Link>
                      <span>({value.countPost})</span>
                    </li>
                  );
                } else {
                  return (
                    <li>
                      <Link to={"/cate/" + value.slugs}>
                        <a>{value.name}</a>
                      </Link>
                      <span>({value.countPost})</span>
                    </li>
                  );
                }
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CountNewsCate;
