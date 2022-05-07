import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import NewsSlide from "../components/NewsSlide";
import Traffic from "../components/Traffic";
import Star from "../components/Star";
import Cooking from "../components/Cooking";
import Fashion from "../components/Fashion";
import LeftManyPage from "../components/LeftManyPage"
import RightManyPage from "../components/RightManyPage";
import NewsRightSocker from "../components/NewsRightSocker";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
import { listProducts } from "../actions/productActions";

import { listNewsSocerSlide } from "../actions/productActions";
import { listNewsSocerRight } from "../actions/productActions";
import { listNewsTraffic } from "../actions/productActions";
import { listNewsStar } from "../actions/productActions";

import { listNewsCooking } from "../actions/productActions";

import { listNewsFashion } from "../actions/productActions";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const limit = match.params.limit || 10;

  const offset = match.params.offset || 0;

  const dispatch = useDispatch();

  // Lấy dữ liệu từ product list từ store
  const productList = useSelector((state) => state.productList);
  // Lấy dữ liệu bóng đá phần slide từ store
  const newsSocerListSlide = useSelector((state) => state.listNewsSocerSlide);
  // Lấy dữ liệu bóng đá phần bên phải từ store
  const listNewsSocerRight = useSelector((state) => state.listNewsSocerRight);
  // Lấy dữ liệu giao thông từ store
  const newsTrafficPage = useSelector((state) => state.listNewsTraffic);
  // Lấy dữ liệu ngôi sao từ store
  const newsStarPage = useSelector((state) => state.listNewsStar);
  // Lấy dữ liệu nấu ăn từ store 
  const newsCookingPage = useSelector((state) => state.listNewsCooking)
  // Lấy dữ liệu thời trang từ store 
  const newsFashionPage = useSelector((state)=> state.listNewsFashion)
  const { newsStar } = newsStarPage;
  const { news } = newsSocerListSlide;
  const { newsTraffic } = newsTrafficPage;
  const { newsCooking } = newsCookingPage;
  const { newsFashion } = newsFashionPage;

  // dispath giá trị cho bản tin bóng đá slide
  useEffect(() => {
    dispatch(listNewsSocerSlide(keyword, 1, 0));
  }, [dispatch, keyword, limit, offset]);
  // Lấy giá trị cho bản tin giao thông
  useEffect(() => {
    dispatch(listNewsTraffic(keyword, 4, 0));
  }, [dispatch, keyword]);
  // lấy giá trị cho bản tin star
  useEffect(() => {
    dispatch(listNewsStar(keyword, 4, 0));
  }, [dispatch, keyword, limit, offset]);
  // lấy giá trị cho bản tin nấu ăn
  useEffect(() => {
    dispatch(listNewsCooking(keyword, 4, 0));
  }, [dispatch, keyword, limit, offset]);
  //lấy giá trị cho bản tin thời trang
  useEffect(() => {
    dispatch(listNewsFashion(keyword, 4, 0));
  }, [dispatch, keyword, limit, offset]);
  return (
    <>
      {/* <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      <h1>Latest Products</h1> */}

      <>
        {/* Ghep giao dien chuyen muc bong da ( categoryId = 37 ) */}
        <div style={{ paddingTop: 0 }} class="top-news">
          <div class="container">
            <h3>Bóng đá</h3>
            <Row>
              <NewsSlide news={news} />
            </Row>
          </div>
        </div>
        <div class="cat-news">
          <div class="container">
            <div class="row">
              {/* Ghép giao diện phần giao thông */}
              <Traffic traffic={newsTraffic}></Traffic>
              {/* Ghép component phần ngôi sao */}
              <Star star={newsStar}></Star>
              {/* Ghép component phần nấu ăn */}
              <Cooking cooking={newsCooking}></Cooking>
              {/* Ghép component phần thời trang */}
              <Fashion fashion={newsFashion}></Fashion>
            </div>
          </div>
        </div>
        <div class="tab-news">
            <div class="container">
                <div class="row">
                    <LeftManyPage></LeftManyPage>
                    <RightManyPage></RightManyPage>
                </div>
            </div>
        </div>
      </>
    </>
  );
};

export default HomeScreen;
