import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router'
import StackGrid, { transitions } from "react-stack-grid"

import Header from '../Header/Header'

const { scaleDown } = transitions

class About extends Component {

	constructor(props) {
	  	super(props)
	
	  	this.state = {
	  		feeds: [], 
	  		skip: null,
	  		loading: true
	  	};
	}

	componentWillMount() {
		console.log('props', this.props.params.shopId);
		axios.post('http://test.moifash.com/api/reseller/'+this.props.params.shopId+'/detail').then((res) => {
			this.setState({feeds: res.data.feeds, skip: res.data.skip, loading: false})
		})
	}

	getProducts(id) {
		this.setState({loading: true})
		let data = {};
		if(id != 'all') {
			data.skip = this.state.skip
			data.category = id
		}
		console.log('id', id);
		axios.post('http://test.moifash.com/filter/detail/'+this.props.params.shopId, data).then((res) => {
			this.setState({feeds: res.data.feeds, skip: res.data.skip, loading: false})
		})
	}

	// componentDidMount() {
	// 	this.setState({loading: false})
	// }


	render() {
		if(this.state.loading) {
			return <div>Loading</div>
		}
		return (
			<div>
				<Header shopName={this.props.params.shopId} getProducts={this.getProducts.bind(this)}/>
				{
					this.state.feeds.length == 0 ? <div>'No Products Foun </div> :  <StackGrid
				        appear={scaleDown.appear}
				        appeared={scaleDown.appeared}
				        enter={scaleDown.enter}
				        entered={scaleDown.entered}
				        leaved={scaleDown.leaved}
				        columnWidth={300}
				        duration={480}
				      >
				      	{
				      		this.state.feeds.map((feed, i) => <Card key={i} feed={feed} shopName={this.props.params.shopId} />)
				      	}

				      </StackGrid>
			    }
			</div>
		)
	}
}

class Card extends Component {
	render() {
		return(
			<div className="item">
				<Link to={'/'+this.props.shopName+'/product?id='+this.props.feed.product.id}>
					<img src={'https://s3.ap-south-1.amazonaws.com/moifash/test_product/'+this.props.feed.product.baseImage} />
				</Link>
				<div className="row zero-margin">
					<div className="col s8">{this.props.feed.product.title}</div>
					<div className="col s4 text-center">Rs. {this.props.feed.product.customerPrice}</div>
				</div>
			</div>
		)
	}
}

export default About