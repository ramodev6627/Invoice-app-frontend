import React from 'react';
import styled from 'styled-components';
import { HomeHeader } from './HomeHeader';
import { InvoicesList } from './InvoicesList';
import { Pagination } from './Pagination';

const StyledHome = styled.div`
	width: 90%;
	max-width: 1100px;
	margin: 0 auto;

	.list {
		margin: 2em 0 1em;
	}
`;

export const Home = () => {
	return (
		<StyledHome>
			<HomeHeader className="header" />
			<InvoicesList className="list" />
			<Pagination total={15} />
		</StyledHome>
	);
};
