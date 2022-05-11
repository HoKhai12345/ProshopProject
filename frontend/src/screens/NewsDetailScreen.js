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
  useEffect(() => {
    dispatch(countCatePost());
  }, []);
  if (!slug) {
    history.push("/");
  }
  useEffect(() => {
    newsBySlugs(slug, (err, data) => {
      console.log("DATA", data);
      if (data.data.length > 0) {
        setNewsDetail(data.data[0]);
        setRelatedNews(data.dataRelated);
        setNewCategoryId(data.data[0].categoryId);
        setDataInThisCategory(data.dataInThisCategory);
        console.log("data.data[0].categoryId", data.data[0].categoryId);
        CATEGORYIDCONFIG.map((value) => {
          console.log("newCategoryId", data.data[0].categoryId);
          if (value.id == data.data[0].categoryId) {
            setNameCate(value.categoryName);
            console.log("NEWSCATE", nameCate);
          }
        });
      } else {
        console.log("KO CO DATA");
        history.push("/");
      }
    });
  }, [slug]);






  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const productDetails = useSelector((state) => state.productDetails);
  console.log("productDetails", productDetails);
  const { loading, error, product } = productDetails;
  console.log("product", product);

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const { success: successProductReview, error: errorProductReview } =
    productReviewCreate;

  useEffect(() => {
    if (successProductReview) {
      alert("Review Submitted!");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match, successProductReview]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(match.params.id, {
        rating,
        comment,
      })
    );
  };

  const countStock = (countInStock) => {
    console.log("countInStock", countInStock);
    let html = [];
    for (var i = 1; i <= countInStock; i++) {
      html.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return html;
  };

  return (
    <>
      <div class="breadcrumb-wrap">
        <div class="container">
          <ul class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to={`/`}>
                <a href="/">Trang chủ</a>
              </Link>
            </li>
            <li class="breadcrumb-item">
              <a href="#">{nameCate}</a>
            </li>
            {/* <li class="breadcrumb-item active">News details</li> */}
          </ul>
        </div>
      </div>
      {/* <!-- Breadcrumb End -->
        
        <!-- Single News Start--> */}
      <div class="single-news">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="sn-container">
                <div class="sn-img">
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
              <div class="sn-relateds">
                {/* <h2>Bài viết liên quan</h2> */}
                {console.log("relatedNews", relatedNews)}

                <RelatedNews
                  related={relatedNews}
                  title="Bài viết liên quan"
                ></RelatedNews>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="sidebar">
                <RightFirt
                  data={dataInThisCategory}
                  title={"Cùng chuyên mục"}
                ></RightFirt>

                <div class="sidebar-widget">
                  <div class="image">
                    <a href="https://htmlcodex.com">
                      <img src="img/ads-2.jpg" alt="Image" />
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
                      <img src="img/ads-2.jpg" alt="Image" />
                    </a>
                  </div>
                </div>
                 {/* tổng bản ghi trong các chuyên mục */}
                 <CountNewsCate data={count} title={"Các chuyên mục khác"}></CountNewsCate>
            

                <div class="sidebar-widget">
                  <div class="image">
                    <a href="https://htmlcodex.com">
                      <img src="img/ads-2.jpg" alt="Image" />
                    </a>
                  </div>
                </div>

                <div class="sidebar-widget">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetailScreen;
