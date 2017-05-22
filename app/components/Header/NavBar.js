import React, { Component } from 'react'
import axios from 'axios'

export default class NavBar extends Component {

	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		category: []
	  	};
	}

	componentWillMount() {
		axios.get('http://test.moifash.com/webshop/get_all_category/'+this.props.shopName).then((res) => {
			console.log('res.data', res.data);
			this.setState({category: res.data})
		})
	}

	getProducts(id) {
		this.props.getProducts(id)
	}

	render() {
		return(
			<div className="text-center">
				<ul className="navbar">
					{
						this.state.category.map((cat, i) => {return <li key={i} onClick={this.getProducts.bind(this, cat.id)}>{cat.displayName}</li>})
					}
				</ul>
			</div>
		)
	}
}