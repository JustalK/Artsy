import React from 'react';
import ArtistsMostPopular from 'src/components/ArtistsMostPopular';
import { Container, Title } from 'src/styles/Main';

/**
 * Display the list of the most popular artist
 **/
const Home = (): JSX.Element => {
	return (
		<Container>
			<Title centered={true}>Most Popular Artist</Title>
			<ArtistsMostPopular />
		</Container>
	);
};

export default Home;
