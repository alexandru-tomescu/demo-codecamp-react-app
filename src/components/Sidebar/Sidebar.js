import React from 'react';
// eslint-disable-next-line
import styles from './Sidebar.styles.css';

import { Menu } from 'antd';

const Sidebar = () => (
	<div className="sidebar">
		<Menu
			theme="dark" >
			<Menu.Item>Menu</Menu.Item>
		</Menu>
	</div>
);

export default Sidebar;
