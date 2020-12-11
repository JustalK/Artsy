import { useQuery, gql } from '@apollo/client';
import { HighlightsProps, HighlightsVariablesProps } from 'src/interfaces/Filter';
import { ArtistFullProps } from 'src/interfaces/Artist';

const GET_POPULAR_ARTISTS = gql`
	query getPopularArtists($size: Int, $exclude: [String]) {
		highlights {
			popularArtists(size: $size, excludeArtistIDs: $exclude) {
				internalID
				slug
				name
				bio
				birthday
				image {
					imageVersions
					imageURL
					title
				}
			}
		}
	}
`;

const GET_FULL_ARTIST = gql`
	query getFullArtist($slug: String!) {
		artist(id: $slug) {
			slug
			name
			hometown
			bio
			birthday
			gender
			hasMetadata
			collections
			blurb
			formattedArtworksCount
			formattedNationalityAndBirthday
			image {
				imageVersions
				imageURL
				title
			}
			genes {
				name
			}
			insights {
				type
				label
				entities
			}
			statuses {
				artists
				artworks
				shows
				cv
			}
			counts {
				partnerShows
				relatedArtists
				articles
			}
		}
	}
`;

/**
 * Return the call for the popular artist
 * @params {number} size The equivalent of the limit parameter
 * @params {string[]} exclude Exclude id in the query
 * @return The call for the popular artist
 **/
export function getPopularArtist(size: number, exclude: string[] = []) {
	return useQuery<HighlightsProps, HighlightsVariablesProps>(GET_POPULAR_ARTISTS, {
		variables: { size: size, exclude: exclude },
	});
}

/**
 * Return the call for the full artist
 * @params {string} slug The slug of the artist
 * @return the call of the full artist
 **/
export function getFullArtist(slug: string) {
	return useQuery<ArtistFullProps, { slug: string }>(GET_FULL_ARTIST, {
		variables: { slug: slug },
	});
}
