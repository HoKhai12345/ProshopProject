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

const LeftManyPage = ({ social, funny, beautify }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div class="col-md-6">
        <ul class="nav nav-pills nav-justified">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="pill" href="#funny">
              Hài hước
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#social">
              Mạng xã hội
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#beautify">
              Làm đẹp
            </a>
          </li>
        </ul>

        <div class="tab-content" id="myTabContent">
          <div id="funny" class="container tab-pane active">
            {funny &&
              funny.map((value) => (
                <div class="tn-news">
                  <div class="tn-img">
                    <img src={"http://evideo.vn/cms/" + value.thumb} />
                  </div>
                  <div class="tn-title">
                    <a href="">{trimString(value.title,40)}</a>
                  </div>
                </div>
              ))}
          </div>
          <div id="social" class="container tab-pane fade">
          {social &&
              social.map((value) => (
                <div class="tn-news">
                  <div class="tn-img">
                    <img src={"http://evideo.vn/cms/" + value.thumb} />
                  </div>
                  <div class="tn-title">
                    <a href="">{trimString(value.title , 40)}</a>
                  </div>
                </div>
              ))}
          </div>
          <div id="beautify" class="container tab-pane fade">
          {beautify &&
              beautify.map((value) => (
                <div class="tn-news">
                  <div class="tn-img">
                    <img src={"http://evideo.vn/cms/" + value.thumb} />
                  </div>
                  <div class="tn-title">
                    <a href="">{trimString(value.title , 40)}</a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftManyPage;
