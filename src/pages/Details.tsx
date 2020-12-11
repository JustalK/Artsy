import React from 'react';
import { useParams, Link} from 'react-router-dom';
import ArtistDetails from 'src/components/ArtistDetails';
import Gallery from 'src/components/Gallery';
import { getFullArtist } from 'src/services/ApiArtists';
import { Container } from 'src/styles/Main';
import Loading from 'src/components/Loading';
import Error from 'src/components/Error';
import styled from 'styled-components';
import { Red, White, Gray } from 'src/styles/Color';

/**
 * Styled ul tag for displaying li in a column style
 **/
const Home = styled(Link)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100px;
	background: ${Gray};
	color: ${White};
	height: 100px;
	line-height: 170px;
	text-align: center;
	transform: translate(-50%,-50%) rotateZ(-45deg);
	transition: 0.2s all;

	&:hover {
		background: ${Red};
	}
`;

/**
 * Display the details page of an artist
 * It will show all the artworks and all the informations available about a specific artist
 **/
const Details = (): JSX.Element => {
	const { slug } = useParams();
	const { loading, error, data } = getFullArtist(slug);

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
				<Home to={'/'}>Home</Home>
				<ArtistDetails artist={data.artist} />
				<Gallery title={'Artworks of ' + data.artist.name} slug={data.artist.slug} />
			</Container>
		);
	} else {
		return <p>sadasd</p>;
	}
};

export default Details;
