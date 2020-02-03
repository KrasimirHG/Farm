import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Media from "react-bootstrap/Media";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { fetchProducts } from "../Actions/productActions";

class ItemList extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {}
	render() {
		const Item = this.props.products.map(product => (
			<Grid key={product.name} item xs={12} sm={6} md={6} lg={6} xl={6}>
				<Container
					style={{
						border: "2px solid",
						borderRadius: "5px"
					}}
				>
					<Row>
						<Col xs="4">
							<img
								style={{
									objectFit: "cover"
								}}
								src={product.image}
								alt={product.name}
							/>
						</Col>
						<Col style={{ marginLeft: "-5%" }}>
							<h5>{product.name}</h5>

							<p>{product.description}</p>

							<Form.Group controlId="exampleForm.ControlSelect1">
								<Form.Label>Quantity</Form.Label>
								<Form.Control
									as="select"
									name="Quantity"
									value={this.Quantity}
									onChange={e =>
										this.props.handleChange(e, product)
									}
								>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</Form.Control>
							</Form.Group>
							<h5>{product.price}$/kg</h5>

							<Button
								className="mb-1"
								onClick={e =>
									this.props.handleAddtoCart(e, product)
								}
							>
								Add to Cart
							</Button>
						</Col>
					</Row>
				</Container>
			</Grid>
		));

		return (
			<Grid container spacing={2} style={{ padding: "24px" }}>
				{Item}
			</Grid>
		);
	}
}

const mapStateToProps = state => ({ products: state.sortedProducts });
export default connect(
	mapStateToProps,
	{ fetchProducts }
)(ItemList);


