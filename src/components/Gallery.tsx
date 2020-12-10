import React, { useState } from 'react';
import Image from 'src/components/Image';
import Loading from 'src/components/Loading';
import Error from 'src/components/Error';
import { GalleryProps } from 'src/interfaces/Gallery';
import { ArtworkProps, NodeProps } from 'src/interfaces/Artwork';
import styled from 'styled-components';
import { GetArtworks } from 'src/services/ApiArtworks';
import { Section, Div, SubTitle, Button } from 'src/styles/Main';

/**
 * The section for the gallery
 * Displaying the data in a column style
 **/
const SectionGallery = styled(Section)`
	display: flex;
	flex-wrap: wrap;
	margin-top: 5rem;
`;

/**
 * Show the gallery of one artist depending of his slug
 * @params {GalleryProps} props The slug and title of the artist
 * @return {JSX.Element} The display of the gallery
 **/
const Gallery = (props: GalleryProps): JSX.Element => {
	const [cursor, setCursor] = useState<string>('');
	const { loading, error, data } = GetArtworks(props.slug, cursor);

	/**
	 * Will trigger the previous page if the page exist
	 * @params {(string | undefined)} The first cursor of the page
	 **/
	const previousPage = (startCursor: string | undefined) => {
		if (startCursor) {
			setCursor(startCursor);
		}
	};

	/**
	 * Will trigger the next page if the page exist
	 * @params {(string | undefined)} The last cursor of the page
	 **/
	const nextPage = (endCursor: string | undefined) => {
		if (endCursor) {
			setCursor(endCursor);
		}
	};

	if (loading) {
		return <Loading height={50} />;
	}

	if (error) {
		return <Error />;
	}

	const artist = data ? data.artist : undefined;
	const filterArtworks = artist ? artist.filterArtworksConnection : undefined;
	const pageInfo = filterArtworks ? filterArtworks.pageInfo : undefined;
	const startCursor = pageInfo ? pageInfo.startCursor : undefined;
	const endCursor = pageInfo ? pageInfo.endCursor : undefined;
	const hasNextPage = pageInfo ? pageInfo.hasNextPage : undefined;
	const hasPreviousPage = pageInfo ? pageInfo.hasPreviousPage : undefined;

	if (filterArtworks) {
		const node = filterArtworks.edges.map((edge: NodeProps) => edge.node);
		return (
			<Section>
				<SubTitle centered={true}>{props.title}</SubTitle>
				<Div centered={true}>
					{hasPreviousPage && <Button onClick={() => previousPage(startCursor)}>Previous</Button>}
					{hasNextPage && <Button onClick={() => nextPage(endCursor)}>Next</Button>}
				</Div>
				<SectionGallery>
					{node.map((artworks: ArtworkProps, index: number) => (
						<Image
							key={index}
							hasTitle={true}
							title={artworks.title}
							isListed={true}
							image={artworks.image}
							size="large"
						/>
					))}
				</SectionGallery>
				<Div centered={true}>
					{hasPreviousPage && <Button onClick={() => previousPage(startCursor)}>Previous</Button>}
					{hasNextPage && <Button onClick={() => nextPage(endCursor)}>Next</Button>}
				</Div>
			</Section>
		);
	} else {
		return <Error />;
	}
};

export default Gallery;
