import { ImageProps } from 'src/interfaces/Image';
import { GeneProps } from 'src/interfaces/Gene';
import { CountProps } from 'src/interfaces/Count';
import { FilterArtworksConnectionProps } from 'src/interfaces/Artwork';

export interface ArtistsProps {
	/**
	 * The list of artists
	 **/
	artists: ArtistProps[];
}

export interface ArtistSingleProps {
	/**
	 * A single artist
	 **/
	artist: ArtistProps;
}

export interface ArtistProps {
	/**
	 * The id of the artist
	 * Using that for the exclude id filter
	 **/
	internalID: string;
	/**
	 * The name of the artist
	 **/
	name: string;
	/**
	 * The slug of the artist
	 **/
	slug: string;
	/**
	 * The biography of the artist
	 **/
	bio: string;
	/**
	 * The birthday of the artist
	 **/
	birthday: string;
	/**
	 * The image of the artist
	 **/
	image: ImageProps;
}

export interface ArtistFullProps {
	/**
	 * The artist full details
	 **/
	artist: ArtistDetailsProps;
}

export interface ArtistDetailsProps extends ArtistProps {
	/**
	 * The gender of the artist
	 **/
	gender: string;
	/**
	 * The hometown of the artist
	 **/
	hometown: string;
	/**
	 * The formatted artwork count sentance by Artsy
	 **/
	formattedArtworksCount: string;
	/**
	 * The list of collections created by the artist
	 **/
	collections: string[];
	/**
	 * A resume of the artist
	 **/
	blurb: string;
	/**
	 * The category of the artist
	 **/
	genes: GeneProps[];
	/**
	 * The counter of activity of the artist
	 **/
	counts: CountProps;
	/**
	 * The linked artwork to the artist
	 **/
	filterArtworksConnection?: FilterArtworksConnectionProps;
}
