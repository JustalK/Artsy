import { useQuery, gql } from '@apollo/client';
import { ArtistFullProps } from 'src/interfaces/Artist';

const GET_ARTWORKS = gql`
	query GetArtworks($slug: String!, $cursor: String!) {
		artist(id: $slug) {
			filterArtworksConnection(aggregations: [TOTAL], first: 10, after: $cursor) {
				edges {
					node {
						internalID
						title
						image {
							imageVersions
							imageURL
							title
						}
						date
						saleMessage
					}
				}
				pageCursors {
					first {
						page
					}
					around {
						page
					}
					last {
						page
					}
				}
				pageInfo {
					endCursor
					hasNextPage
					startCursor
					hasPreviousPage
				}
			}
		}
	}
`;

/**
 * Return the call for the artwork of an artist
 * @params {string} slug The slug of the artist
 * @params {string} cursor The cursor for offsetting the call
 * @return The call for the artworks
 **/
export function GetArtworks(slug: string, cursor: string) {
	return useQuery<ArtistFullProps, { slug: string; cursor: string }>(GET_ARTWORKS, {
		variables: { slug: slug, cursor: cursor },
	});
}
