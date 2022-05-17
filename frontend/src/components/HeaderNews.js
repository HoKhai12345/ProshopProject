import React from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import SearchBox from "./SearchBox";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  //   console.log("window.location.href", window.location.href);
  return (
    <header>
      <div
        className="fb-share-button"
        data-href={window.location.href}
        data-layout="button_count"
      ></div>
      {/* <!-- Top Bar Start --> */}
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="tb-contact">
                <p>
                  <i className="fas fa-envelope"></i>info@mail.com
                </p>
                <p>
                  <i className="fas fa-phone-alt"></i>+012 345 6789
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tb-menu">
                <a href="">About</a>
                <a href="">Privacy</a>
                <a href="">Terms</a>
                <a href="">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Top Bar Start -->
        
        <!-- Brand Start --> */}
      <div className="brand">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-4">
              <div className="b-logo">
                <a href="index.html">
                  <img src="/images/logo.png" alt="Logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-4">
              <div className="b-ads">
                <a href="https://htmlcodex.com">
                  <img src="/images/ads-1.jpg" alt="Ads" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="b-search">
                {/* <input type="text" placeholder="Search"/>
                            <button><i className="fa fa-search"></i></button> */}
                <Route
                  render={({ history }) => <SearchBox history={history} />}
                />
                {/* {console.log("history",history)} */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Brand End -->

        <!-- Nav Bar Start --> */}
      <div className="nav-bar">
        <div className="container">
          <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <a href="#" className="navbar-brand">
              MENU
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto">
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>{" "}
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Dropdown
                  </a>
                  <div className="dropdown-menu">
                    <a href="#" className="dropdown-item">
                      Sub Item 1
                    </a>
                    <a href="#" className="dropdown-item">
                      Sub Item 2
                    </a>
                  </div>
                </div>
                <a href="single-page.html" className="nav-item nav-link">
                  Single Page
                </a>
                <a href="contact.html" className="nav-item nav-link">
                  Contact Us
                </a>
              </div>
              <div className="social ml-auto">
                <a href="">
                  <i className="fab fa-twitter"></i>
                </a>

                <a href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              {/* <div
                className="fb-share-button"
                data-href={window.location.href}
                data-layout="button"
                data-size="large"
              >
                <a
                  target="_blank"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
                  className="fb-xfbml-parse-ignore"
                >
                  Chia sẻ
                </a>
              </div> */}
            </div>
          </nav>
        </div>
      </div>
      {/* <!-- Nav Bar End --> */}
    </header>
  );
};

export default Header;
