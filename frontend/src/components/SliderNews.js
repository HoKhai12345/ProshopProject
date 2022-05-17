import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, Row } from "react-bootstrap";
import Rating from "./Rating";
import NewsRightSocker from "./NewsRightSocker";
import { listNewsTraffic } from "../actions/productActions";
import Slider from "react-slick";
import { listNewsStar } from "../actions/productActions";
import { listNewsCooking } from "../actions/productActions";

import { listNewsFashion } from "../actions/productActions";

import { listNewsSocerRight } from "../actions/productActions";

let trimString = function (string, length) {
  return string.length > length ? string.substring(0, length) + "..." : string;
};

const SliderNews = ({ data, title, slugCate }) => {
  const dispatch = useDispatch();

  // dispatch giá trị cho bản tin giao thông
  useEffect(() => {
    dispatch(listNewsTraffic("", 4, 0));
  }, [dispatch]);
  // dispatch giá trị cho bản tin star
  useEffect(() => {
    dispatch(listNewsStar("", 4, 0));
  }, [dispatch]);
  // dispatch giá trị cho bản tin nấu ăn
  useEffect(() => {
    dispatch(listNewsCooking("", 4, 0));
  }, [dispatch]);
  //dispatch giá trị cho bản tin thời trang
  useEffect(() => {
    dispatch(listNewsFashion("", 4, 0));
  }, [dispatch]);
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
      <div className="col-md-6">
        <h2>
          <Link to={"/cate/" + slugCate}>{title}</Link>
        </h2>
        <div className="row cn-slider2">
          <Slider {...settings}>
            {data &&
              data.map((value) => {
                return (
                  <div className="col-md-12" key={value.id}>
                    <div className="cn-img">
                      <img
                        style={{ height: 142 }}
                        src={"http://evideo.vn/cms/" + value.thumb}
                      />
                      <div className="cn-title">
                        <Link to={"/" + value.slugs + ".html"}>
                          <a>{trimString(value.title, 40)}</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SliderNews;
