import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import NewsSlide from "../components/NewsSlide";
import NewsRightSocker from "../components/NewsRightSocker";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
import { listProducts } from "../actions/productActions";

import { listNewsSocerSlide } from "../actions/productActions";
import { listNewsSocerRight } from "../actions/productActions";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const limit = match.params.limit || 10;

  const offset = match.params.offset || 0;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const newsSocerListSlide = useSelector((state) => state.listNewsSocerSlide);
  const listNewsSocerRight = useSelector((state) => state.listNewsSocerRight);
  console.log("newsSocerListSlide", newsSocerListSlide);
  const { news } = newsSocerListSlide;
  // const { loading, error, products, page, pages } = productList
  console.log("PRODUCTLIST", [productList]);

  console.log("newsSocerListSlide", newsSocerListSlide);
  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  useEffect(() => {
    dispatch(listNewsSocerSlide(keyword, 1, 0));
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
        <div style={{paddingTop:0}} class="top-news">
          <div class="container">
            <h3>Bóng đá</h3>
            <Row>
              <NewsSlide news={news} />
            </Row>
          </div>
        </div>
        {/* <News></News> */}
        {/* <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          /> */}
      </>
    </>
  );
};

export default HomeScreen;
