import { ArtistProps } from 'src/interfaces/Artist';

export interface HighlightsProps {
	/**
	 * The name of the filter
	 **/
	highlights: FilterProps;
}

export interface HighlightsVariablesProps {
	/**
	 * The number of artist to display
	 **/
	size: number;
	/**
	 * For the API call
	 * There are not any cursor, limit available on that call
	 * So we can use the excludeId for removing the artist already seen
	 **/
	exclude: string[];
}

export interface FilterProps {
	/**
	 * The list of popular artist
	 **/
	popularArtists: ArtistProps[];
}
