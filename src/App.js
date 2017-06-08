import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'
import Page1 from './components/Page1/Page1'
import Page2 from './components/Page2/Page2'
import NotFound from './components/NotFound/NotFound'
import { Layout } from 'antd'

import './App.css'

const { Header, Content, Sider } = Layout

class App extends Component {
	render() {
		return (
			<div className="App">
				<Layout className="allHeight">
					<Header>
						<h1 className="title">Codecamp react app</h1>
					</Header>
					<Layout>
						<Sider>
							<Sidebar />
						</Sider>
						<Content>
							<Switch>
								<Route exact path="/" component={ Home }/>
								<Route exact path="/page-1" component={ Page1 }/>
								<Route exact path="/page-2" component={ Page2 }/>
								<Route component={ NotFound }/>
							</Switch>
						</Content>
					</Layout>
				</Layout>
			</div>
		)
	}
}

export default App