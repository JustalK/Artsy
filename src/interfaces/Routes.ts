import React from 'react';

export interface MenuRoutes {
	/**
	 * The path of the route
	 **/
	path: string;
	/**
	 * The name of the route
	 **/
	name: string;
	/**
	 * The entry component for this path
	 **/
	page: React.ReactNode;
}
