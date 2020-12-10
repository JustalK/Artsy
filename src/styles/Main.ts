import styled from 'styled-components';
import { Red, Gray, Black, White } from 'src/styles/Color';

export const Div = styled.div<{ centered?: boolean }>`
	${(props) =>
		props.centered &&
		`
		text-align: center;
	`}
`;

export const Container = styled(Div)`
	max-width: 1200px;
	margin: 8rem auto;

	@media (max-width: 1200px) {
		max-width: 900px;
		margin: 8rem auto;
	}

	@media (max-width: 900px) {
		max-width: 700px;
		margin: 5rem auto;
	}

	@media (max-width: 768px) {
		margin: 10rem 2rem;
	}
`;

export const Section = styled.section`
	margin-bottom: 5rem;
`;

export const Title = styled.h1<{ centered?: boolean }>`
	color: ${Red};
	margin-bottom: 5rem;
	font-size: 4rem;

	${(props) =>
		props.centered &&
		`
		text-align: center;
	`}

	@media (max-width: 768px) {
		text-align: center;
	}
`;

export const SubTitle = styled.h2<{ centered?: boolean }>`
	color: ${Red};
	font-size: 2rem;

	${(props) =>
		props.centered &&
		`
		text-align: center;
	`}

	@media (max-width: 768px) {
		text-align: center;
	}
`;

export const TextLine = styled.span`
	font-size: 1rem;
	display: block;
	color: ${Black};
`;

export const Button = styled.button`
	border-radius: 20px;
	border: 1px solid ${Gray};
	padding: 2rem 3rem;
	margin: 5rem 1rem 1rem 1rem;
	cursor: pointer;
	background: ${White};
	transition: 0.2s all;

	&:hover {
		background: ${Gray};
	}
	&:focus {
		outline: none;
	}
`;
