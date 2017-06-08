import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
// eslint-disable-next-line
import styles from './Sidebar.styles.css'

const Sidebar = () => (
	<div className="sidebar">
		<Menu
			theme="dark" >
			<Menu.Item>
				<Link to="/">Home</Link>
			</Menu.Item>
			<Menu.Item>
				<Link to="page-1">Page 1</Link>
			</Menu.Item>
			<Menu.Item>
				<Link to="page-2">Page 2</Link>
			</Menu.Item>
		</Menu>
	</div>
)

export default Sidebar
