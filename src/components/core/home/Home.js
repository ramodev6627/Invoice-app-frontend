import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { changeInvoiceListFilter } from '../../invoice/InvoiceSlice';
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
	const dispatch = useDispatch();
	const { pageIndex } = useParams();

	const filterClick = (status) => {
		dispatch(changeInvoiceListFilter(status));
	};

	return (
		<StyledHome>
			{paginationInfo && (
				<HomeHeader
					className="header"
					totalPages={paginationInfo.totalPages}
					totalInvoices={paginationInfo.totalElements}
					filterClick={filterClick}
				/>
			)}
			<InvoicesList className="list" pageIndex={pageIndex} />
			{paginationInfo && paginationInfo.totalPages && paginationInfo.totalPages > 0 && (
				<Pagination total={paginationInfo.totalPages} />
			)}
		</StyledHome>
	);
};
