import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import styled, { keyframes } from "styled-components";
import seven from "../../img/bg-img/7.jpg";
import "../../style.css";

const Container = styled.div`
	.famie-btn {
		background-color: #77b122;
		-webkit-transition-duration: 500ms;
		-o-transition-duration: 500ms;
		transition-duration: 500ms;
		position: relative;
		z-index: 1;
		display: inline-block;
		min-width: 160px;
		height: 50px;
		color: #ffffff;
		border-radius: 0;
		padding: 0 30px;
		font-size: 16px;
		line-height: 48px;
		font-weight: 700;
		text-transform: uppercase;
	}
	.famie-btn:hover,
	.famie-btn:focus {
		font-size: 16px;
		font-weight: 700;
		background-color: #0f1112;
		color: #ffffff;
		box-shadow: none;
	}
`;

const fadeInUp = keyframes`
  0% {
			opacity: 0;
			-webkit-transform: translateY(20px);
			transform: translateY(20px);
		}

		100% {
			opacity: 1;
			-webkit-transform: translateY(0);
			transform: translateY(0);
		}
`;

const bounceInUp = keyframes`
  0% {
			opacity: 0;
			-webkit-transform: translateY(2000px);
			transform: translateY(2000px);
		}

		60% {
			opacity: 1;
			-webkit-transform: translateY(-30px);
			transform: translateY(-30px);
		}

		80% {
			-webkit-transform: translateY(10px);
			transform: translateY(10px);
		}

		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
		}
`;

const Hop = styled.h2`
	animation: ${fadeInUp} 1 2s;
`;

const Par = styled.p`
	animation: ${fadeInUp} 1 4s;
`;
const BUTTON = styled.button`
	animation: ${bounceInUp} 1 6s;
`;

const Section = styled.section`
	.single-benefits-area {
		position: relative;
		z-index: 1;
		text-align: center;
	}
	.single-benefits-area img {
		margin-bottom: 20px;
	}
	.single-benefits-area h5 {
		margin-bottom: 0;
	}
	@media only screen and (min-width: 992px) and (max-width: 1199px) {
		.single-benefits-area h5 {
			font-size: 18px;
		}
	}
	.benefits-thumbnail {
		position: relative;
		z-index: 1;
	}
	.benefits-thumbnail img {
		border-radius: 3px;
		width: 100%;
	}
	.mb-50 {
		margin-bottom: 50px !important;
	}
	.section-padding-100-0 {
		padding-top: 100px;
		padding-bottom: 0;
	}
`;

const Div1 = styled.div`
	animation: ${fadeInUp};
	animation-duration: 2s;
	animation-delay: 1s;
`;
const Div3 = styled.div`
	animation: ${fadeInUp};
	animation-duration: 2s;
	animation-delay: 2s;
`;
const Div5 = styled.div`
	animation: ${fadeInUp};
	animation-duration: 2s;
	animation-delay: 3s;
`;
const Div7 = styled.div`
	animation: ${fadeInUp};
	animation-duration: 2s;
	animation-delay: 4s;
`;
const Div9 = styled.div`
	animation: ${fadeInUp};
	animation-duration: 2s;
	animation-delay: 5s;
`;

