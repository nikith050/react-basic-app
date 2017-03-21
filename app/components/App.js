import React, {Component} from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import Home from './Home/Home'
import About from './About/About'

class App extends Component {

	render() {
		return (	
			<Router history={browserHistory}>
				<Route path='/' component={Home} />
				<Route path='/about' component={About} />
			</Router>
		)
	}
}

export default App