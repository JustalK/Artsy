export interface InformationsProps {
	/**
	 * The title of those data
	 **/
	title: string;
	/**
	 * All the data to be display
	 **/
	data: InformationProps[];
}

export interface InformationProps {
	/**
	 * The title of the information to be display
	 **/
	key: string;
	/**
	 * The value of the information to be display
	 **/
	value: string;
}
