import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledInvoiceViewFooter = styled.footer`
	padding: 2em;
	background: ${(props) => props.theme.primaryDark};
	color: ${(props) => props.theme.white};
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
	const currentTheme = useSelector((state) => state.theme.current);
	const theme = useSelector((state) => state.theme[currentTheme]);
	return (
		<StyledInvoiceViewFooter theme={theme}>
			<p>Ground Total</p>
			<span>{total} $</span>
		</StyledInvoiceViewFooter>
	);
};
