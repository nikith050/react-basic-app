import React, {Component, cloneElement} from 'react'
import {Link} from 'react-router'
import {MuiThemeProvider} from 'material-ui'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

class Home extends Component {

	render() {
		return (
			<div>
				<MuiThemeProvider>
					<Header />
				</MuiThemeProvider>
					{cloneElement(this.props.children, this.props)}
				<MuiThemeProvider>
					<Footer />
				</MuiThemeProvider>
			</div>
		)
	}
}

export default Home