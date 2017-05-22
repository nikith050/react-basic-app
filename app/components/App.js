import React, {Component} from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import Home from './Home/Home'
import HomeContent from './Home/HomeContent'
import About from './About/About'

class App extends Component {

	render() {
		return (	
			<Router history={browserHistory}>
				<Route path='/' component={Home}>
					<IndexRoute component={HomeContent} />
					<Route path='/about' component={About} />
				</Route>
			</Router>
		)
	}
}

export default App