const SEction = styled.section`
	.mb-100 {
		margin-bottom: 100px !important;
	}
	.section-heading {
		position: relative;
		z-index: 1;
		margin-bottom: 50px;
	}
	.section-heading p {
		font-size: 14px;
		letter-spacing: 2px;
		text-transform: uppercase;
		margin-bottom: 0;
	}
	.section-heading h2 {
		margin-bottom: 10px;
		font-size: 36px;
		margin-left: -3px;
	}
	@media only screen and (min-width: 992px) and (max-width: 1199px) {
		.section-heading h2 {
			font-size: 30px;
		}
	}
	@media only screen and (min-width: 768px) and (max-width: 991px) {
		.section-heading h2 {
			font-size: 30px;
		}
	}
	.section-heading h2 span {
		color: #77b122;
	}
	@media only screen and (max-width: 767px) {
		.section-heading h2 {
			font-size: 24px;
		}
	}
	.section-heading.white h2,
	.section-heading.white p {
		color: #ffffff;
	}
	.section-heading.white h2 span,
	.section-heading.white p span {
		color: #ffffff;
	}
	.famie-btn {
		background-color: #77b122;
		-webkit-transition-duration: 500ms;
		-o-transition-duration: 500ms;
		transition-duration: 500ms;
		position: relative;
		z-index: 1;
		display: inline-block;
		min-width: 160px;
		height: 50px;
		color: #ffffff;
		border-radius: 0;
		padding: 0 30px;
		font-size: 16px;
		line-height: 48px;
		font-weight: 700;
		text-transform: uppercase;
	}
	.famie-btn:hover,
	.famie-btn:focus {
		font-size: 16px;
		font-weight: 700;
		background-color: #0f1112;
		color: #ffffff;
		box-shadow: none;
	}
	.mt-30 {
		margin-top: 30px !important;
	}
	.famie-video-play {
		position: relative;
		z-index: 1;
		border-radius: 50%;
	}

	.famie-video-play img {
		border-radius: 50%;
	}
	.famie-video-play .play-icon {
		position: absolute;
		font-size: 40px;
		color: #fff;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		z-index: 99;
	}
	.mb-100 {
		margin-bottom: 100px !important;
	}
`;

const SECtion = styled.section`
	.services-area {
		position: relative;
		z-index: 1;
		background-color: #f2f4f5;
	}
	.services-area .services-thumbnail {
		background-color: blue;
		-webkit-box-flex: 0;
		-ms-flex: 0 0 40%;
		flex: 0 0 40%;
		max-width: 40%;
		width: 40%;
	}
	@media only screen and (max-width: 767px) {
		.services-area .services-thumbnail {
			height: 300px;
			-webkit-box-flex: 0;
			-ms-flex: 0 0 100%;
			flex: 0 0 100%;
			max-width: 100%;
			width: 100%;
		}
	}
	.services-area .services-content {
		-webkit-box-flex: 0;
		-ms-flex: 0 0 60%;
		flex: 0 0 60%;
		max-width: 60%;
		width: 60%;
		padding-right: 10% !important;
	}
	@media only screen and (min-width: 992px) and (max-width: 1199px) {
		.services-area .services-content {
			padding-right: 48px !important;
		}
	}
	@media only screen and (min-width: 768px) and (max-width: 991px) {
		.services-area .services-content {
			padding-right: 48px !important;
		}
	}
	@media only screen and (max-width: 767px) {
		.services-area .services-content {
			-webkit-box-flex: 0;
			-ms-flex: 0 0 100%;
			flex: 0 0 100%;
			max-width: 100%;
			width: 100%;
		}
	}
	.single-service-area {
		position: relative;
		z-index: 1;
	}
	.single-service-area .service-title img {
		margin-right: 15px;
	}
	.single-service-area .service-title h5 {
		margin-bottom: 0;
		-webkit-transition-duration: 500ms;
		-o-transition-duration: 500ms;
		transition-duration: 500ms;
	}
	.single-service-area:focus .service-title h5,
	.single-service-area:hover .service-title h5 {
		color: #77b122;
	}
	.mb-50 {
		margin-bottom: 50px !important;
	}
`;
const Fruit = styled.div`
	animation: ${fadeInUp};
	animation-duration: 2s;
	animation-delay: 1s;
`;
const Meat = styled.div`
	animation: ${fadeInUp};
	animation-duration: 2s;
	animation-delay: 2s;
`;
const Milk = styled.div`
	animation: ${fadeInUp};
	animation-duration: 2s;
	animation-delay: 3s;
`;
const Rise = styled.div`
	animation: ${fadeInUp};
	animation-duration: 2s;
	animation-delay: 4s;
`;

