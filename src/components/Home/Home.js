import React, { Component } from 'react'
import { Switch } from 'antd'

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			status: true
		}
	}

	render() {
		return (
			<div>
				<h1>
					Home
				</h1>
				<h1>
					Switch status: 
					{
						this.state.status
						? 'ON'
						: 'OFF'
					}
				</h1>
				<Switch defaultChecked={ this.state.status } onChange={ () => { this.setState({ status: !this.state.status }) } } />
			</div>
		)
	}
}

export default Home
