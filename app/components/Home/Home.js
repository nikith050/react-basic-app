import React, {Component} from 'react'
import {Link} from 'react-router'

class Home extends Component {

	render() {
		return (
			<div>
				<img src={require('../../images/home.jpeg')} width="100"/>
				<h1 className="text-ceter">You are in home apge</h1>
				<p>Edit /css/style.css file for styles and use </p>
				<Link to='/about'>About</Link>
			</div>
		)
	}
}

export default Home