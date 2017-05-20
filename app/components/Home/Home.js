import React, {Component} from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Dialog, MuiThemeProvider, RaisedButton, FlatButton} from 'material-ui';

injectTapEventPlugin();

class Home extends Component {

	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  	 	open: false,
	  	 	name: null,
	  	 	snapdealData: [],
	  	 	lazdaData: []
	  	};

	  	this.openModal = this.openModal.bind(this)
	  	this.closeModal = this.closeModal.bind(this)
	  	this.handleSave = this.handleSave.bind(this)
	}

  	openModal(){
    	this.setState({open: true});
  	};

  	closeModal(){
    	this.setState({open: false});
  	};

  	handleSave(q) {
  		if(typeof q != 'string') {
  			q = this.name.value
  		}
  		this.closeModal();
  		fetch('https://www.snapdeal.com/web/get/json/autoSuggestions?ss='+encodeURI(q)+'&sr=true&num=8').then((res) => {
  			return res.json()
  		}).then((resJson) => {
  			console.log('resJson', resJson);
  			if(resJson.unstructured.length > 0) {
  				this.setState({snapdealData: resJson.unstructured})
  			} else {
  				this.setState({snapdealData: resJson.responseAutosuggestions})
  			}

  			//	IN CASE YOU WANT TO CALL THIS API AFTER GETTING DATA FROM SNAPDEAL

  			// fetch('https://suggest.lazada.com.my/suggestions_desktop/v2?lang=en&query='+q).then((res) => {
  			// return res.json()
		  	// 	}).then((resJson) => {
		  	// 		console.log('resJson lazda', resJson);
		  	// 		this.setState({lazdaData: resJson.data.products})
		  	// 	}).catch((err) => {
		  	// 		console.log('err', err)
		  	// 	})
  		}).catch((err) => {
  			console.log('err', err)
  		})

  		fetch('https://suggest.lazada.com.my/suggestions_desktop/v2?lang=en&query='+encodeURI(q)).then((res) => {
  			return res.json()
  		}).then((resJson) => {
  			console.log('resJson lazda', resJson);
  			this.setState({lazdaData: resJson.data.products})
  		}).catch((err) => {
  			console.log('err', err)
  		})
  	}

	render() {
		const actions = [
		  	<FlatButton
		    	label="Cancel"
		    	primary={true}
		    	onTouchTap={this.closeModal}
		  	/>,
		  	<FlatButton
		    	label="Submit"
		    	primary={true}
		    	keyboardFocused={true}
		    	onTouchTap={this.handleSave}
		  	/>,
		];

		return (
		    <MuiThemeProvider>
		     	<div style={{margin: '20px'}}>
			        <RaisedButton label="Search Product" onTouchTap={this.openModal} />
			        <h1>{this.state.name}</h1>
			        <div className="container-fluid">
			        	<div className="row">
			        		<div className="col s6">
			        				<ul className="collection with-header">
								        <li className="collection-header"><h4>SnapDeal</h4></li>
								        {
								        	this.state.snapdealData.map((item, i) => <List handleSave={this.handleSave} item={item} key={i} />)
								        }
								    </ul>
			        		</div>
			        		<div className="col s6">
			        			<ul className="collection with-header">
							        <li className="collection-header"><h4>Lazada</h4></li>
							        {
							        	this.state.lazdaData.map((item, i) => <List handleSave={this.handleSave} item={item} key={i} />)
							        }
							    </ul>
			        		</div>
			        	</div>
			        </div>
			        <Dialog
			          title="Search Product on Snapdeal and Lazda"
			          actions={actions}
			          open={this.state.open}
			          onRequestClose={this.closeModal}
			        >
			          	<input type="text" placeholder="Enter product Name" ref={(nameInput) => {this.name = nameInput}}/>
			        </Dialog>
			       </div>
			</MuiThemeProvider>
		)
	}
}

class List extends Component {

	handleRowClick(q) {
		this.props.handleSave(q)
	}

	render() {
		return(
			<li className="collection-item" onClick={this.handleRowClick.bind(this, this.props.item.keyword || this.props.item.name)}><div>{this.props.item.keyword || this.props.item.name}<a href="#!" className="secondary-content"><i className="material-icons">send</i></a></div></li>
		)
	}
}

export default Home