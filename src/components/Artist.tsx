import React from 'react';
import { ArtistSingleProps } from 'src/interfaces/Artist';
import styled from 'styled-components';
import { Gray } from 'src/styles/Color';
import Image from 'src/components/Image';
import { SubTitle, TextLine, Div } from 'src/styles/Main';
import { sanitize } from 'src/utils/Helper';

/**
 * The complete styled div for the short artist information
 **/
const DivArtist = styled(Div)`
	display: flex;
	align-items: center;
	width: 23rem;
	margin: 1rem;
	border-radius: 2rem;
	border: 1px solid ${Gray};
	transition: 0.2s all;

	&:hover {
		background: ${Gray};
	}

	@media (max-width: 768px) {
		width: 100%;
		margin: 2rem 0;
	}
`;

/**
 * Locking the size of the image by it's parrent div
 **/
const DivLeft = styled(Div)`
	max-width: 100px;
	margin: 0.5rem;
`;

/**
 * Displaying the artist short information
 * @params {ArtistSingleProps} props The artist with just few information
 * @return {JSX.Element} Display styled artist
 **/
const Artist = (props: ArtistSingleProps): JSX.Element => {
	return (
		<DivArtist>
			<DivLeft>
				<Image image={props.artist.image} title={props.artist.image.title} size="square" rounded={true} />
			</DivLeft>
			<Div>
				<SubTitle>{sanitize(props.artist.name)}</SubTitle>
				<TextLine>{sanitize(props.artist.bio)}</TextLine>
				<TextLine>{sanitize(props.artist.birthday)}</TextLine>
			</Div>
		</DivArtist>
	);
};

export default Artist;
