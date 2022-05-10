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
  newsBySlugs
} from "../actions/productActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../constants/productConstants";
import { CATEGORYIDCONFIG } from "../constants/configConstant";

const NewsDetailScreen = ({ history, match }) => {
  const [newsDetail , setNewsDetail] = useState({});
  const [newCategoryId , setNewCategoryId] = useState(0);
  const [nameCate , setNameCate] = useState("");
  const slug = match.params.slugNews;
  console.log("SLLLLLLLLLL",slug);
  if(!slug){
    history.push('/');
  }
  useEffect(()=>{
    newsBySlugs(slug, (err , data)=>{
      console.log("DATA",data);
      if(data.data.length >0){
        setNewsDetail(data.data[0]);
        setNewCategoryId(data.data[0].categoryId);
        console.log("data.data[0].categoryId",data.data[0].categoryId);
        CATEGORYIDCONFIG.map((value)=>{
          console.log("newCategoryId",data.data[0].categoryId);
            if(value.id == data.data[0].categoryId){
              setNameCate(value.categoryName);
              console.log("NEWSCATE",nameCate);
            }
        })
      }else{
        console.log("KO CO DATA");
        history.push('/');

      }

   });    
 },[])
  // useEffect(()=>{
 
  // },[newCategoryId])

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
            <li class="breadcrumb-item">
              <a href="#">Home</a>
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
                  {console.log("newsDetail", newsDetail)}
                  {/* {console.log("JSON.stringify(newsDetail.photo_data)",JSON.parse(newsDetail.photo_data).big_690x450)} */}
                  <img src={"http://evideo.vn/cms/" + newsDetail.thumb} />
                </div>
                <div class="sn-content">
                  {/* Khúc này đổ dữ liệu từ db */}






              {/* <p>
                    <strong>PSG tính đưa Kante hồi hương.</strong>
                    Theo ESPN, PSG đang nhắm đến tiền vệ N’Golo Kante của
                    <a class="TextlinkBaiviet" title="Chelsea">
                      Chelsea
                    </a>
                    . PSG rất cần tăng cường hàng tiền vệ và sau khi quyết định
                    bỏ qua mục tiêu Idrissa Gueye của Everton, Victor Wanyama
                    của Tottenham, nhà vô địch nước Pháp quyết tâm nhắm tới một
                    tên tuổi lớn hơn. Do đó Kante được xem là mục tiêu số 1. Cái
                    khó là sau khi đã để Hazard đến Real Madrid, Chelsea không
                    sẵn sàng "bán máu" trong hoàn cảnh bị cấm chuyển nhượng.
                  </p>
                  <p align="center">
                    <img
                      class="news-image"
                      alt="Chuyển nhượng HOT 30/6: PSG rút ruột Chelsea, tính đưa Kante hồi hương - 1"
                      onclick="return openNewImage(this, '')"
                      src="https://cdn.24h.com.vn/upload/2-2019/images/2019-06-30/Chuyen-nhuong-HOT-30-6-PSG-rut-ruot-Chelsea-tinh-dua-Kante-hoi-huong-psg-1561913725-464-width660height396.jpg"
                    />
                  </p>
                  <p>
                    Kante lọt vào tầm ngắm của PSG
                  </p>
                  <p>
                    <strong>
                      HLV Emery săn hàng Tây Ban Nha cho
                      <a class="TextlinkBaiviet" title="Arsenal">
                        Arsenal
                      </a>
                      
                    </strong>
                    Trong nỗ lực củng cố hàng phòng ngự, HLV Unai Emery muốn đưa
                    Djene Dakonam của Getafe đến Emirates. Trung vệ 27 tuổi này
                    được HLV Unai Emery đánh giá rất cao. Nhưng vấn đề nằm ở chỗ
                    Getafe sẽ không dễ dàng nhả người khi mà hợp đồng của
                    Dakonam với họ còn tới 4 năm nữa mới đáo hạn. Hi vọng cho
                    "Pháo thủ" nằm ở chỗ phí giải phóng hợp đồng của Dakonam chỉ
                    35 triệu euro.
                  </p>
                  <p>
                    <strong>Sao trẻ Barca sắp bị thanh lý.</strong> Cầu thủ tấn
                    công người Brazil, Malcom bị xem là bản hợp đồng thất bại ở
                    Barcelona. Cựu cầu thủ của Bordeaux đến sân Camp Nou với giá
                    trị 45 triệu euro nhưng không đáp ứng được sự kỳ vọng của
                    các Cule. Nhiều khả năng đội bóng xứ Catalan sẽ đón ngôi sao
                    Griezmann nên việc ra đi của tiền đạo Brazil chỉ là việc sớm
                    muộn. Vào lúc này, hai đội bóng thành Milano là AC và Inter
                    Milan đều ngỏ ý muốn chiêu mộ Malcom.
                  </p>
                  <p>
                    <strong>
                      Tỏa sáng ở Champions League, David Neres đắt hàng.
                    </strong>
                    Theo tin từ UOL Esporte tại Brazil, người đại diện của ngôi
                    sao tấn công David Neres đang nói chuyện với 4 CLB về tương
                    lai thân chủ mình. Tuyển thủ người Brazil này là một trong
                    những sao sáng trong đội hình Ajax vào
                    <a class="TextlinkBaiviet" title="bán kết Champions League">
                      bán kết Champions League
                    </a>
                    . Ngoài ra, mức giá dễ chịu hơn những đồng đội như De Ligt
                    hay De Jong (nhưng vẫn ở mức 50 triệu euro trở lên), tuyển
                    thủ Brazil đang được PSG, Atletico Madrid, AC Milan và
                    Everton nỗ lực chèo kéo,
                  </p>
                  <p>
                    <strong>Navas sắp rời Real.</strong> Báo giới tại Bồ Đào Nha
                    đã đưa tin cho biết Keylor Navas có thể sẽ là thủ môn được
                    Porto chọn để thay thế cho Iker Casillas trong phiên chợ hè
                    2019 này. Navas không còn được Real Madrid trao suất bắt
                    chính sau khi đã sở hữu Thibaut Courtois trong đội hình.
                    Navas được mua về Real trong mùa giải cuối của Casillas tại
                    Bernabeu và sau đó thay thế chính "Thánh Iker".
                  </p> */}

                  {/* // kết thúc đổ content */}
                </div>
              </div>
              <div class="sn-related">
                <h2>Related News</h2>
                <div class="row sn-slider">
                  <div class="col-md-4">
                    <div class="sn-img">
                      <img src="//images/news-350x223-1.jpg" />
                      <div class="sn-title">
                        <a href="">Interdum et fames ac ante</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="sn-img">
                      <img src="/images/news-350x223-2.jpg" />
                      <div class="sn-title">
                        <a href="">Interdum et fames ac ante</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="sn-img">
                      <img src="/images/news-350x223-3.jpg" />
                      <div class="sn-title">
                        <a href="">Interdum et fames ac ante</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="sn-img">
                      <img src="/images/news-350x223-4.jpg" />
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
                        <img src="/images/news-350x223-1.jpg" />
                      </div>
                      <div class="nl-title">
                        <a href="">
                          Lorem ipsum dolor sit amet consec adipis elit
                        </a>
                      </div>
                    </div>
                    <div class="nl-item">
                      <div class="nl-img">
                        <img src="/images/news-350x223-2.jpg" />
                      </div>
                      <div class="nl-title">
                        <a href="">
                          Lorem ipsum dolor sit amet consec adipis elit
                        </a>
                      </div>
                    </div>
                    <div class="nl-item">
                      <div class="nl-img">
                        <img src="/images/news-350x223-3.jpg" />
                      </div>
                      <div class="nl-title">
                        <a href="">
                          Lorem ipsum dolor sit amet consec adipis elit
                        </a>
                      </div>
                    </div>
                    <div class="nl-item">
                      <div class="nl-img">
                        <img src="/images/news-350x223-4.jpg" />
                      </div>
                      <div class="nl-title">
                        <a href="">
                          Lorem ipsum dolor sit amet consec adipis elit
                        </a>
                      </div>
                    </div>
                    <div class="nl-item">
                      <div class="nl-img">
                        <img src="/images/news-350x223-5.jpg" />
                      </div>
                      <div class="nl-title">
                        <a href="">
                          Lorem ipsum dolor sit amet consec adipis elit
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="sidebar-widget">
                  <div class="image">
                    <a href="https://htmlcodex.com">
                      <img src="img/ads-2.jpg" alt="Image" />
                    </a>
                  </div>
                </div>

                <div class="sidebar-widget">
                  <div class="tab-news">
                    <ul class="nav nav-pills nav-justified">
                      <li class="nav-item">
                        <a
                          class="nav-link active"
                          data-toggle="pill"
                          href="#featured"
                        >
                          Featured
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" data-toggle="pill" href="#popular">
                          Popular
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" data-toggle="pill" href="#latest">
                          Latest
                        </a>
                      </li>
                    </ul>

                    <div class="tab-content">
                      <div id="featured" class="container tab-pane active">
                        <div class="tn-news">
                          <div class="tn-img">
                            <img src="/images/news-350x223-1.jpg" />
                          </div>
                          <div class="tn-title">
                            <a href="">
                              Lorem ipsum dolor sit amet consec adipis elit
                            </a>
                          </div>
                        </div>
                        <div class="tn-news">
                          <div class="tn-img">
                            <img src="/images/news-350x223-2.jpg" />
                          </div>
                          <div class="tn-title">
                            <a href="">
                              Lorem ipsum dolor sit amet consec adipis elit
                            </a>
                          </div>
                        </div>
                        <div class="tn-news">
                          <div class="tn-img">
                            <img src="/images/news-350x223-3.jpg" />
                          </div>
                          <div class="tn-title">
                            <a href="">
                              Lorem ipsum dolor sit amet consec adipis elit
                            </a>
                          </div>
                        </div>
                        <div class="tn-news">
                          <div class="tn-img">
                            <img src="/images/news-350x223-4.jpg" />
                          </div>
                          <div class="tn-title">
                            <a href="">
                              Lorem ipsum dolor sit amet consec adipis elit
                            </a>
                          </div>
                        </div>
                        <div class="tn-news">
                          <div class="tn-img">
                            <img src="/images/news-350x223-5.jpg" />
                          </div>
                          <div class="tn-title">
                            <a href="">
                              Lorem ipsum dolor sit amet consec adipis elit
                            </a>
                          </div>
                        </div>
                      </div>
                      <div id="popular" class="container tab-pane fade">
                        <div class="tn-news">
                          <div class="tn-img">
                            <img src="/images/news-350x223-4.jpg" />
                          </div>
                          <div class="tn-title">
                            <a href="">
                              Lorem ipsum dolor sit amet consec adipis elit
                            </a>
                          </div>
                        </div>
                        <div class="tn-news">
                          <div class="tn-img">
                            <img src="/images/news-350x223-3.jpg" />
                          </div>
                          <div class="tn-title">
                            <a href="">
                              Lorem ipsum dolor sit amet consec adipis elit
                            </a>
                          </div>
                        </div>
                        <div class="tn-news">
                          <div class="tn-img">
                            <img src="/images/news-350x223-2.jpg" />
                          </div>
                          <div class="tn-title">
                            <a href="">
                              Lorem ipsum dolor sit amet consec adipis elit
                            </a>
                          </div>
                        </div>
                        <div class="tn-news">
                          <div class="tn-img">
                            <img src="/images/news-350x223-1.jpg" />
                          </div>
                          <div class="tn-title">
                            <a href="">
                              Lorem ipsum dolor sit amet consec adipis elit
                            </a>
                          </div>
                        </div>
                        <div class="tn-news">
                          <div class="tn-img">
                            <img src="/images/news-350x223-2.jpg" />
                          </div>
                          <div class="tn-title">
                            <a href="">
                              Lorem ipsum dolor sit amet consec adipis elit
                            </a>
                          </div>
                        </div>
                      </div>
                      <div id="latest" class="container tab-pane fade">
                        <div class="tn-news">
                          <div class="tn-img">
                            <img src="/images/news-350x223-3.jpg" />
                          </div>
                          <div class="tn-title">
                            <a href="">
                              Lorem ipsum dolor sit amet consec adipis elit
                            </a>
                          </div>
                        </div>
                        <div class="tn-news">
                          <div class="tn-img">
                            <img src="/images/news-350x223-4.jpg" />
                          </div>
                          <div class="tn-title">
                            <a href="">
                              Lorem ipsum dolor sit amet consec adipis elit
                            </a>
                          </div>
                        </div>
                        <div class="tn-news">
                          <div class="tn-img">
                            <img src="/images/news-350x223-5.jpg" />
                          </div>
                          <div class="tn-title">
                            <a href="">
                              Lorem ipsum dolor sit amet consec adipis elit
                            </a>
                          </div>
                        </div>
                        <div class="tn-news">
                          <div class="tn-img">
                            <img src="/images/news-350x223-4.jpg" />
                          </div>
                          <div class="tn-title">
                            <a href="">
                              Lorem ipsum dolor sit amet consec adipis elit
                            </a>
                          </div>
                        </div>
                        <div class="tn-news">
                          <div class="tn-img">
                            <img src="/images/news-350x223-3.jpg" />
                          </div>
                          <div class="tn-title">
                            <a href="">
                              Lorem ipsum dolor sit amet consec adipis elit
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="sidebar-widget">
                  <div class="image">
                    <a href="https://htmlcodex.com">
                      <img src="img/ads-2.jpg" alt="Image" />
                    </a>
                  </div>
                </div>

                <div class="sidebar-widget">
                  <h2 class="sw-title">News Category</h2>
                  <div class="category">
                    <ul>
                      <li>
                        <a href="">National</a>
                        <span>(98)</span>
                      </li>
                      <li>
                        <a href="">International</a>
                        <span>(87)</span>
                      </li>
                      <li>
                        <a href="">Economics</a>
                        <span>(76)</span>
                      </li>
                      <li>
                        <a href="">Politics</a>
                        <span>(65)</span>
                      </li>
                      <li>
                        <a href="">Lifestyle</a>
                        <span>(54)</span>
                      </li>
                      <li>
                        <a href="">Technology</a>
                        <span>(43)</span>
                      </li>
                      <li>
                        <a href="">Trades</a>
                        <span>(32)</span>
                      </li>
                    </ul>
                  </div>
                </div>

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
