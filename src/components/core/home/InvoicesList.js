import React from 'react';
import styled from 'styled-components';
import { InvoiceListItem } from './InvoiceListItem';

const StyledInvoicesList = styled.ul`
	list-style-type: none;
`;

export const InvoicesList = ({ className }) => {
	return (
		<StyledInvoicesList className={className}>
			{[1, 2, 3, 4, 5].map((val) => {
				return <InvoiceListItem key={val} />;
			})}
		</StyledInvoicesList>
	);
};
