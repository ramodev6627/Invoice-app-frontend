import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledInvoiceStatus = styled.div`
	border-radius: 5px;
	padding: 0.8em 1em;
	align-self: flex-end;
	width: 110px;
	display: flex;
	align-items: center;
	justify-content: center;

	span {
		display: block;
		width: 10px;
		height: 10px;
		border-radius: 50%;

		margin-right: 7px;
	}

	p {
		text-transform: capitalize;
	}

	&.PAID {
		color: ${(props) => props.theme.green};
		background: ${(props) => props.theme.greenLight};
		span {
			background-color: ${(props) => props.theme.green};
		}
	}
	&.PENDING {
		color: ${(props) => props.theme.orange};
		background: ${(props) => props.theme.orangeLight};
		span {
			background-color: ${(props) => props.theme.orange};
		}
	}
	&.DRAFT {
		color: ${(props) => props.theme.dark};
		background: ${(props) => props.theme.darkLight};
		span {
			background-color: ${(props) => props.theme.dark};
		}
	}
`;

export const InvoiceStatus = ({ status }) => {
	const currentTheme = useSelector((state) => state.theme.current);
	const theme = useSelector((state) => state.theme[currentTheme]);
	return (
		<StyledInvoiceStatus theme={theme} className={status}>
			<span></span>
			<p>{status.toLocaleLowerCase()}</p>
		</StyledInvoiceStatus>
	);
};
