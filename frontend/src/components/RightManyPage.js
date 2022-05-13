import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, Row } from "react-bootstrap";
import Rating from "./Rating";
import NewsRightSocker from "./NewsRightSocker";
import { listNewsTraffic } from "../actions/productActions";
import Slider from "react-slick";
import { listNewsTravel } from "../actions/productActions";
import { listNewsFamily } from "../actions/productActions";
import { listNewsEconomy } from "../actions/productActions";
import { listNewsSocerRight } from "../actions/productActions";

let trimString = function (string, length) {
  return string.length > length ? string.substring(0, length) + "..." : string;
};

const RightManyPage = ({ economy, family, travel }) => {
  console.log("economy",economy);
  const dispatch = useDispatch();
        //dispatch giá trị cho bản tin gia đình 
        useEffect(() => {
          dispatch(listNewsFamily("", 3, 0));
        }, [dispatch]);
          //dispatch giá trị cho bản tin du lịch
      useEffect(() => {
        dispatch(listNewsTravel("", 3, 0));
      }, [dispatch]);
        //dispatch giá trị cho bản tin kinh tế 
        useEffect(() => {
          dispatch(listNewsEconomy("", 3, 0));
        }, [dispatch]);
  return (
    <>
      {/* <div class="col-md-6"> */}
        <ul class="nav nav-pills nav-justified">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="pill" href="#economy">
              Kinh tế
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#family">
            Fitness
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#travel">
              Thời tiết
            </a>
          </li>
        </ul>

        <div class="tab-content" id="myTabContent">
          <div id="economy" class="container tab-pane active">
            {economy &&
              economy.map((value) => (
                <div class="tn-news">
                  <div class="tn-img">
                    <img src={"http://evideo.vn/cms/" + value.thumb} />
                  </div>
                  <div class="tn-title">
                  <Link to={"/"+value.slugs+".html"}>
                        <a>{trimString(value.title, 40)}</a>
                        </Link>                  </div>
                </div>
              ))}
          </div>
          <div id="family" class="container tab-pane fade">
          {family &&
              family.map((value) => (
                <div class="tn-news">
                  <div class="tn-img">
                    <img src={"http://evideo.vn/cms/" + value.thumb} />
                  </div>
                  <div class="tn-title">
                  <Link to={"/"+value.slugs+".html"}>
                        <a>{trimString(value.title, 40)}</a>
                        </Link>                  </div>
                </div>
              ))}
          </div>
          <div id="travel" class="container tab-pane fade">
          {travel &&
              travel.map((value) => (
                <div class="tn-news">
                  <div class="tn-img">
                    <img src={"http://evideo.vn/cms/" + value.thumb} />
                  </div>
                  <div class="tn-title">
                  <Link to={"/"+value.slugs+".html"}>
                        <a>{trimString(value.title, 40)}</a>
                        </Link>                  </div>
                </div>
              ))}
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default RightManyPage;
