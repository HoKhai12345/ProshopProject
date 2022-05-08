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

const Strange = ({ strange , readMore }) => {
    const settings = {
        dots: true,
        className: "slide2",
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        ltr: false
    };
    return (
        <>
            <div class="main-news">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-9">
                            <div class="row">
                                {strange && strange.map((value) => (
                                    <div class="col-md-4">
                                        <div class="mn-img">
                                            <img src={"http://evideo.vn/cms/" + value.thumb} />
                                            <div class="mn-title">
                                                <a href="">{trimString(value.title, 30)}</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>

                        <div class="col-lg-3">
                            <div class="mn-list">
                                <h2>Read More</h2>
                                <ul>
                                    {readMore && readMore.map((value)=>(
                                    <li><a href="">{trimString(value.title,40)}</a></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Strange;
