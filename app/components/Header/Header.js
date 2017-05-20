import React, { Component } from 'react'

import NavBar from './NavBar'

export default class Header extends Component {

	render() {
		return(
			<div className="header">
				<h1 className="shop-title">{this.props.shopName}</h1>
				<NavBar shopName={this.props.shopName} getProducts={this.props.getProducts}/>
			</div>
		)
	}
}