import React from 'react';
import styled from 'styled-components';
import { LoadingProps } from 'src/interfaces/Loading';
import { Div, TextLine } from 'src/styles/Main';

/**
 * Give a certain height to a div for taking the space
 *
 * @param {number} height The height of the div
 **/
const BigDiv = styled(Div)<{ height: number }>`
	${(props) => `
		height: ${props.height}rem;
		line-height: ${props.height}rem;
	`}
`;

/**
 * Manage the loading screen of the application
 * Maybe a spinner would be cool there
 * @return {JSX.Element} The loading display
 **/
const Loading = (props: LoadingProps): JSX.Element => {
	return (
		<BigDiv centered={true} height={props.height}>
			<TextLine>Loading...</TextLine>
		</BigDiv>
	);
};

export default Loading;
