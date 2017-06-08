import React, { Component } from 'react'
import { Card } from 'antd'
import axios from 'axios'
// eslint-disable-next-line
import styles from './Page2.styles.css'

class Page2 extends Component {
	constructor(props) {
		super(props)
		this.state = {
			fetching: false,
			starships: [],
			error: ''
		}
	}

	componentWillMount() {
		this.setState({
			fetching: true
		})
		var self = this
		axios.get('http://swapi.co/api/starships/')
			.then(function (response) {
				const results = response.data.results
				self.setState({
					fetching: false,
					starships: results
				})
			})
			.catch(function (error) {
				self.setState({
					error: error
				})
			})
	}

	render() {
		return (
			<div>
				<h1>
					Page 2
				</h1>
				<h1>
					{
						this.state.fetching
						? 'FETCHING DATA...'
						: 'NOT FETCHING'
					}
				</h1>
				<h1>
					{
						this.state.error
					}
				</h1>
				{
					this.state.starships.map((starship) => (
						<div key={ starship.name } className="marginCard">
							<Card title={ starship.name } bordered={false}>
								<p>Model: { starship.model }</p>
								<p>Length: { starship.length }</p>
								<p>Cost: { starship.cost_in_credits }</p>
							</Card>
						 </div>
					))
				}
			</div>
		)
	}
}

export default Page2
