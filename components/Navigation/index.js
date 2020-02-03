import React, { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
//import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
//import { AuthUserContext } from "../Session";
//import styled from "styled-components";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "react-bootstrap/FormControl";
import Carousel from "react-bootstrap/Carousel";

//import "../../style.css";
import "./index.css";

{
  /*const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <Div>
    <AuthUl>
      <li>
        <Link to={ROUTES.LANDING}>
          <BigButton>Back to Earth</BigButton>
        </Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>
          <Button>Home</Button>
        </Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>
          <Button>Account</Button>
        </Link>
      </li>

      <li>
        <SignOutButton />
      </li>
    </AuthUl>
  </Div>
);*/
}

const HeaderArea = styled.header`
  position: relative;
  z-index: 1000;
  width: 100%;
  .famie-main-menu {
    position: relative;
    width: 100%;
  }
  .sticky .sticky-inner {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .famie-main-menu .classy-nav-container {
    position: relative;
    z-index: 1;
  }
  .famie-main-menu .classy-nav-container .container {
    position: relative;
    z-index: 1;
  }
  .famie-main-menu .classy-navbar {
    padding: 0;
    height: 80px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .famie-main-menu .classy-navbar {
      height: 70px;
    }
  }
  @media only screen and (max-width: 767px) {
    .famie-main-menu .classy-navbar {
      height: 70px;
    }
  }
  .famie-main-menu .classy-navbar .nav-brand {
    max-width: 150px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .famie-main-menu .classy-navbar .nav-brand {
      max-width: 120px;
    }
  }
  @media only screen and (max-width: 767px) {
    .famie-main-menu .classy-navbar .nav-brand {
      max-width: 110px;
    }
  }
  .famie-main-menu .classy-navbar .classynav ul li a {
    font-weight: 400;
    text-transform: uppercase;
    font-size: 14px;
    color: #303030;
  }
  .famie-main-menu .classy-navbar .classynav ul li a:focus,
  .header-area .famie-main-menu .classy-navbar .classynav ul li a:hover {
    color: #77b122;
  }
  .famie-main-menu .classy-navbar .classynav ul li ul li a {
    text-transform: capitalize;
    padding: 0 20px;
    font-size: 14px;
    color: #0f1112;
    line-height: 34px;
    height: 35px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .famie-main-menu .classy-navbar .classynav ul li ul li a {
      color: #707070;
    }
  }
  @media only screen and (max-width: 767px) {
    .famie-main-menu .classy-navbar .classynav ul li ul li a {
      color: #707070;
    }
  }
  .famie-main-menu .classy-navbar .classynav ul li ul li a::after {
    color: #0f1112;
  }
  .famie-main-menu .classy-navbar .classynav ul li ul li a:focus,
  .header-area .famie-main-menu .classy-navbar .classynav ul li ul li a:hover {
    color: #77b122;
  }
  .famie-main-menu .classy-navbar .classynav ul li.active a {
    color: #77b122;
  }
  .is-sticky .famie-main-menu {
    z-index: 9999;
    box-shadow: 0 5px 50px 0 rgba(0, 0, 0, 0.2);
  }
  #searchIcon {
    position: relative;
    z-index: 1;
    color: #303030;
    margin: 0 25px;
    cursor: pointer;
    -webkit-transition-duration: 500ms;
    -o-transition-duration: 500ms;
    transition-duration: 500ms;
    display: inline-block;
  }
  .header-area #searchIcon:focus,
  .header-area #searchIcon:hover {
    color: #77b122;
  }
  #cartIcon {
    position: relative;
    z-index: 1;
    display: inline-block;
  }
  #cartIcon a {
    display: inline-block;
    font-size: 18px;
  }
  #cartIcon a span {
    position: absolute;
    top: -5px;
    right: -5px;
    z-index: 9;
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #77b122;
    color: #ffffff;
    font-size: 10px;
    text-align: center;
    line-height: 15px;
  }
  .account {
    display: flex;
    margin-bottom: 16px;
  }
  @media only screen and (max-width: 767px) {
    .account {
      display: flex;
      justify-content: space-around;
    }
  }
`;

const TopHeaderArea = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  background-color: #f2f4f5;
`;
const TopHeaderContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 40px;
  background-color: #f2f4f5; 
  @media only screen and (max-width: 767px) {
    
      -ms-flex-wrap: wrap;
      flex-wrap: wrap; } 
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    
      height: auto;
      padding: 15px 0; } 
  @media only screen and (max-width: 767px) {
    
      height: auto;
      padding: 10px 0; } 
  .top-header-meta {
    position: relative;
    z-index: 1;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
    width: 50%; }
     .top-header-meta p {
      margin-bottom: 0;
      font-size: 12px; }
     .top-header-meta p span {
        color: #77b122; }
      @media only screen and (max-width: 767px) {
         .top-header-meta p {
          font-size: 11px; } }
     .top-header-meta a {
      font-size: 12px;
      color: #707070;
      font-weight: 400; }
      @media only screen and (min-width: 768px) and (max-width: 991px) {
         .top-header-meta a {
          font-size: 16px; } }
      @media only screen and (max-width: 767px) {
         .top-header-meta a {
          font-size: 16px; } }
      @media only screen and (min-width: 768px) and (max-width: 991px) {
        .top-header-meta a span {
          display: none; } }
      @media only screen and (max-width: 767px) {
         .top-header-meta a span {
          display: none; } }
       .top-header-meta a:first-child {
        margin-right: 30px; }
       .top-header-meta a:focus, .top-header-content .top-header-meta a:hover {
        color: #77b122; 
`;

function email(props) {
  return <Tooltip {...props}>krasimirhg@gmail.com</Tooltip>;
}

const Email = () => (
  <OverlayTrigger
    placement="bottom"
    delay={{ show: 250, hide: 400 }}
    overlay={email}
  >
    <div className="mr-2">
      <EmailOutlinedIcon />{" "}
      <a>
        <span>Email:krasimirhg@gmail.com</span>
      </a>
    </div>
  </OverlayTrigger>
);

function number(props) {
  return <Tooltip {...props}>0888xxxxxx</Tooltip>;
}

const Number = () => (
  <OverlayTrigger
    placement="bottom"
    delay={{ show: 250, hide: 400 }}
    overlay={number}
  >
    <div>
      <PhoneOutlinedIcon />
      <a>
        <span>Call us: 0888xxxxxx</span>
      </a>
    </div>
  </OverlayTrigger>
);

const JoinIn = () => (
  <Link to={ROUTES.SIGN_UP} style={{ color: "black" }}>
    <div className="p-2 bg-primary mx-1 rounded-lg ">Join in</div>
  </Link>
);

const SignIn = () => (
  <Link to={ROUTES.SIGN_IN} style={{ color: "black" }}>
    <div className="p-2 bg-primary mx-1 rounded-lg ">Sign in</div>
  </Link>
);

const Navigation = () => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    setSticky(ref.current.getBoundingClientRect().top <= 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);
  return (
    <HeaderArea className="header-area">
      <TopHeaderArea className="top-header-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <TopHeaderContent className="top-header-content d-flex align-items-center justify-content-between">
                {/* Top Header Content */}
                <div className="top-header-meta">
                  <p>
                    Welcome to <span>Farmie</span>, we hope you will enjoy our
                    products and have good experience
                  </p>
                </div>
                {/* Top Header Content */}
                <div className="top-header-meta  d-flex align-items-center justify-content-end">
                  <Email />
                  <Number />
                </div>
              </TopHeaderContent>
            </div>
          </div>
        </div>
      </TopHeaderArea>

      {/* Navbar Area */}
      <div className={`famie-main-menu${isSticky ? " sticky" : ""}`} ref={ref}>
        <Navbar
          sticky="top"
          bg="light"
          expand="lg"
          className="classNamey-nav-container breakpoint-off sticky-inner"
        >
          <Navbar.Brand href="#home">
            <img src={require("../../img/core-img/logo.png")} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Nav.Link>
                <Link to={ROUTES.LANDING}>Home</Link>
              </Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to={ROUTES.HOME}>Home</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#">About us</NavDropdown.Item>
                <NavDropdown.Item href="#">Farming Practice</NavDropdown.Item>
                <NavDropdown.Item href="#">Shop</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {/*<Form inline className="mr-4 align-items-center">
                          <div className="search ">
                            <FormControl
                              type="text"
                              placeholder="Search"
                              className="mr-sm-2"
                            />
                          </div>
                          <Button variant="outline-success">Search</Button>
                        </Form>*/}

            <div className=" account mr-4">
              <div className="mt-3 ml-3 d-flex align-items-center justify-content-between ">
                <JoinIn />
                <SignIn />
              </div>
              {/*<div id="cartIcon" className="mt-3 ml-4">
                              <Link to={ROUTES.CHECKOUT}>
                                <ShoppingCartIcon />
                                <span className="cart-quantity">2</span>
                              </Link>
                            </div>*/}
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </HeaderArea>
  );
};

export default Navigation;
