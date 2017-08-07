import React, {Component} from 'react'
import {AppBar} from 'material-ui';
import NavBar from './NavBar'

export default class Header extends Component {
	render() {
		return(
			<AppBar
			    title="React App"
			    iconClassNameRight=""
			    children={<NavBar />}
			/>
		)
	}
}