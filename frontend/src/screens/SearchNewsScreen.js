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
import Meta from "../components/Meta";
import RightFirt from "../components/RightFirt";
import RightManyPage from "../components/RightManyPage";
import CountNewsCate from "../components/CountNewsCate";
import PaginateCustom from "../components/PaginateCustom";
import Loader from "../components/Loader";

import {
  listProductDetails,
  createProductReview,
  listProducts,
  listNewsByCate,
  listNewsByCate2,
  listNewsSearch,
  setInputSearch,
} from "../actions/productActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../constants/productConstants";

let trimString = function (string, length) {
  return string.length > length ? string.substring(0, length) + "..." : string;
};
const SearchNewsScreen = ({ history, match }) => {
  const [listNews, setListNews] = useState();
  const [getLimit, setLimit] = useState(10);
  const [getOffset, setOffset] = useState(0);
  const [getSearch, setSearch] = useState("");
  const [getCateName, setCateName] = useState("");
  const [getPages, setPages] = useState(1);
  const [getPage, setPage] = useState(1);
  const [getLoading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const newsFamilyPage = useSelector((state) => state.listNewsFamily);
  // lấy dữ liệu kinh tế  từ store
  const newsEconomyPage = useSelector((state) => state.listNewsEconomy);
  // lấy dữ liệu du lịch từ store
  const newsTravelPage = useSelector((state) => state.listNewsTravel);
  // lấy tổng bản ghi theo từng chuyên mục trong store
  const countNewsPostCate = useSelector((state) => state.countNewsPostCate);
  // lấy trạng thái ô input search trong store
  const setInputSearch2 = useSelector((state) => state.setInputSearch);
  // console.log("setInputSearch", setInputSearch2);
  const { count } = countNewsPostCate;

  const { newsFamily } = newsFamilyPage;
  const { newsTravel } = newsTravelPage;
  const { newsEconomy } = newsEconomyPage;

  const keyword = match.params.keyword;

  useEffect(() => {
    try {
      (async () => {
        setListNews([]);
        setLoading(true);
        dispatch(setInputSearch(true));
        const data = await listNewsSearch(keyword, getLimit, getOffset);
        setListNews(data.data);
        setLoading(false);
        dispatch(setInputSearch(false));
        setPages(Math.ceil(data.countRecord / 10));
      })();
    } catch (error) {
      console.log("errorUseEffect", error);
    }
  }, [keyword]);

  // const cbPage = async (data) => {
  //   setPage(data);
  // };
  const reloadData = async () => {
    setListNews([]);
    setLoading(true);

    const dataAfterCbPage = await listNewsSearch(
      keyword,
      10,
      10 * (getPage - 1)
    );
    // console.log("dataAfterCbPage", dataAfterCbPage);
    setListNews(dataAfterCbPage?.data);
    setLoading(false);
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
                  Từ khóa tìm kiếm : <a>{trimString(keyword, 40)}</a>
                </li>
                {/* <li class="breadcrumb-item active">News details</li> */}
              </ul>
            </div>
            {listNews && listNews.length != 0 && (
              <PaginateCustom
                pages={getPages}
                page={getPage}
                setPage={setPage}
              ></PaginateCustom>
            )}
            <div class="tab-content" id="myTabContent">
              <div id="economy" class="container tab-pane active">
                {getLoading && <Loader></Loader>}
                {listNews &&
                  listNews.map((value) => (
                    <div class="tn-news">
                      <div class="tn-img">
                        <img src={"http://evideo.vn/cms/" + value.thumb} />
                      </div>
                      <div class="tn-title">
                        <Link to={"/" + value.slugs + ".html"}>
                          <a className="titleNews">
                            {trimString(value.title, 40)}
                          </a>
                        </Link>
                        <p>
                          <i>{trimString(value.description, 100)}</i>
                        </p>
                        <lable>
                          {moment(value.created_at).format("YYYY-MM-D ")}
                        </lable>
                      </div>
                    </div>
                  ))}
                {!listNews && "Không có bài viết với từ khóa : " + keyword}
              </div>
            </div>
            {listNews && listNews.length != 0 && (
              <PaginateCustom
                pages={getPages}
                page={getPage}
                setPage={setPage}
              ></PaginateCustom>
            )}
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
                  //   currentCategory={getCateName}
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

export default SearchNewsScreen;
