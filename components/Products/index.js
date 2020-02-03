import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import "../../style.css";

const Products = () => (
	<section className="our-products-area section-padding-100">
		<div className="container">
			<div className="row">
				<div className="col-12">
					{/* <!-- Section Heading -->*/}
					<div className="section-heading text-center">
						<p>Featured Products</p>
						<h2>
							<span>Our Product</span> Are Highest Quality
						</h2>
						<img
							src={require("../../img/core-img/decor2.png")}
							alt=""
						/>
					</div>
				</div>
			</div>

			<div class="row">
				{/*<!-- Single Product Area -->*/}
				<div className="col-12 col-sm-6 col-lg-3">
					<div
						className="single-product-area mb-50 wow fadeInUp"
						data-wow-delay="100ms"
					>
						{/*<!-- Product Thumbnail -->*/}
						<div className="product-thumbnail">
							<img
								src={require("../../img/bg-img/p1.jpg")}
								alt=""
							/>
							{/*<!-- Product Tags -->*/}
							<span className="product-tags">Hot</span>
							{/*<!-- Product Meta Data -->*/}
							<div className="product-meta-data">
								<a
									href="#"
									data-toggle="tooltip"
									data-placement="top"
									title="Favourite"
								>
									<i class="icon_heart_alt"></i>
								</a>
								<a
									href="#"
									data-toggle="tooltip"
									data-placement="top"
									title="Add To Cart"
								>
									<i class="icon_cart_alt"></i>
								</a>
								<a
									href="#"
									data-toggle="tooltip"
									data-placement="top"
									title="Compare"
								>
									<i class="arrow_left-right_alt"></i>
								</a>
							</div>
						</div>
						{/*<!-- Product Description -->*/}
						<div className="product-desc text-center pt-4">
							<a href="#" className="product-title">
								Strawberry
							</a>
							<h6 className="price">$17.99</h6>
						</div>
					</div>
				</div>

				{/*<!-- Single Product Area -->*/}
				<div className="col-12 col-sm-6 col-lg-3">
					<div
						className="single-product-area mb-50 wow fadeInUp"
						data-wow-delay="300ms"
					>
						{/*<!-- Product Thumbnail -->*/}
						<div className="product-thumbnail">
							<img
								src={require("../../img/bg-img/p2.jpg")}
								alt=""
							/>
							{/*<!-- Product Meta Data -->*/}
							<div className="product-meta-data">
								<a
									href="#"
									data-toggle="tooltip"
									data-placement="top"
									title="Favourite"
								>
									<i class="icon_heart_alt"></i>
								</a>
								<a
									href="#"
									data-toggle="tooltip"
									data-placement="top"
									title="Add To Cart"
								>
									<i class="icon_cart_alt"></i>
								</a>
								<a
									href="#"
									data-toggle="tooltip"
									data-placement="top"
									title="Compare"
								>
									<i class="arrow_left-right_alt"></i>
								</a>
							</div>
						</div>
						{/*<!-- Product Description -->*/}
						<div className="product-desc text-center pt-4">
							<a href="#" className="product-title">
								Baked Breads
							</a>
							<h6 className="price">$9.99</h6>
						</div>
					</div>
				</div>

				{/*<!-- Single Product Area -->*/}
				<div className="col-12 col-sm-6 col-lg-3">
					<div
						className="single-product-area mb-50 wow fadeInUp"
						data-wow-delay="500ms"
					>
						{/*<!-- Product Thumbnail -->*/}
						<div className="product-thumbnail">
							<img
								src={require("../../img/bg-img/p3.jpg")}
								alt=""
							/>
							{/*<!-- Product Meta Data -->*/}
							<div className="product-meta-data">
								<a
									href="#"
									data-toggle="tooltip"
									data-placement="top"
									title="Favourite"
								>
									<i class="icon_heart_alt"></i>
								</a>
								<a
									href="#"
									data-toggle="tooltip"
									data-placement="top"
									title="Add To Cart"
								>
									<i class="icon_cart_alt"></i>
								</a>
								<a
									href="#"
									data-toggle="tooltip"
									data-placement="top"
									title="Compare"
								>
									<i class="arrow_left-right_alt"></i>
								</a>
							</div>
						</div>
						{/*<!-- Product Description -->*/}
						<div className="product-desc text-center pt-4">
							<a href="#" class="product-title">
								Prime Beef
							</a>
							<h6 className="price">$59.99</h6>
						</div>
					</div>
				</div>

				{/*<!-- Single Product Area -->*/}
				<div className="col-12 col-sm-6 col-lg-3">
					<div
						className="single-product-area mb-50 wow fadeInUp"
						data-wow-delay="700ms"
					>
						{/*<!-- Product Thumbnail -->*/}
						<div className="product-thumbnail">
							<img
								src={require("../../img/bg-img/p4.jpg")}
								alt=""
							/>
							{/*<!-- Product Tags -->*/}
							<span className="product-tags bg-danger">Sale</span>
							{/*<!-- Product Meta Data -->*/}
							<div className="product-meta-data">
								<a
									href="#"
									data-toggle="tooltip"
									data-placement="top"
									title="Favourite"
								>
									<i class="icon_heart_alt"></i>
								</a>
								<a
									href="#"
									data-toggle="tooltip"
									data-placement="top"
									title="Add To Cart"
								>
									<i class="icon_cart_alt"></i>
								</a>
								<a
									href="#"
									data-toggle="tooltip"
									data-placement="top"
									title="Compare"
								>
									<i class="arrow_left-right_alt"></i>
								</a>
							</div>
						</div>
						{/*<!-- Product Description -->*/}
						<div className="product-desc text-center pt-4">
							<a href="#" className="product-title">
								Pure Honey
							</a>
							<h6 className="price">
								<span>$29.99</span> $19.99
							</h6>
						</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-12">
					<div
						className="gotoshop-btn text-center wow fadeInUp"
						data-wow-delay="900ms"
					>
						<Link to={ROUTES.STORE}>
							<Button
								className="famie-btn"
								style={{ backgroundColor: "green" }}
							>
								Go to Store
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Products;
