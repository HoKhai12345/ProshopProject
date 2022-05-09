import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, Row } from "react-bootstrap";
import Rating from "./Rating";
import NewsRightSocker from "../components/NewsRightSocker";

import { listNewsSocerRight } from "../actions/productActions";

const NewsSlide = ({ news }) => {
  const dispatch = useDispatch();

  const listSocerRight = useSelector((state) => state.listNewsSocerRight);

  useEffect(() => {
    dispatch(listNewsSocerRight(" ", 4, 1));
  }, [dispatch]);
  const { newsSockerRight } = listSocerRight;

  return (
    <>
      <div class="col-md-6 tnLeft">
        <div class="row tn-slider">
          {news.map((news) => {
            return (
              <div class="col-md-12">
                <div class="tn-img">
                  <img src={"http://evideo.vn/cms/" + news.thumb} />
                  <div class="tn-title">
                    <a href="">{news.title}</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div class="col-md-6 tn-right">
        <div class="row">
          <NewsRightSocker newsRight={newsSockerRight}></NewsRightSocker>
        </div>
      </div>
    </>
  );
};

export default NewsSlide;
