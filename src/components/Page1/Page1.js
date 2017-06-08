import React, { Component } from 'react'
import { Radio } from 'antd'

const RadioGroup = Radio.Group

class Page1 extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selected: 1,
			noOfValues: 5
		}
	}

	radios() {
		let radios = []
		for (let i = 1; i < this.state.noOfValues + 1; i++) {
			radios.push(
				<Radio key={ i } value={ i }>{ i }</Radio>
			)
		}
		return radios
	}

	render() {
		return (
			<div>
				<h1>
					Page 1
				</h1>
				<h1>
					Number of values: { this.state.noOfValues }
				</h1>
				<br/>
				<h1>
					Selected value: { this.state.selected }
				</h1>
				<RadioGroup onChange={ (e) => { this.setState({ selected: e.target.value }) } } value={ this.state.selected }>
				{
					this.radios()
				}
				</RadioGroup>
			</div>
		)
	}
}

export default Page1
