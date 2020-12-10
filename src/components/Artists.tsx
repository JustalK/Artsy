import React from 'react';
import { Link } from 'react-router-dom';
import { ArtistsProps, ArtistProps } from 'src/interfaces/Artist';
import { TextLine } from 'src/styles/Main';
import Artist from 'src/components/Artist';
import styled from 'styled-components';

/**
 * Styled ul tag for displaying li in a column style
 **/
const Ul = styled.ul`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	@media (max-width: 900px) {
		display: block;
	}
`;

/**
 * Displaying all the artist given in parameter
 * @params {ArtistsProps} props The artists to display
 * @return {JSX.Element} The artists in a beautiful screen
 **/
const Artists = (props: ArtistsProps): JSX.Element => {
	if (props.artists === undefined) {
		return <TextLine>No artist received</TextLine>;
	}

	return (
		<Ul>
			{props.artists.map((artist: ArtistProps, index: number) => (
				<li key={index}>
					<Link to={'/artist/' + artist.slug}>
						<Artist artist={artist} />
					</Link>
				</li>
			))}
		</Ul>
	);
};

export default Artists;
