import React, { useState } from 'react';
import Artists from 'src/components/Artists';
import { Button, Div } from 'src/styles/Main';
import { GetPopularArtist } from 'src/services/ApiArtists';
import Loading from 'src/components/Loading';
import Error from 'src/components/Error';
/**
 * The total of artist querying in the api
 **/
const TOTAL_ARTISTS = 8;
/**
 * The max popular artist given by Artsy
 **/
const ARTSY_TOTAL_ARTISTS_LIMIT = 29;

/**
 * Display the most popular artist of the moment if it exists
 * @return {JSX.Element} The display of the artist
 **/
const ArtistsMostPopular = (): JSX.Element => {
	const [ids, setIds] = useState<string[]>([]);
	const { loading, error, data } = GetPopularArtist(TOTAL_ARTISTS, ids);

	/**
	 * Will trigger the previous set of popular artist
	 * Since the call does not exist, I use a list of exclude IDs
	 **/
	const prevPage = () => {
		const excludeIds = ids.slice(0, ids.length - TOTAL_ARTISTS);
		setIds(excludeIds);
	};

	/**
	 * Will trigger the next set of popular artist if it exists
	 **/
	const nextPage = () => {
		if (artists) {
			const excludeIds = artists.map((artist) => artist.internalID);
			setIds([...ids, ...excludeIds]);
		}
	};

	/**
	 * Check if there is an other page of artist
	 * @return {boolean} True if there is an other page
	 **/
	const hasNextPage = () => {
		return ids.length < ARTSY_TOTAL_ARTISTS_LIMIT - TOTAL_ARTISTS;
	};

	/**
	 * Check if there is a previous page
	 * @return {boolean} True if there is a previous page
	 **/
	const hasPreviousPage = () => {
		return ids.length !== 0;
	};

	if (loading) {
		return <Loading height={10} />;
	}

	if (error) {
		return <Error />;
	}

	const highlights = data ? data.highlights : undefined;
	const artists = highlights ? highlights.popularArtists : undefined;

	if (artists) {
		return (
			<Div>
				<Artists artists={artists} />
				<Div centered={true}>
					{hasPreviousPage() && <Button onClick={() => prevPage()}>Prev</Button>}
					{hasNextPage() && <Button onClick={() => nextPage()}>Next</Button>}
				</Div>
			</Div>
		);
	} else {
		return <Error />;
	}
};

export default ArtistsMostPopular;
