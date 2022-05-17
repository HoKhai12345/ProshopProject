import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, Row } from "react-bootstrap";
import Rating from "./Rating";
import NewsRightSocker from "./NewsRightSocker";
import { listNewsTraffic } from "../actions/productActions";
import Slider from "react-slick";

import { listNewsSocerRight } from "../actions/productActions";

let trimString = function (string, length) {
  return string.length > length ? string.substring(0, length) + "..." : string;
};

const RightFirt = ({ data, title }) => {
  const dispatch = useDispatch();
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
        <div className="news-list">
          {data &&
            data.map((value) => (
              <div className="nl-item">
                <div className="nl-img">
                  <img src={"http://evideo.vn/cms/" + value.thumb} />
                </div>
                <div className="nl-title">
                  <Link to={"/" + value.slugs + ".html"}>
                    <a>{trimString(value.title, 40)}</a>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default RightFirt;
