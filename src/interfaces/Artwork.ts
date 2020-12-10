import { ImageProps } from 'src/interfaces/Image';

export interface PageProps {
	/**
	 * The last cursor of a connection
	 **/
	endCursor: string;
	/**
	 * The first cursor of the actual connection
	 **/
	startCursor: string;
	/**
	 * If the lastCursor is not the last one, there is anotehr set
	 **/
	hasNextPage: boolean;
	/**
	 * If the first cursor is not the first, there is a previous plage
	 **/
	hasPreviousPage: boolean;
}

export interface FilterArtworksConnectionProps {
	/**
	 * The list of result from the connection
	 **/
	edges: NodeProps[];
	/**
	 * The informations of the actual connection
	 **/
	pageInfo: PageProps;
}

export interface NodeProps {
	/**
	 * The artowrk resulting from connection between artist and artwork
	 **/
	node: ArtworkProps;
}

export interface ArtworkProps {
	/**
	 * The title of the artwork
	 **/
	title: string;
	/**
	 * The sale message
	 **/
	saleMessage: string;
	/**
	 * The image of the artwork
	 **/
	image: ImageProps;
}
