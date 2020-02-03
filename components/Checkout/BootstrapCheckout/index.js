import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./form-validation.css";

const CheckoutForm = () => (
	<Container classNameName="bg-light">
		<div className="py-5 text-center">
			<img
				className="d-block mx-auto mb-4"
				src={require("../../img/core-img/logo.png")}
				alt=""
				width="72"
				height="72"
			/>
			<h2>Checkout form</h2>
			<p className="lead">
				Below is an example form built entirely with Bootstrap's form
				controls. Each required form group has a validation state that
				can be triggered by attempting to submit the form without
				completing it.
			</p>
		</div>

		<Row>
			<Col md={4} className="order-md-2 mb-4">
				<h4 className="d-flex justify-content-between align-items-center mb-3">
					<span className="text-muted">Your cart</span>
					<span className="badge badge-secondary badge-pill">3</span>
				</h4>
				<ul className="list-group mb-3">
					<li className="list-group-item d-flex justify-content-between lh-condensed">
						<div>
							<h6 className="my-0">Product name</h6>
							<small className="text-muted">
								Brief description
							</small>
						</div>
						<span className="text-muted">$12</span>
					</li>
					<li className="list-group-item d-flex justify-content-between lh-condensed">
						<div>
							<h6 className="my-0">Second product</h6>
							<small className="text-muted">
								Brief description
							</small>
						</div>
						<span className="text-muted">$8</span>
					</li>
					<li className="list-group-item d-flex justify-content-between lh-condensed">
						<div>
							<h6 className="my-0">Third item</h6>
							<small className="text-muted">
								Brief description
							</small>
						</div>
						<span className="text-muted">$5</span>
					</li>
					<li className="list-group-item d-flex justify-content-between bg-light">
						<div className="text-success">
							<h6 className="my-0">Promo code</h6>
							<small>EXAMPLECODE</small>
						</div>
						<span className="text-success">-$5</span>
					</li>
					<li className="list-group-item d-flex justify-content-between">
						<span>Total (USD)</span>
						<strong>$20</strong>
					</li>
				</ul>

				<Form className="card p-2">
					<div className="input-group">
						<Form.Control type="text" placeholder="Promo code" />
						<div className="input-group-append">
							<Button type="submit" className="btn-secondary">
								Redeem
							</Button>
						</div>
					</div>
				</Form>
			</Col>

			<Col md={8} className="order-md-1">
				<h4 className="mb-3">Billing address</h4>
				<Form className="needs-validation" novalidate>
					<Row>
						<Col md={6} className="mb-3">
							<Form.Label for="firstName">First name</Form.Label>
							<Form.Control
								type="text"
								id="firstName"
								placeholder=""
								value=""
								required
							/>
							<div className="invalid-feedback">
								Valid first name is required.
							</div>
						</Col>
						<Col md={6} className="mb-3">
							<Form.Label for="lastName">Last name</Form.Label>
							<Form.Control
								type="text"
								className="form-control"
								id="lastName"
								placeholder=""
								value=""
								required
							/>
							<div className="invalid-feedback">
								Valid last name is required.
							</div>
						</Col>
					</Row>

					<div className="mb-3">
						<Form.Label for="username">Username</Form.Label>
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">@</span>
							</div>
							<Form.Control
								type="text"
								id="username"
								placeholder="Username"
								required
							/>
							<div
								className="invalid-feedback"
								style={{ width: "100%" }}
							>
								Your username is required.
							</div>
						</div>
					</div>

					<div className="mb-3">
						<Form.Label for="email">
							Email <span className="text-muted">(Optional)</span>
						</Form.Label>
						<Form.Control
							type="email"
							id="email"
							placeholder="you@example.com"
						/>
						<div className="invalid-feedback">
							Please enter a valid email address for shipping
							updates.
						</div>
					</div>

					<div className="mb-3">
						<Form.Label for="address">Address</Form.Label>
						<Form.Control
							type="text"
							id="address"
							placeholder="1234 Main St"
							required
						/>
						<div className="invalid-feedback">
							Please enter your shipping address.
						</div>
					</div>

					<div className="mb-3">
						<Form.Label for="address2">
							Address 2{" "}
							<span className="text-muted">(Optional)</span>
						</Form.Label>
						<Form.Control
							type="text"
							className="form-control"
							id="address2"
							placeholder="Apartment or suite"
						/>
					</div>

					<Row>
						<Col md={5} className="mb-3">
							<Form.Label for="country">Country</Form.Label>
							<Form.Control
								as="select"
								className="custom-select d-block w-100"
								id="country"
								required
							>
								<option value="">Choose...</option>
								<option>United States</option>
							</Form.Control>
							<div className="invalid-feedback">
								Please select a valid country.
							</div>
						</Col>
						<Col md={4} className="mb-3">
							<Form.Label for="state">State</Form.Label>
							<Form.Control
								as="select"
								className="custom-select d-block w-100"
								id="state"
								required
							>
								<option value="">Choose...</option>
								<option>California</option>
							</Form.Control>
							<div className="invalid-feedback">
								Please provide a valid state.
							</div>
						</Col>
						<Col md={3} className="mb-3">
							<Form.Label for="zip">Zip</Form.Label>
							<Form.Control
								type="text"
								className="form-control"
								id="zip"
								placeholder=""
								required
							/>
							<div className="invalid-feedback">
								Zip code required.
							</div>
						</Col>
					</Row>
					<hr className="mb-4" />
					<div className="custom-control custom-checkbox">
						<Form.Check
							custom
							type="checkbox"
							className="custom-control-input"
							id="same-address"
						/>
						<Form.Label
							className="custom-control-label"
							for="same-address"
						>
							Shipping address is the same as my billing address
						</Form.Label>
					</div>
					<div className="custom-control custom-checkbox">
						<Form.Check
							custom
							type="checkbox"
							className="custom-control-input"
							id="save-info"
						/>
						<Form.Label
							className="custom-control-label"
							for="save-info"
						>
							Save this information for next time
						</Form.Label>
					</div>
					<hr className="mb-4" />

					<h4 className="mb-3">Payment</h4>

					<div className="d-block my-3">
						<div className="custom-control custom-radio">
							<Form.Check
								custom
								id="credit"
								name="paymentMethod"
								type="radio"
								className="custom-control-input"
								checked
								required
							/>
							<Form.Label
								className="custom-control-Form.Label"
								for="credit"
							>
								Credit card
							</Form.Label>
						</div>
						<div className="custom-control custom-radio">
							<Form.Check
								custom
								id="debit"
								name="paymentMethod"
								type="radio"
								className="custom-control-input"
								required
							/>
							<Form.Label
								className="custom-control-Form.Label"
								for="debit"
							>
								Debit card
							</Form.Label>
						</div>

						<div className="custom-control custom-radio">
							<Form.Check
								custom
								id="paypal"
								name="paymentMethod"
								type="radio"
								className="custom-control-input"
								required
							/>
							<Form.Label
								className="custom-control-Form.Label"
								for="paypal"
							>
								Paypal
							</Form.Label>
						</div>
					</div>
					<Row>
						<Col md={6} className="Colmb-3">
							<Form.Label for="cc-name">Name on card</Form.Label>
							<Form.Control
								type="text"
								className="form-control"
								id="cc-name"
								placeholder=""
								required
							/>
							<small className="text-muted">
								Full name as displayed on card
							</small>
							<div className="invalid-feedback">
								Name on card is required
							</div>
						</Col>

						<Col md={6} className="mb-3">
							<Form.Label for="cc-number">
								Credit card number
							</Form.Label>
							<Form.Control
								type="text"
								className="form-control"
								id="cc-number"
								placeholder=""
								required
							/>
							<div className="invalid-feedback">
								Credit card number is required
							</div>
						</Col>
					</Row>
					<Row>
						<Col md={3} className="mb-3">
							<Form.Label for="cc-expiration">
								Expiration
							</Form.Label>
							<Form.Control
								type="text"
								className="form-control"
								id="cc-expiration"
								placeholder=""
								required
							/>
							<div className="invalid-feedback">
								Expiration date required
							</div>
						</Col>
						<Col md={3} className="mb-3">
							Button
							<Form.Label for="cc-expiration">CVV</Form.Label>
							<Form.Control
								type="text"
								className="form-control"
								id="cc-cvv"
								placeholder=""
								required
							/>
							<div className="invalid-feedback">
								Security code required
							</div>
						</Col>
					</Row>
					<hr className="mb-4" />
					<Button
						className="btn-primary btn-lg btn-block"
						type="submit"
					>
						Continue to checkout
					</Button>
				</Form>
			</Col>
		</Row>

		<footer className="my-5 pt-5 text-muted text-center text-small">
			<p className="mb-1">&copy; 2017-2018 Company Name</p>
			<ul className="list-inline">
				<li className="list-inline-item">
					<a href="#">Privacy</a>
				</li>
				<li className="list-inline-item">
					<a href="#">Terms</a>
				</li>
				<li className="list-inline-item">
					<a href="#">Support</a>
				</li>
			</ul>
		</footer>
	</Container>
);

export default CheckoutForm;
