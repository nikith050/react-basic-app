import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router'

export default class NavBar extends Component {

	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		menu: []
	  	};
	}

	componentWillMount() {
		// axios.get('http://test.moifash.com/webshop/get_all_menu/'+this.props.shopName).then((res) => {
		// 	console.log('res.data', res.data);
		// 	this.setState({menu: res.data})
		// })
		var menu = ["home", "about", "blog"]
		this.setState({menu: menu})
	}

	getProducts(id) {
		// this.props.getProducts(id)
	}

	render() {
		return(
			<div className="text-center">
				<ul className="navbar">
					<Link style={{color: '#ffffff', padding: '10px'}} to='/'>Home</Link>
					<Link style={{color: '#ffffff', padding: '10px'}} to='/about'>About</Link>
					<Link style={{color: '#ffffff', padding: '10px'}} to='/blog'>Blog</Link>
				</ul>
			</div>
		)
	}
}