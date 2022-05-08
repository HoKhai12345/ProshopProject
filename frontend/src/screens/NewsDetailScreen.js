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
import {
  listProductDetails,
  createProductReview,
  listProducts,
} from "../actions/productActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../constants/productConstants";

const NewsDetailScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

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
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">News</a></li>
            <li class="breadcrumb-item active">News details</li>
          </ul>
        </div>
      </div>
      <div class="single-news">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="sn-container">
                <div class="sn-img">
                  <img src="img/news-825x525.jpg" />
                </div>

                <div class="the-article-body">   
                  <p>Chiều 22/6, ông Phạm Văn Châu, Giám đốc Công ty cổ phần đầu tư TCP (đơn vị quản lý nhà xe), cho biết 2 thang máy (mỗi chiếc vận chuyển 24 người) tại sân bay Tân Sơn Nhất vừa hoàn tất lắp đặt hôm 21/6.</p><p>Tuy nhiên do dịch Covid-19, sân bay chưa đưa 2 thang mới vào hoạt động do 2 thang cũ vẫn đủ đáp ứng lượng khách hiện tại. Hệ thống thang máy sẽ bắt đầu vận hành khi khách ở sân bay tăng trở lại.</p><p>Việc lắp bổ sung 2 thang máy ban đầu dự kiến hoàn thành trước Tết Nguyên đán, sau đó dời sang tháng 4/2021 và tiếp tục trễ hẹn.</p>
                  <table class="picture"><tbody><tr><td class="pic"><div class="twentytwenty-container"><img imgid="5671710" title="thang m&aacute;y s&acirc;n bay T&acirc;n Sơn Nhất ảnh 1" alt="thang may san bay Tan Son Nhat anh 1" width="2000" height="1317" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://znews-photo.zadn.vn/Uploaded/gtnzna/2021_06_22/sanbay_zing22_1_.jpg"/><img imgid="5671713" title="thang m&aacute;y s&acirc;n bay T&acirc;n Sơn Nhất ảnh 2" alt="thang may san bay Tan Son Nhat anh 2" width="2560" height="1706" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://znews-photo.zadn.vn/Uploaded/gtnzna/2021_06_22/thangmay_hy_sanbay_zing.jpg"/></div></td></tr><tr><td class="pCaption caption">Thang máy mới (phải) tại sân bay đã hoàn tất lắp đặt hôm 21/6. Ảnh: <em>Hải Yến.</em></td></tr></tbody></table>        <p>Trước đó, ngày 14/11/2020, sau khi áp dụng quy định phân làn, phân luồng ôtô tại Tân Sơn Nhất, hành khách sử dụng xe công nghệ phải di chuyển lên tầng 3-5 của nhà giữ xe. Hai thang máy tại sân bay (mỗi chiếc vận chuyển 22 người) luôn rơi vào tình trạng quá tải.</p><p>Ông Châu cho biết theo thống kê của TCP, thời gian bình quân chờ đợi thang máy của hành khách là 7 phút. Nếu bổ sung thêm 2 thang máy, thời gian chờ dự kiến giảm xuống dưới 5 phút.</p><p>Trước đó, ngày 2/6, Cục Hàng không Việt Nam cho phép sân bay Tân Sơn Nhất đón khách nhập cảnh sau lệnh tạm dừng đón các chuyến bay nhập cảnh được công bố cách đó 2 ngày để phòng, chống dịch.</p><p>Tuy nhiên, số chuyến bay quốc tế chọn địa điểm hạ cánh tại Tân Sơn Nhất không có nhiều. Số chuyến bay nội địa cũng phải giảm xuống còn 63 chuyến khứ hồi mỗi ngày do ảnh hưởng dịch bệnh.</p>                     </div>

                  {/* <div class="sn-content">
                                <h1 class="sn-title">Lorem ipsum dolor sit amet</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie, lorem eu eleifend bibendum, augue purus mollis sapien, non rhoncus eros leo in nunc. Donec a nulla vel turpis consectetur tempor ac vel justo. In hac habitasse platea dictumst. Cras nec sollicitudin eros. Nunc eu enim non turpis sagittis rhoncus consectetur id augue. Mauris dignissim neque felis. Phasellus mollis mi a pharetra cursus. Maecenas vulputate augue placerat lacus mattis, nec ornare risus sollicitudin.
                                </p>
                                <p>
                                    Mauris eu pulvinar tellus, eu luctus nisl. Pellentesque suscipit mi eu varius pulvinar. Aenean vulputate, massa eget elementum finibus, ipsum arcu commodo est, ut mattis eros orci ac risus. Suspendisse ornare, massa in feugiat facilisis, eros nisl auctor lacus, laoreet tempus elit dolor eu lorem. Nunc a arcu suscipit, suscipit quam quis, semper augue.
                                </p>
                                <p>
                                    Quisque arcu nulla, convallis nec orci vel, suscipit elementum odio. Curabitur volutpat velit non diam tincidunt sodales. Nullam sapien libero, bibendum nec viverra in, iaculis ut eros.
                                </p>
                                <h3>Lorem ipsum dolor sit amet</h3>
                                <p>
                                    Vestibulum sit amet ullamcorper sem. Integer hendrerit elit eget purus sodales maximus. Quisque ac nulla arcu. Morbi venenatis arcu ac arcu cursus pharetra. Morbi sit amet viverra augue, ac ultricies libero. Praesent elementum lectus mi, eu elementum urna venenatis sed. Donec auctor purus ut mattis feugiat. Integer mi erat, consectetur sed tincidunt vitae, sagittis elementum libero. Vivamus a mauris consequat, hendrerit lectus in, fermentum libero. Integer mattis bibendum neque et porttitor.
                                </p>
                                <p>
                                    Mauris quis arcu finibus, posuere dolor eu, viverra felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In porta, ex vitae accumsan facilisis, nisi tellus dictum metus, quis fringilla dui tellus in tellus. Praesent pharetra orci at vehicula posuere. Sed molestie fringilla lorem, vel imperdiet tortor blandit at. Quisque non ultrices lorem, eget rhoncus orci. Fusce porttitor placerat diam et mattis. Nam laoreet, ex eu posuere sollicitudin, sem tortor pellentesque ipsum, quis mattis purus lectus ut lacus. Integer eu risus ac est interdum scelerisque.
                                </p>
                                <h4>Lorem ipsum dolor sit amet</h4>
                                <p>
                                    Praesent ultricies, mauris eget vestibulum viverra, neque lorem malesuada mauris, eget rhoncus lectus enim a lorem. Vivamus at vehicula risus, eget facilisis massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et posuere sapien. Fusce bibendum lorem sem, quis tincidunt felis mattis nec.
                                </p>
                                <p>
                                    Proin vel nulla purus. Nunc nec eros in nisi efficitur rutrum quis sed eros. Mauris felis dolor, rhoncus eget gravida vitae, pretium vel arcu. Cras blandit tellus eget tellus dictum venenatis. Sed ultricies bibendum dictum. Etiam facilisis erat id turpis tincidunt malesuada. Duis bibendum sapien eu condimentum sagittis. Proin nunc lorem, ullamcorper vel tortor sodales, imperdiet lacinia dui. Sed congue, felis id rhoncus varius, urna lacus imperdiet nunc, ut porttitor mauris mi quis mi. Integer rutrum est finibus metus eleifend scelerisque. Morbi auctor dignissim purus in interdum. Vestibulum eu dictum enim. Suspendisse et sem vitae velit feugiat facilisis.
                                </p>
                                <p>
                                    Nam sodales scelerisque nunc sed convallis. Vestibulum facilisis porta erat, sit amet pharetra tortor blandit id. Nunc velit tellus, consectetur sed convallis in, tincidunt finibus nulla. Integer vel ex in mauris tincidunt tincidunt nec sed elit. Etiam pretium lectus lectus, sed aliquet erat tristique euismod. Praesent faucibus nisl augue, ac tempus libero pellentesque malesuada. Vivamus iaculis imperdiet laoreet. Aliquam vel felis felis. Proin sed sapien erat. Etiam a quam et metus tempor rutrum. Curabitur in faucibus justo. Etiam imperdiet iaculis urna.
                                </p>
                            </div> */}
                </div>
                <div class="sn-related">
                  <h2>Related News</h2>
                  <div class="row sn-slider">
                    <div class="col-md-4">
                      <div class="sn-img">
                        <img src="img/news-350x223-1.jpg" />
                        <div class="sn-title">
                          <a href="">Interdum et fames ac ante</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="sn-img">
                        <img src="img/news-350x223-2.jpg" />
                        <div class="sn-title">
                          <a href="">Interdum et fames ac ante</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="sn-img">
                        <img src="img/news-350x223-3.jpg" />
                        <div class="sn-title">
                          <a href="">Interdum et fames ac ante</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="sn-img">
                        <img src="img/news-350x223-4.jpg" />
                        <div class="sn-title">
                          <a href="">Interdum et fames ac ante</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="sidebar">
                  <div class="sidebar-widget">
                    <h2 class="sw-title">In This Category</h2>
                    <div class="news-list">
                      <div class="nl-item">
                        <div class="nl-img">
                          <img src="img/news-350x223-1.jpg" />
                        </div>
                        <div class="nl-title">
                          <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                        </div>
                      </div>
                      <div class="nl-item">
                        <div class="nl-img">
                          <img src="img/news-350x223-2.jpg" />
                        </div>
                        <div class="nl-title">
                          <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                        </div>
                      </div>
                      <div class="nl-item">
                        <div class="nl-img">
                          <img src="img/news-350x223-3.jpg" />
                        </div>
                        <div class="nl-title">
                          <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                        </div>
                      </div>
                      <div class="nl-item">
                        <div class="nl-img">
                          <img src="img/news-350x223-4.jpg" />
                        </div>
                        <div class="nl-title">
                          <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                        </div>
                      </div>
                      <div class="nl-item">
                        <div class="nl-img">
                          <img src="img/news-350x223-5.jpg" />
                        </div>
                        <div class="nl-title">
                          <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="sidebar-widget">
                    <div class="image">
                      <a href="https://htmlcodex.com"><img src="img/ads-2.jpg" alt="Image" /></a>
                    </div>
                  </div>

                  <div class="sidebar-widget">
                    <div class="tab-news">
                      <ul class="nav nav-pills nav-justified">
                        <li class="nav-item">
                          <a class="nav-link active" data-toggle="pill" href="#featured">Featured</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" data-toggle="pill" href="#popular">Popular</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" data-toggle="pill" href="#latest">Latest</a>
                        </li>
                      </ul>

                      <div class="tab-content">
                        <div id="featured" class="container tab-pane active">
                          <div class="tn-news">
                            <div class="tn-img">
                              <img src="img/news-350x223-1.jpg" />
                            </div>
                            <div class="tn-title">
                              <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            </div>
                          </div>
                          <div class="tn-news">
                            <div class="tn-img">
                              <img src="img/news-350x223-2.jpg" />
                            </div>
                            <div class="tn-title">
                              <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            </div>
                          </div>
                          <div class="tn-news">
                            <div class="tn-img">
                              <img src="img/news-350x223-3.jpg" />
                            </div>
                            <div class="tn-title">
                              <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            </div>
                          </div>
                          <div class="tn-news">
                            <div class="tn-img">
                              <img src="img/news-350x223-4.jpg" />
                            </div>
                            <div class="tn-title">
                              <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            </div>
                          </div>
                          <div class="tn-news">
                            <div class="tn-img">
                              <img src="img/news-350x223-5.jpg" />
                            </div>
                            <div class="tn-title">
                              <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            </div>
                          </div>
                        </div>
                        <div id="popular" class="container tab-pane fade">
                          <div class="tn-news">
                            <div class="tn-img">
                              <img src="img/news-350x223-4.jpg" />
                            </div>
                            <div class="tn-title">
                              <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            </div>
                          </div>
                          <div class="tn-news">
                            <div class="tn-img">
                              <img src="img/news-350x223-3.jpg" />
                            </div>
                            <div class="tn-title">
                              <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            </div>
                          </div>
                          <div class="tn-news">
                            <div class="tn-img">
                              <img src="img/news-350x223-2.jpg" />
                            </div>
                            <div class="tn-title">
                              <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            </div>
                          </div>
                          <div class="tn-news">
                            <div class="tn-img">
                              <img src="img/news-350x223-1.jpg" />
                            </div>
                            <div class="tn-title">
                              <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            </div>
                          </div>
                          <div class="tn-news">
                            <div class="tn-img">
                              <img src="img/news-350x223-2.jpg" />
                            </div>
                            <div class="tn-title">
                              <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            </div>
                          </div>
                        </div>
                        <div id="latest" class="container tab-pane fade">
                          <div class="tn-news">
                            <div class="tn-img">
                              <img src="img/news-350x223-3.jpg" />
                            </div>
                            <div class="tn-title">
                              <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            </div>
                          </div>
                          <div class="tn-news">
                            <div class="tn-img">
                              <img src="img/news-350x223-4.jpg" />
                            </div>
                            <div class="tn-title">
                              <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            </div>
                          </div>
                          <div class="tn-news">
                            <div class="tn-img">
                              <img src="img/news-350x223-5.jpg" />
                            </div>
                            <div class="tn-title">
                              <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            </div>
                          </div>
                          <div class="tn-news">
                            <div class="tn-img">
                              <img src="img/news-350x223-4.jpg" />
                            </div>
                            <div class="tn-title">
                              <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            </div>
                          </div>
                          <div class="tn-news">
                            <div class="tn-img">
                              <img src="img/news-350x223-3.jpg" />
                            </div>
                            <div class="tn-title">
                              <a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="sidebar-widget">
                    <div class="image">
                      <a href="https://htmlcodex.com"><img src="img/ads-2.jpg" alt="Image" /></a>
                    </div>
                  </div>

                  <div class="sidebar-widget">
                    <h2 class="sw-title">News Category</h2>
                    <div class="category">
                      <ul>
                        <li><a href="">National</a><span>(98)</span></li>
                        <li><a href="">International</a><span>(87)</span></li>
                        <li><a href="">Economics</a><span>(76)</span></li>
                        <li><a href="">Politics</a><span>(65)</span></li>
                        <li><a href="">Lifestyle</a><span>(54)</span></li>
                        <li><a href="">Technology</a><span>(43)</span></li>
                        <li><a href="">Trades</a><span>(32)</span></li>
                      </ul>
                    </div>
                  </div>

                  <div class="sidebar-widget">
                    <div class="image">
                      <a href="https://htmlcodex.com"><img src="img/ads-2.jpg" alt="Image" /></a>
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
