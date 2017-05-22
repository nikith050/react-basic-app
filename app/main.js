import React from 'react'
import {render} from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './components/App'

import css from './css/materialize.css'
import styles from './css/style.css'

render(
	<App />,
	document.getElementById('app')
)