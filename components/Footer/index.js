import React from "react";
import RoomIcon from "@material-ui/icons/Room";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import Three from "../../img/bg-img/3.jpg";

const Footer = () => (
  <footer className="footer-area">
    <div
      className="main-footer bg-img bg-overlay section-padding-80-0"
      style={{ backgroundImage: `url("${Three}")` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="footer-widget mb-80">
              <a href="#" class="foo-logo d-block mb-30">
                <img src={require("../../img/core-img/logo2.png")} alt="" />
              </a>
              <p>
                Lorem ipsum dolor sit amet, consecte stare adipiscing elit. In
                act honcus risus atiner Pellentesque risus.
              </p>
              <div class="contact-info">
                <p>
                  <RoomIcon />
                  <span>120 Raymond Rd, New York</span>
                </p>
                <p>
                  <EmailOutlinedIcon />
                  <span>info.deercreative@gmail.com</span>
                </p>
                <p>
                  <PhoneOutlinedIcon />
                  <span>+84 223 9000</span>
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="footer-widget mb-80">
              <h5 className="widget-title">QUICK LINK</h5>

              <nav className="footer-widget-nav">
                <ul>
                  <li>
                    <a href="#">Purchase</a>
                  </li>
                  <li>
                    <a href="#">Policities</a>
                  </li>
                  <li>
                    <a href="#">Shipping</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                  <li>
                    <a href="#">Return</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Payments</a>
                  </li>
                  <li>
                    <a href="#">Partners</a>
                  </li>
                  <li>
                    <a href="#">Guide</a>
                  </li>
                  <li>
                    <a href="#">Standard</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                  <li>
                    <a href="#">Brands</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="footer-widget mb-80">
              <h5 className="widget-title">RECENT NEWS</h5>

              <div className="single-recent-blog d-flex align-items-center">
                <div className="post-thumbnail">
                  <img src={require("../../img/bg-img/4.jpg")} alt="" />
                </div>
                <div className="post-content">
                  <a href="#" class="post-title">
                    WA’s largest farming business on the market
                  </a>
                  <div class="post-date">18 Aug 2018</div>
                </div>
              </div>

              <div className="single-recent-blog d-flex align-items-center">
                <div className="post-thumbnail">
                  <img src={require("../../img/bg-img/5.jpg")} alt="" />
                </div>
                <div className="post-content">
                  <a href="#" className="post-title">
                    Beef retail prices hit a record
                  </a>
                  <div className="post-date">18 Aug 2018</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="footer-widget mb-80">
              <h5 className="widget-title">STAY CONNECTED</h5>

              <div className="footer-social-info">
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                  <span>Facebook</span>
                </a>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                  <span>Twitter</span>
                </a>
                <a href="#">
                  <i class="fa fa-pinterest" aria-hidden="true"></i>
                  <span>Pinterest</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="copywrite-area">
      <div className="container">
        <div className="copywrite-text">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with{" "}
                <i class="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
              </p>
            </div>
            <div className="col-md-6">
              <div className="footer-nav">
                <nav>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Produce</a>
                    </li>
                    <li>
                      <a href="#">Practice</a>
                    </li>
                    <li>
                      <a href="#">Products</a>
                    </li>
                    <li>
                      <a href="#">News</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
