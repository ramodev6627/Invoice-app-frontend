import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchInvoiceList } from '../../invoice/InvoiceSlice';
import { InvoiceListItem } from './InvoiceListItem';
import { Loading } from '../Loading';
import { EmptyList } from './EmptyList';

const StyledInvoicesList = styled.ul`
	list-style-type: none;
`;

export const InvoicesList = ({ className, pageIndex }) => {
	const jwt = useSelector((state) => state.auth.jwt);
	const dispatch = useDispatch();
	const invoiceList = useSelector((state) => state.invoice.invoiceList);
	const filter = useSelector((state) => state.invoice.invoiceListFilter);
	const [invoiceLoading, setInvoiceLoading] = useState(false);

	useEffect(() => {
		setInvoiceLoading(true);
		let payload = {
			jwt,
			page: pageIndex - 1,
			size: 10,
		};
		if (filter) {
			payload.filter = filter;
		}

		dispatch(fetchInvoiceList(payload))
			.then(() => {
				setInvoiceLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setInvoiceLoading(false);
			});
	}, [jwt, pageIndex, dispatch, filter]);

	if (invoiceLoading) {
		return <Loading />;
	}

	return (
		<StyledInvoicesList className={className}>
			{invoiceList && invoiceList.length > 0 ? (
				invoiceList.map((val) => {
					return <InvoiceListItem key={val.id} invoice={val} />;
				})
			) : (
				<EmptyList />
			)}
		</StyledInvoicesList>
	);
};
