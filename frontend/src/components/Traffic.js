import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, Row } from "react-bootstrap";
import Rating from "./Rating";
import NewsRightSocker from "../components/NewsRightSocker";

import { listNewsSocerRight } from "../actions/productActions";

let trimString = function (string, length) {
    return string.length > length ? 
           string.substring(0, length) + '...' :
           string;
  };
const Traffic = ({ traffic }) => {
    console.log("TRAFFIC",traffic);
  return (
    <>
                    <div class="col-md-6">
                        <h2>Giao thông</h2>
                        <div class="row cn-slider2">
                            {traffic && traffic.map((traffic)=>(
  <div class="col-md-6">
  <div class="cn-img">
      <img style={{height:142}} src={"http://evideo.vn/cms/" + traffic.thumb} />
      <div class="cn-title">
          <a href="">{trimString(traffic.title , 40 )}</a>
      </div>
  </div>
</div>
                            )

                            )}
                          
                        </div>
                    </div>
    </>
  );
};

export default Traffic;
