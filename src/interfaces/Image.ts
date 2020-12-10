export interface ImageComponentProps {
	/**
	 * The image
	 **/
	image: ImageProps;
	/**
	 * The version of the image to display
	 **/
	size: string;
	/**
	 * The title of the image
	 * (Secure version compare to the title on the image itself)
	 **/
	title: string;
	/**
	 * True if a title should be display with the image
	 **/
	hasTitle?: boolean;
	/**
	 * True if the image should be display rounded
	 **/
	rounded?: boolean;
	/**
	 * True if the image will be display in a list
	 **/
	isListed?: boolean;
}

export interface ImageProps {
	/**
	 * The title of the image
	 * (!Careful - It seems like it's not safe to use with the artsy API)
	 **/
	title: string;
	/**
	 * The url of the image with a ':version' to be replace
	 **/
	imageURL: string;
	/**
	 * The available size for the image
	 **/
	imageVersions: string[];
}
