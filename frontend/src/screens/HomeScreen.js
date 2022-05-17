import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import NewsSlide from "../components/NewsSlide";
import Traffic from "../components/Traffic";
import Star from "../components/Star";
import Cooking from "../components/Cooking";
import Fashion from "../components/Fashion";
import LeftManyPage from "../components/LeftManyPage";
import RightManyPage from "../components/RightManyPage";
import StrangeNews from "../components/StrangeNews";
import SliderNews from "../components/SliderNews";
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
import { listNewsFunny } from "../actions/productActions";
import { listNewsSocialNetwork } from "../actions/productActions";
import { listNewsBeautify } from "../actions/productActions";

import { listNewsCooking } from "../actions/productActions";

import { listNewsFashion } from "../actions/productActions";
import { listNewsTravel } from "../actions/productActions";
import { listNewsFamily } from "../actions/productActions";
import { listNewsEconomy } from "../actions/productActions";
import { listNewsViews } from "../actions/productActions";

const HomeScreen = ({ match }) => {
  // Khai báo state
  const [listNewsStrange, setListNewsStrange] = useState([]);
  const [listNewsReadMore, setListNewsReadMore] = useState([]);
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const limit = match.params.limit || 10;

  const offset = match.params.offset || 0;

  const dispatch = useDispatch();

  // code trang home ko cần thiết dùng redux nhưng kệ vẫn dùng , code 1 vài component lặp nhưng chưa có thời gian sửa

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
  const newsCookingPage = useSelector((state) => state.listNewsCooking);
  // Lấy dữ liệu thời trang từ store
  const newsFashionPage = useSelector((state) => state.listNewsFashion);
  // Lấy dữ liệu hài hước từ store
  const newsFunnyPage = useSelector((state) => state.listNewsFunny);
  // Lấy dữ liệu mạng xã hội từ store
  const newsSocialPage = useSelector((state) => state.listNewsSocial);
  // lấy dữ liệu làm đẹp từ store
  const newsBeautifyPage = useSelector((state) => state.listNewsBeautify);
  // lấy dữ liệu gia đình từ store
  const newsFamilyPage = useSelector((state) => state.listNewsFamily);
  // lấy dữ liệu kinh tế  từ store
  const newsEconomyPage = useSelector((state) => state.listNewsEconomy);
  // lấy dữ liệu du lịch từ store
  const newsTravelPage = useSelector((state) => state.listNewsTravel);
  //lấy dữ liệu nhiều view

  useEffect(() => {
    listNewsViews("", 9, 0, (err, data) => {
      setListNewsStrange(data.data);
    });
    listNewsViews("", 6, 9, (err, data) => {
      setListNewsReadMore(data.data);
    });
  }, []);

  const { newsStar } = newsStarPage;
  const { news } = newsSocerListSlide;
  const { newsTraffic } = newsTrafficPage;
  const { newsCooking } = newsCookingPage;
  const { newsFashion } = newsFashionPage;
  const { newsFunny } = newsFunnyPage;
  const { newsSocial } = newsSocialPage;
  const { newsBeautify } = newsBeautifyPage;
  const { newsFamily } = newsFamilyPage;
  const { newsTravel } = newsTravelPage;
  const { newsEconomy } = newsEconomyPage;

  // dispath giá trị cho bản tin bóng đá slide
  useEffect(() => {
    dispatch(listNewsSocerSlide(keyword, 1, 0));
  }, [dispatch, keyword, limit, offset]);
  return (
    <>
      <>
        {/* Ghep giao dien chuyen muc bong da ( categoryId = 37 ) */}
        <div style={{ paddingTop: 0 }} className="top-news">
          <div className="container">
            <Link to={"/cate/Bong-da"}>
              <h3>Bóng đá</h3>
            </Link>

            <Row>
              <NewsSlide news={news} />
            </Row>
          </div>
        </div>
        <div className="cat-news">
          <div className="container">
            <div className="row">
              {/* Ghép giao diện phần giao thông */}
              <SliderNews
                data={newsTraffic}
                title="Giao thông"
                slugCate="Giao-thong"
              ></SliderNews>
              {/* <Traffic traffic={newsTraffic}></Traffic> */}
              {/* Ghép component phần ngôi sao */}
              <SliderNews
                data={newsStar}
                title="Ngôi sao"
                slugCate="Ngoi-sao"
              ></SliderNews>
              {/* <Star star={newsStar}></Star> */}
              {/* Ghép component phần nấu ăn */}
              <SliderNews
                data={newsCooking}
                title="Nấu ăn"
                slugCate="Nau-an"
              ></SliderNews>
              {/* <Cooking cooking={newsCooking}></Cooking> */}
              {/* Ghép component phần thời trang */}
              <SliderNews
                data={newsFashion}
                title="Thời trang"
                slugCate="Thoi-trang"
              ></SliderNews>

              {/* <Fashion fashion={newsFashion}></Fashion> */}
            </div>
          </div>
        </div>
        <div className="tab-news">
          <div className="container">
            <div className="row">
              <LeftManyPage
                funny={newsFunny}
                social={newsSocial}
                beautify={newsBeautify}
              ></LeftManyPage>
              <div className="col-md-6">
                <RightManyPage
                  economy={newsEconomy}
                  family={newsFamily}
                  travel={newsTravel}
                ></RightManyPage>
              </div>
            </div>
          </div>
        </div>
        <StrangeNews
          strange={listNewsStrange}
          readMore={listNewsReadMore}
        ></StrangeNews>
      </>
    </>
  );
};

export default HomeScreen;
