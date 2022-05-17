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
      <div className="col-md-6 tnLeft">
        <div className="row tn-slider">
          {news.map((news) => {
            return (
              <div className="col-md-12">
                <div className="tn-img">
                  <img src={"http://evideo.vn/cms/" + news.thumb} />
                  <div className="tn-title">
                    <Link to={"/" + news.slugs + ".html"}>
                      <a>{news.title}</a>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-md-6 tn-right">
        <div className="row">
          <NewsRightSocker newsRight={newsSockerRight}></NewsRightSocker>
        </div>
      </div>
    </>
  );
};

export default NewsSlide;