const Presentation = () => (
	<>
		<Carousel indicators={false}>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={require("../../img/bg-img/1.jpg")}
					alt="First slide"
				/>
				<Carousel.Caption>
					<Container className="container h-100">
						<div className="row h-100 align-items-center">
							<div className="col-12 col-lg-10">
								<div className="welcome-content">
									<Hop>
										The hearth of the farm is the true
										center of our universe.
									</Hop>
									<Par>
										Mauris vestibulum dolor nec lacinia
										facilisis. Fusce interdum sagittis
										volutpat. Praesent eget varius ligula,
										malesuada eleifend purus. Aenean euismod
										est at mauris mollis ultricies. Morbi
										arcu mi, dictum eu luala, dapibus
										interdum mollis.
									</Par>
									<BUTTON className="famie-btn mt-4">
										Contact Us
									</BUTTON>
								</div>
							</div>
						</div>
					</Container>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={require("../../img/bg-img/7.jpg")}
					alt="Third slide"
				/>

				<Carousel.Caption>
					<Container className="container h-100">
						<div className="row h-100 align-items-center">
							<div className="col-12 col-lg-10">
								<div className="welcome-content">
									<Hop>
										The hearth of the farm is the true
										center of our universe.
									</Hop>
									<Par>
										Mauris vestibulum dolor nec lacinia
										facilisis. Fusce interdum sagittis
										volutpat. Praesent eget varius ligula,
										malesuada eleifend purus. Aenean euismod
										est at mauris mollis ultricies. Morbi
										arcu mi, dictum eu luala, dapibus
										interdum mollis.
									</Par>
									<BUTTON className="famie-btn mt-4">
										Contact Us
									</BUTTON>
								</div>
							</div>
						</div>
					</Container>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={require("../../img/bg-img/1.jpg")}
					alt="Third slide"
				/>

				<Carousel.Caption>
					<Container className="container h-100">
						<div className="row h-100 align-items-center">
							<div className="col-12 col-lg-10">
								<div className="welcome-content">
									<Hop>
										The hearth of the farm is the true
										center of our universe.
									</Hop>
									<Par>
										Mauris vestibulum dolor nec lacinia
										facilisis. Fusce interdum sagittis
										volutpat. Praesent eget varius ligula,
										malesuada eleifend purus. Aenean euismod
										est at mauris mollis ultricies. Morbi
										arcu mi, dictum eu luala, dapibus
										interdum mollis.
									</Par>
									<BUTTON className="famie-btn mt-4">
										Contact Us
									</BUTTON>
								</div>
							</div>
						</div>
					</Container>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
		<Section className="famie-benefits-area section-padding-100-0 pb-5 mt-4">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="benefits-thumbnail mb-50">
							<img
								src={require("../../img/bg-img/2.jpg")}
								alt=""
							/>
						</div>
					</div>
				</div>

				<div className="row justify-content-center">
					<div className="col-12 col-sm-4 col-lg">
						<Div1 className="single-benefits-area wow  mb-50">
							<img
								src={require("../../img/core-img/digger.png")}
								alt=""
							/>
							<h5>Best Services</h5>
						</Div1>
					</div>

					<div className="col-12 col-sm-4 col-lg">
						<Div3 className="single-benefits-area wow  mb-50">
							<img
								src={require("../../img/core-img/windmill.png")}
								alt=""
							/>
							<h5>Farm Experiences</h5>
						</Div3>
					</div>

					<div className="col-12 col-sm-4 col-lg">
						<Div5 className="single-benefits-area wow  mb-50">
							<img
								src={require("../../img/core-img/cereals.png")}
								alt=""
							/>
							<h5>100% Natural</h5>
						</Div5>
					</div>

					<div className="col-12 col-sm-4 col-lg">
						<Div7 className="single-benefits-area wow  mb-50">
							<img
								src={require("../../img/core-img/tractor.png")}
								alt=""
							/>
							<h5>Farm Equipment</h5>
						</Div7>
					</div>

					<div className="col-12 col-sm-4 col-lg">
						<Div9 className="single-benefits-area wow  mb-50">
							<img
								src={require("../../img/core-img/sunrise.png")}
								alt=""
							/>
							<h5>Organic food</h5>
						</Div9>
					</div>
				</div>
			</div>
		</Section>
		<SEction className="about-us-area">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-12 col-md-8">
						<div className="about-us-content mb-100">
							<div className="section-heading">
								<p>About us</p>
								<h2>
									<span>Let Us</span> Tell You Our Story
								</h2>
								<img
									src={require("../../img/core-img/decor.png")}
									alt=""
								/>
							</div>
							<p>
								Lorem ipsum dolor sit amet, consectetu
								adipiscing elit. Etiam nunc elit, pretium
								atlanta urna veloci, fermentum malesuda mina.
								Donec auctor nislec neque sagittis, sit amet
								dapibus pellentesque donal feugiat. Nulla mollis
								magna non sanaliquet, volutpat do zutum,
								ultrices consectetur, ultrices at purus.
							</p>
							<Button className="famie-btn mt-30">
								Read More
							</Button>
						</div>
					</div>

					<div class="col-12 col-md-4">
						<div class="famie-video-play mb-100">
							<img
								src={require("../../img/bg-img/6.jpg")}
								alt=""
							/>
							<a
								href="http://www.youtube.com/watch?v=7HKoqNJtMTQ"
								class="play-icon"
							></a>
						</div>
					</div>
				</div>
			</div>
		</SEction>

		<SECtion class="services-area d-flex flex-wrap">
			<div
				className="services-thumbnail bg-img jarallax"
				style={{
					backgroundImage: `url("${seven}")`
				}}
			></div>

			<div className="services-content section-padding-100-50 px-5">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<div className="section-heading">
								<p>What we do</p>
								<h2>
									<span>Our Produce</span> Is Mainstay For Us
								</h2>
								<img
									src={require("../../img/core-img/decor.png")}
									alt=""
								/>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-12 mb-50">
							<p>
								Mauris fermentum nunc quis massa lacinia
								consequat. Suspendisse orci magna, pharetra
								sedonia risus ut, elementum mollis nisin. Nunc
								in sapien turpis. Donec egeto david orci
								pulvinar ultrices necto drax turpis.
								Pellentesque justo metus, semper nec ullamcorper
								id, gravida ultricies arcu.
							</p>
						</div>

						<div className="col-12 col-lg-6">
							<div className="single-service-area mb-50 ">
								<div className="service-title mb-3 d-flex align-items-center">
									<img
										src={require("../../img/core-img/s1.png")}
										alt=""
									/>
									<h5>Fruit &amp; Vegetable</h5>
								</div>
								<p>
									Intiam eu sagittis est, aster cosmo lacini
									libero. Praesent dignissim sed odio velo
									aliquam manta legolas.{" "}
								</p>
							</div>
						</div>

						<div class="col-12 col-lg-6">
							<div class="single-service-area mb-50 ">
								<div class="service-title mb-3 d-flex align-items-center">
									<img
										src={require("../../img/core-img/s2.png")}
										alt=""
									/>
									<h5>Meat &amp; Eggs</h5>
								</div>
								<p>
									Intiam eu sagittis est, aster cosmo lacini
									libero. Praesent dignissim sed odio velo
									aliquam manta legolas.{" "}
								</p>
							</div>
						</div>

						<div className="col-12 col-lg-6">
							<div className="single-service-area mb-50 ">
								<div className="service-title mb-3 d-flex align-items-center">
									<img
										src={require("../../img/core-img/s3.png")}
										alt=""
									/>
									<h5>Milk &amp; Cheese</h5>
								</div>
								<p>
									Intiam eu sagittis est, aster cosmo lacini
									libero. Praesent dignissim sed odio velo
									aliquam manta legolas.{" "}
								</p>
							</div>
						</div>

						<div class="col-12 col-lg-6">
							<div class="single-service-area mb-50 ">
								<div class="service-title mb-3 d-flex align-items-center">
									<img
										src={require("../../img/core-img/s4.png")}
										alt=""
									/>
									<h5>Rice &amp; Corn</h5>
								</div>
								<p>
									Intiam eu sagittis est, aster cosmo lacini
									libero. Praesent dignissim sed odio velo
									aliquam manta legolas.{" "}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</SECtion>
	</>
);

export default Presentation;
