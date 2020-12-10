import React from 'react';
import { useParams } from 'react-router-dom';
import ArtistDetails from 'src/components/ArtistDetails';
import Gallery from 'src/components/Gallery';
import { GetFullArtist } from 'src/services/ApiArtists';
import { Container } from 'src/styles/Main';
import Loading from 'src/components/Loading';
import Error from 'src/components/Error';

/**
 * Display the details page of an artist
 * It will show all the artworks and all the informations available about a specific artist
 **/
const Details = (): JSX.Element => {
	const { slug } = useParams();
	const { loading, error, data } = GetFullArtist(slug);

	if (loading) {
		return (
			<Container>
				<Loading height={10} />
			</Container>
		);
	}

	if (error) {
		return <Error />;
	}

	if (data) {
		return (
			<Container>
				<ArtistDetails artist={data.artist} />
				<Gallery title={'Artworks of ' + data.artist.name} slug={data.artist.slug} />
			</Container>
		);
	} else {
		return <p>sadasd</p>;
	}
};

export default Details;
