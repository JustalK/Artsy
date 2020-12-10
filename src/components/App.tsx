import React from 'react';
import 'src/less/main.less';
import Routes from 'src/components/Routes';
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

/**
 * Entry point of the App
 * Manage all the transition between page
 **/
class App extends React.Component<RouteComponentProps, never> {
	render(): React.ReactNode {
		const { location } = this.props;

		return (
			<TransitionGroup>
				<CSSTransition<undefined> key={location.key} classNames="transition" timeout={1000}>
					<Switch location={location}>
						{Routes.get_all_routes().map((route_obj, index) => {
							return (
								<Route key={index} path={route_obj.path}>
									{route_obj.page}
								</Route>
							);
						})}
					</Switch>
				</CSSTransition>
			</TransitionGroup>
		);
	}
}

export default withRouter(App);
