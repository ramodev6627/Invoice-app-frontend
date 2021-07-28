import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchInvoiceList } from '../../invoice/InvoiceSlice';
import { InvoiceListItem } from './InvoiceListItem';

const StyledInvoicesList = styled.ul`
	list-style-type: none;
`;

export const InvoicesList = ({ className, pageIndex }) => {
	const jwt = useSelector((state) => state.auth.jwt);
	const dispatch = useDispatch();
	const invoiceList = useSelector((state) => state.invoice.invoiceList);

	useEffect(() => {
		dispatch(fetchInvoiceList(jwt, pageIndex - 1));
	}, [jwt, pageIndex, dispatch]);

	return (
		<StyledInvoicesList className={className}>
			{invoiceList && invoiceList.length > 0 ? (
				invoiceList.map((val) => {
					return <InvoiceListItem key={val.id} invoice={val} />;
				})
			) : (
				<p>No invoices to display</p>
			)}
		</StyledInvoicesList>
	);
};
