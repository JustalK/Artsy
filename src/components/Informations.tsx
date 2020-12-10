import React from 'react';
import { InformationsProps, InformationProps } from 'src/interfaces/Information';
import { GrayRowDark, GrayRowLight, White, Red } from 'src/styles/Color';
import { SubTitle } from 'src/styles/Main';
import { Div } from 'src/styles/Main';
import styled from 'styled-components';

/**
 * Just a table with some style
 **/
const Table = styled.table`
	border-spacing: 0;
	margin-bottom: 4rem;
`;

/**
 * The row of the table
 * @params {boolean} odd True if this row is odd in the order
 **/
const Tr = styled.tr<{ odd: boolean }>`
	height: 4rem;
	background: ${GrayRowDark};

	${(props) =>
		props.odd &&
		`
		background: ${GrayRowLight};
	`}

	&:hover {
		background: ${Red};
		color: ${White};
	}
`;

/**
 * The column of the table
 * @param {boolean} legend True if the cell contains a legend for a value
 **/
const Td = styled.td<{ legend?: boolean }>`
	margin: 0 1rem;
	padding: 2rem;
	user-select: none;

	${(props) =>
		props.legend &&
		`
		min-width: 10rem;
	`}
`;

/**
 * The title of the table
 **/
const TableTitle = styled(SubTitle)`
	margin-top: 0;
	margin-bottom: 3rem;

	@media (max-width: 768px) {
		margin-top: 3rem;
	}
`;

/**
 * Show the informations in a styled table
 * @param {InformationsProps} props The title and informations to be displayed
 * @return {JSX.Element} The display of the information
 **/
const Informations = (props: InformationsProps): JSX.Element => {
	return (
		<Div>
			<TableTitle>{props.title}</TableTitle>
			<Table>
				<tbody>
					{props.data.map((d: InformationProps, index: number) => (
						<Tr key={index} odd={index % 2 == 0}>
							<Td legend={true}>{d.key + ' :'}</Td>
							<Td>{d.value}</Td>
						</Tr>
					))}
				</tbody>
			</Table>
		</Div>
	);
};

export default Informations;
