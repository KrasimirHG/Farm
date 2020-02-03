import React from "react";
import ItemList from "../Items";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Source from "../Source";
import Grid from "@material-ui/core/Grid";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ShoppingCart from "../ShoppingCart";
import Filter from "../Filter";
import styled from "styled-components";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { Provider } from "react-redux";
import store from "../Store";

const Filt = styled.div`
	position: relative;
	display: flex;
	#cartIcon {
		position: relative;
		display: none;
		@media only screen and (max-width: 767px) {
			z-index: 1;
			display: inline-block;
		}
	}

	#cartIcon span {
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
`;
const STORE = styled.div`
	position: relative;
	.shopping {
		position: relative;
		@media only screen and (max-width: 767px) {
		}
	}
`;
class Shop extends React.Component {
	constructor() {
		super();
		this.state = {
			products: [],
			filteredProducts: [],
			cartItems: [],
			Quantity: "",
			quantityProducts: [],
			sort: ""
		};
	}
	componentDidMount() {
		// this.setState({ products: Source });
		this.listProducts();
	}

	listProducts = () => {
		this.setState(state => {
			if (state.sort !== "") {
				state.products.sort((a, b) =>
					state.sort === "lowestprice"
						? a.price > b.price
							? 1
							: -1
						: a.price < b.price
						? 1
						: -1
				);
			} else {
				state.products.sort((a, b) => (a.id > b.id ? 1 : -1));
			}

			return { filteredProducts: state.products };
		});
	};

	handleChange = (event, product) => {
		this.setState({ [event.target.name]: event.target.value });
		this.setState(state => {
			product = { ...product, quantity: state.Quantity };
			console.log({ product });
			const quantityProducts = state.quantityProducts;
			quantityProducts.push(product);
			return { quantityProducts };
		});
	};

	handleAddtoCart = (e, product) => {
		this.setState(state => {
			const cartItems = state.cartItems;
			const quantityProducts = state.quantityProducts;
			let flag = false;
			console.log("Nach.Flag", flag);
			if (quantityProducts.length > 0) {
				quantityProducts.forEach(item => {
					if (item.id === product.id) {
						flag = true;
						console.log("VtoriFlag", flag);
					}
				});
				if (flag === false) cartItems.push({ ...product, count: 1 });
			} else {
				cartItems.push({ ...product, count: 1 });
			}
			if (flag === true) {
				quantityProducts.forEach(item => {
					if (item.id === product.id)
						cartItems.push({ ...item, count: state.Quantity });
				});
			}

			return { cartItems };
		});
	};

	handleSortChange = e => {
		this.setState({ sort: e.target.value });
		this.listProducts();
	};

	handleRemoveFromCart = (e, product) => {
		this.setState(state => {
			const cartItems = state.cartItems.filter(a => a.id !== product.id);
			// localStorage.setItem('cartItems', JSON.stringify(cartItems));
			return { cartItems: cartItems };
		});
	};

	render() {
		return (
			<STORE className="container mt-2">
				<div className="row">
					<div className="col-12 col-md-9">
						<Filt>
							<Filter />
							<div id="cartIcon" className="mt-3 ml-4">
								<Link to={ROUTES.CHECKOUT}>
									<ShoppingCartIcon />
									<span className="cart-quantity">
										{this.state.cartItems.length}
									</span>
								</Link>
							</div>
						</Filt>
						<ItemList
							products={this.state.filteredProducts}
							handleAddtoCart={this.handleAddtoCart}
							handleChange={this.handleChange}
						/>
					</div>
					<div className=" shopping col-md-3 col-12">
						<ShoppingCart
							cartItems={this.state.cartItems}
							handleRemoveFromCart={this.handleRemoveFromCart}
						/>
					</div>
				</div>
			</STORE>
		);
	}
}

export default Shop;
