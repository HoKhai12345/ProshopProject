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

const RelatedNews = ({ related , title}) => {
    console.log("related",related);
  const dispatch = useDispatch();
  const settings = {
    dots: true,
    className: "slide2",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    ltr: false
  };
  return (
    <>
            <div class="cat-news">

      <div class="col-md-12">
        <h2>
        {title}
        </h2>
        {/* <div class="row cn-slider2"> */}
          <Slider {...settings}>
            {related && related != {} &&
              related.map((value) => {
                return (
                  <div class="col-md-12" key={value.id}>
                    <div class="cn-img">
                      <img
                        style={{ height: 142 }}
                        src={"http://evideo.vn/cms/" + value.thumb}
                      />
                      <div class="cn-title">
                      <Link to={"/"+value.slugs+".html"+".html"}>
                        <a>{trimString(value.title, 40)}</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>
{/* </div> */}
</div>
</div>
    </>
  );
};

export default RelatedNews;
