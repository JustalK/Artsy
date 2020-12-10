import React from 'react';
import { ImageComponentProps } from 'src/interfaces/Image';
import { Div, TextLine } from 'src/styles/Main';
import { Red, Gray } from 'src/styles/Color';
import styled from 'styled-components';

/**
 * The image tag that display the picture
 * @params {boolean} rounded True if the image will be display rounded
 **/
const Img = styled.img<{ rounded?: boolean }>`
	width: 80%;

	${(props) =>
		!props.rounded && `
		border: 1px solid ${Gray};
	`}

	${(props) =>
		props.rounded &&
		`
		border-radius: 50%;
	`}
`;

/**
 * If listed, the div will be use as a column system
 * @params {boolean} isListed True if the div is used as a column system
 **/
const DivPicture = styled(Div)<{ isListed?: boolean }>`
	${(props) =>
		props.isListed &&
		`
		width: 25%;
		text-align: center;
		margin-bottom: 50px;

		@media (max-width: 768px) {
			width: 50%;
		}
	`}
`;

/**
 * The display of the title of the image
 **/
const TextPicture = styled(TextLine)`
	color: ${Red};
	margin-bottom: 5rem;
	font-size: 1.2rem;
`;

/**
 * Show the image with some style
 * @params {ImageComponentProps} props The image and some informations related
 * @return {JSX.Element} The display of the image
 **/
const Image = (props: ImageComponentProps): JSX.Element => {
	const imageURL = props.image.imageURL.replace(':version', props.size);

	return (
		<DivPicture isListed={props.isListed}>
			{props.hasTitle && <TextPicture>{props.title}</TextPicture>}
			<picture>
				<Img src={imageURL} alt={props.image.title} rounded={props.rounded ? true : false} />
			</picture>
		</DivPicture>
	);
};

export default Image;
