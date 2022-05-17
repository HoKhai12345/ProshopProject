import React, { useState, useEffect } from "react";
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
import Rating from "../components/Rating";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Meta from "../components/Meta";
import RightManyPage from "../components/RightManyPage";
import RelatedNews from "../components/RelatedNews";
import CountNewsCate from "../components/CountNewsCate";
import RightFirt from "../components/RightFirt";
import { listNewsTravel } from "../actions/productActions";
import { listNewsFamily } from "../actions/productActions";
import { listNewsEconomy } from "../actions/productActions";
import { countCatePost } from "../actions/productActions";
import {
  listProductDetails,
  createProductReview,
  listProducts,
  newsBySlugs,
} from "../actions/productActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../constants/productConstants";
import { CATEGORYIDCONFIG } from "../constants/configConstant";
import Traffic from "../components/Traffic";
let trimString = function (string, length) {
  return string.length > length ? string.substring(0, length) + "..." : string;
};
const NewsDetailScreen = ({ history, match }) => {
  const dispatch = useDispatch();

  const newsFamilyPage = useSelector((state) => state.listNewsFamily);
  // lấy dữ liệu kinh tế  từ store
  const newsEconomyPage = useSelector((state) => state.listNewsEconomy);
  // lấy dữ liệu du lịch từ store
  const newsTravelPage = useSelector((state) => state.listNewsTravel);
  // lấy tổng bản ghi theo từng chuyên mục trong store
  const countNewsPostCate = useSelector((state) => state.countNewsPostCate);

  const { newsFamily } = newsFamilyPage;
  const { newsTravel } = newsTravelPage;
  const { newsEconomy } = newsEconomyPage;
  const { count } = countNewsPostCate;
  const [newsDetail, setNewsDetail] = useState({});
  const [relatedNews, setRelatedNews] = useState();
  const [dataInThisCategory, setDataInThisCategory] = useState();
  const [newCategoryId, setNewCategoryId] = useState(0);
  const [nameCate, setNameCate] = useState("");
  const [slugCate, setSlugCate] = useState("");
  const slug = match.params.slugNews;
  const categoryId = decodeURI(match.params.categoryId);
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

  if (!slug) {
    history.push("/");
  }
  useEffect(() => {
    newsBySlugs(slug, (err, data) => {
      if (data.data.length > 0) {
        setNewsDetail(data.data[0]);
        setRelatedNews(data.dataRelated);
        setNewCategoryId(data.data[0].categoryId);
        setDataInThisCategory(data.dataInThisCategory);
        CATEGORYIDCONFIG.map((value) => {
          if (value.id == data.data[0].categoryId) {
            setNameCate(value.categoryName);
            setSlugCate(value.slug);
          }
        });
      } else {
        history.push("/404not-fount");
      }
    });
  }, [slug]);

  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  return (
    <>
      <div className="breadcrumb-wrap">
        <div className="container">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={``}>
                <a>Trang chủ</a>
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={"/cate/" + slugCate}>
                <a>{nameCate}</a>
              </Link>
            </li>
            <li className="breadcrumb-item tooltit">
              {console.log("newsDetail.title", newsDetail.title)}
              <a>{newsDetail.title && trimString(newsDetail.title, 40)}</a>
            </li>
            <span class="tooltiptext">{newsDetail.title}</span>
            {/* <li className="breadcrumb-item active">News details</li> */}
          </ul>
        </div>
      </div>
      {/* <!-- Breadcrumb End -->
        
        <!-- Single News Start--> */}
      <div className="single-news">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="sn-container">
                <div className="sn-img">
                  <img
                    src={
                      newsDetail.photo_data != undefined
                        ? "http://evideo.vn/cms/" +
                          JSON.parse(newsDetail.photo_data)["big_690x450"]
                        : ""
                    }
                  />
                  <h2
                    style={{
                      color: "#e3e3e3",
                      background: "black",
                      fontSize: 23,
                    }}
                  >
                    {newsDetail.title}
                  </h2>
                </div>

                <div
                  className="sn-content"
                  dangerouslySetInnerHTML={{
                    __html: newsDetail.content
                      ? newsDetail.content.replaceAll(
                          "img ",
                          "img style='max-width:100%'"
                        )
                      : "Không có nội dung!",
                  }}
                />
              </div>
              <div className="sn-relateds">
                {/* <h2>Bài viết liên quan</h2> */}

                <RelatedNews
                  related={relatedNews}
                  title="Bài viết liên quan"
                ></RelatedNews>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar">
                <RightFirt
                  data={dataInThisCategory}
                  title={"Cùng chuyên mục"}
                ></RightFirt>

                <div className="sidebar-widget">
                  <div className="image">
                    <a href="https://htmlcodex.com">
                      <img src="/images/ads-1.jpg" alt="Image" />
                    </a>
                  </div>
                </div>
                <div className="sidebar-widget">
                  <div className="tab-news">
                    <RightManyPage
                      economy={newsEconomy}
                      family={newsFamily}
                      travel={newsTravel}
                    ></RightManyPage>
                  </div>
                </div>

                <div className="sidebar-widget">
                  <div className="image">
                    <a href="https://htmlcodex.com">
                      <img src="/images/ads-1.jpg" alt="Image" />
                    </a>
                  </div>
                </div>
                {/* tổng bản ghi trong các chuyên mục */}
                <CountNewsCate
                  data={count}
                  title={"Các chuyên mục khác"}
                  currentCategory={nameCate}
                ></CountNewsCate>

                <div className="sidebar-widget">
                  <div className="image">
                    <a href="https://htmlcodex.com">
                      <img src="/images/ads-1.jpg" alt="Image" />
                    </a>
                  </div>
                </div>

                {/* <div className="sidebar-widget">
                  <h2 className="sw-title">Tags Cloud</h2>
                  <div className="tags">
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

export default NewsDetailScreen;
