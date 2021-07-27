import React from 'react';
import styled from 'styled-components';

const StyledInvoiceViewFooter = styled.footer`
	padding: 2em;
	background: var(--primary-dark);
	color: var(--white);
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;

	p {
		opacity: 0.8;
	}

	span {
		font-weight: 600;
		font-size: 1.75rem;
	}
`;

export const InvoiceViewFooter = ({ total }) => {
	return (
		<StyledInvoiceViewFooter>
			<p>Ground Total</p>
			<span>{total} $</span>
		</StyledInvoiceViewFooter>
	);
};
