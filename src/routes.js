
// TODO

import React from 'react'
import { Route, IndexRedirect, IndexRoute } from 'react-router'

const getRoutes = () => {
	return (
		<Route
			component={ App } >
			<Route
				path="/"
				component={ UserIsAuthenticated(Dashboard) } >
				<IndexRedirect to="my-account" />
				<Route
					path="my-account"
					component={ MyAccount } />
				<Route path="admin">
					<IndexRoute
						component={ Administer } />
					<Route
						path='users'
						component={ UserManagement } >
						<Route
							path="list"
							component={ UserManagement } />
					</Route>
					<Route path='reporting'>
						<IndexRedirect to="user-activity" />
						<Route
							path="user-activity"
							component={ UserActivity } />
					</Route>
				</Route>
			</Route>
			<Route
				path="login"
				component={ Login } />
			<Route
				path="password-recovery"
				component={ PasswordRecovery } />
			<Route
				path="*"
				component={ UserIsAuthenticated(NotFound) } />
		</Route>
	)
}

export default getRoutes