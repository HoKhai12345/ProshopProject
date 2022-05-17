import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import moment from "moment";
import Rating from "../components/Rating";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Meta from "../components/Meta";
import RightFirt from "../components/RightFirt";
import RightManyPage from "../components/RightManyPage";
import CountNewsCate from "../components/CountNewsCate";
import PaginateCustom from "../components/PaginateCustom";

import {
  listProductDetails,
  createProductReview,
  listProducts,
  listNewsByCate,
  listNewsByCate2,
} from "../actions/productActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../constants/productConstants";

let trimString = function (string, length) {
  return string.length > length ? string.substring(0, length) + "..." : string;
};
const CategoryScreen = ({ history, match }) => {
  const [listNews, setListNews] = useState();
  const [getLimit, setLimit] = useState(10);
  const [getOffset, setOffset] = useState(0);
  const [getCateSlug, setCateSlug] = useState("");
  const [getCateName, setCateName] = useState("");
  const [getPages, setPages] = useState(1);
  const [getPage, setPage] = useState(1);

  const dispatch = useDispatch();

  const newsFamilyPage = useSelector((state) => state.listNewsFamily);
  // lấy dữ liệu kinh tế  từ store
  const newsEconomyPage = useSelector((state) => state.listNewsEconomy);
  // lấy dữ liệu du lịch từ store
  const newsTravelPage = useSelector((state) => state.listNewsTravel);
  // lấy tổng bản ghi theo từng chuyên mục trong store
  const countNewsPostCate = useSelector((state) => state.countNewsPostCate);
  const { count } = countNewsPostCate;

  const { newsFamily } = newsFamilyPage;
  const { newsTravel } = newsTravelPage;
  const { newsEconomy } = newsEconomyPage;

  const categorySlug = match.params.categorySlug;
  useEffect(() => {
    setCateSlug(categorySlug);
    listNewsByCate(categorySlug, getLimit, getOffset, (err, data) => {
      setListNews(data.data);
      setCateName(data.data[0].nameCate);
      setPages(Math.ceil(data.count[0].countData / 10));
      setPage(1);
    });
  }, [categorySlug]);

  // const cbPage = async (data) => {
  //   setPage(data);
  // };
  const reloadData = async () => {
    const dataAfterCbPage = await listNewsByCate2(
      categorySlug,
      10,
      10 * (getPage - 1)
    );
    // console.log("dataAfterCbPage", dataAfterCbPage);

    setListNews(dataAfterCbPage?.data);
  };

  useEffect(() => {
    reloadData();
  }, [getPage]);
  return (
    <>
      <div class="tab-news">
        <div class="row">
          <div class="col-8">
            <div class="container">
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <Link to={`/`}>
                    <a href="/">Trang chủ</a>
                  </Link>
                </li>
                <li class="breadcrumb-item">
                  <Link to={"/cate/" + getCateSlug}>
                    <a>{getCateName}</a>
                  </Link>
                </li>
                {/* <li class="breadcrumb-item active">News details</li> */}
              </ul>
            </div>

            <div class="tab-content" id="myTabContent">
              <div id="economy" class="container tab-pane active">
                {listNews &&
                  listNews.map((value) => (
                    <div class="tn-news">
                      <div class="tn-img">
                        <img
                          src={"http://evideo.vn/cms/" + value.thumb}
                          alt="HTML5 Icon"
                        />
                      </div>
                      <div class="tn-title">
                        <Link to={"/" + value.slugs + ".html"}>
                          <a class="titleNews">{trimString(value.title, 40)}</a>
                        </Link>{" "}
                        <p>
                          <i>{trimString(value.description, 100)}</i>
                        </p>
                        <lable>
                          {moment(value.created_at).format("YYYY-MM-D ")}
                        </lable>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <PaginateCustom
              pages={getPages}
              page={getPage}
              categorySlug={categorySlug}
              setPage={setPage}
            ></PaginateCustom>
          </div>
          <div class="col-4">
            <div class="single-news">
              <div class="sidebar">
                <div class="sidebar-widget">
                  <div class="image">
                    <a href="https://htmlcodex.com">
                      <img src="/images/ads-1.jpg" alt="Image" />
                    </a>
                  </div>
                </div>
                <div class="sidebar-widget">
                  <div class="tab-news">
                    <RightManyPage
                      economy={newsEconomy}
                      family={newsFamily}
                      travel={newsTravel}
                    ></RightManyPage>
                  </div>
                </div>

                <div class="sidebar-widget">
                  <div class="image">
                    <a href="https://htmlcodex.com">
                      <img src="/images/ads-1.jpg" alt="Image" />
                    </a>
                  </div>
                </div>
                {/* tổng bản ghi trong các chuyên mục */}
                <CountNewsCate
                  data={count}
                  title={"Các chuyên mục khác"}
                  currentCategory={getCateName}
                ></CountNewsCate>

                <div class="sidebar-widget">
                  <div class="image">
                    <a href="https://htmlcodex.com">
                      <img src="/images/ads-1.jpg" alt="Image" />
                    </a>
                  </div>
                </div>

                {/* <div class="sidebar-widget">
                  <h2 class="sw-title">Tags Cloud</h2>
                  <div class="tags">
                    <a href="">National</a>
                    <a href="">International</a>
                    <a href="">Economics</a>
                    <a href="">Politics</a>
                    <a href="">Lifestyle</a>
                    <a href="">Technology</a>
                    <a href="">Trades</a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryScreen;
