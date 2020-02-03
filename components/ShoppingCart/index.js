import React from "react";
import util from "../../util";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

export default class ShoppingCart extends React.Component {
	render() {
		const { cartItems } = this.props;
		return (
			<div className="alert alert-info">
				<h3>Shopping List</h3>
				{cartItems.length === 0 ? (
					"Basket is empty"
				) : (
					<div>
						You have {cartItems.length} items in the basket. <hr />
					</div>
				)}
				{cartItems.length > 0 && (
					<div>
						<ul>
							{cartItems.map(item => (
								<li key={item.id}>
									<b>{item.name}</b>
									<button
										style={{ float: "right" }}
										className="btn btn-danger btn-xs"
										onClick={e =>
											this.props.handleRemoveFromCart(
												e,
												item
											)
										}
									>
										X
									</button>
									<br />
									{item.count} X {item.price} $/kg
								</li>
							))}
						</ul>

						<b>
							Sum:{" "}
							{cartItems.reduce(
								(a, c) => a + c.price * c.count,
								0
							)}
							$
						</b>
						<hr />
						<Link to={ROUTES.CHECKOUT}>
							<button className="btn btn-primary">
								Checkout
							</button>
						</Link>
					</div>
				)}
			</div>
		);
	}
}
