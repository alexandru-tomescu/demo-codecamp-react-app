import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import Sidebar from './components/Sidebar/Sidebar'

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1>Codecamp react app</h1>
				</div>
				<div className="App-content">
					<Sidebar />
					{ this.props.children }
				</div>
			</div>
		);
	}
}

export default App;
