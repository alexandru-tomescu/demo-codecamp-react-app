import React from 'react'
import notFoundImage from './404-not-found.jpg'

const NotFound = () => (
	<div>
		<h1>
			Not Found Page
		</h1>
		<img alt="404" src={notFoundImage} />
	</div>
)

export default NotFound
