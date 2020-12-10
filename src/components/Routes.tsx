import React from 'react';
import Home from 'src/pages/Home';
import Details from 'src/pages/Details';
import { MenuRoutes } from 'src/interfaces/Routes';

/**
 * Class for managing the routes of the system
 **/
export default class Routes extends React.Component {
	/**
	 * Return all the routes available of the application
	 * @return {{path: string, detail: string, page: React.node}} All the routes of the application
	 **/
	static get_all_routes(): MenuRoutes[] {
		return [
			{
				path: '/artist/:slug',
				name: 'Details',
				page: <Details />,
			},
			{
				path: '/',
				name: 'Home',
				page: <Home />,
			},
		];
	}
}
