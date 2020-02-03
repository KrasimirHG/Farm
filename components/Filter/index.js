import React from "react";
import { sortProducts } from "../Actions/sortAction";
import { getState } from "redux";
import { connect } from "react-redux";
import store from "../Store";

const mapDispatchToProps = dispatch => {
	return {
		Sortirai: (products, cena) => dispatch(sortProducts(products, cena))
	};
};

class FilterProds extends React.Component {
	handleSortChange = e => {
		this.props.Sortirai(this.props.products, e.target.value); // ne stava s this.props.sort
	};
	render() {
		const Magazin = store.getState();
		return (
			<div className="row">
				<div className="col-md-6">
					<h4>{`${Magazin.products.length} products found.`}</h4>
				</div>
				<div className="col-md-6">
					<label className="row">
						Order by
						<select
							className="form-control"
							value="SORT_BY_ID"
							onChange={this.handleSortChange}
						>
							<option value="SORT_BY_ID">Select</option>
							<option value="SORT_LOW">Lowest to highest</option>
							<option value="SORT_HIGH">Highest to lowest</option>
						</select>
					</label>
				</div>
			</div>
		);
	}
}

const mapStateToPros = state => ({
	products: state.products
	//sort: state.sort
});

const Filter = connect(
	mapStateToPros,
	mapDispatchToProps
)(FilterProds);
export default Filter;
