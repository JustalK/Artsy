import React from 'react';
import Informations from 'src/components/Informations';
import { ArtistFullProps } from 'src/interfaces/Artist';
import { Section, Title, Div } from 'src/styles/Main';
import Image from 'src/components/Image';
import styled from 'styled-components';
import { sanitize, join } from 'src/utils/Helper';

/**
 * Section for the artist
 **/
const SectionArtistDetails = styled(Section)`
	display: flex;

	@media (max-width: 768px) {
		display: block;
	}
`;

/**
 * Div styled for a two column system
 **/
const Columns = styled(Div)`
	width: 50%;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

/**
 * Display all the informations of the artist
 * @params {ArtistFullProps} props The full informations of the artist
 * @return {JSX.Element} Display the artist's information
 **/
const ArtistDetails = (props: ArtistFullProps): JSX.Element => {
	return (
		<Section>
			<Title centered={true}>{sanitize(props.artist.name)}</Title>
			<SectionArtistDetails>
				<Columns centered={true}>
					<Image image={props.artist.image} title={props.artist.image.title} size="large" />
				</Columns>
				<Columns>
					<Informations
						title="Artist Information"
						data={[
							{ key: 'Gender', value: sanitize(props.artist.gender) },
							{ key: 'Hometown', value: sanitize(props.artist.hometown) },
							{ key: 'Birthday', value: sanitize(props.artist.birthday) },
							{ key: 'Biography', value: sanitize(props.artist.bio) },
							{ key: 'Resume', value: sanitize(props.artist.blurb) },
							{ key: 'Work', value: sanitize(props.artist.formattedArtworksCount) },
						]}
					/>
					<Informations
						title="Work information"
						data={[
							{ key: 'Collections', value: join(props.artist.collections) },
							{ key: 'Categories', value: join(props.artist.genes.map((gene) => sanitize(gene.name))) },
							{ key: 'Total articles', value: props.artist.counts.articles.toString() },
							{ key: 'Total partner shows', value: props.artist.counts.partnerShows.toString() },
							{ key: 'Total related artist', value: props.artist.counts.relatedArtists.toString() },
						]}
					/>
				</Columns>
			</SectionArtistDetails>
		</Section>
	);
};

export default ArtistDetails;
