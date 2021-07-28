import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
	const paginationInfo = useSelector((state) => state.invoice.invoiceListInfo);
	const { pageIndex } = useParams();

	return (
		<StyledHome>
			{paginationInfo && (
				<HomeHeader
					className="header"
					totalPages={paginationInfo.totalPages}
					totalInvoices={paginationInfo.totalElements}
				/>
			)}
			<InvoicesList className="list" pageIndex={pageIndex} />
			{paginationInfo && paginationInfo.totalPages && paginationInfo.totalPages > 0 && (
				<Pagination total={paginationInfo.totalPages} />
			)}
		</StyledHome>
	);
};
