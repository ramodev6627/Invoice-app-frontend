import React from 'react';
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
		color: var(--green);
		background: var(--green-light);
		span {
			background-color: var(--green);
		}
	}
	&.PENDING {
		color: var(--orange);
		background: var(--orange-light);
		span {
			background-color: var(--orange);
		}
	}
	&.DRAFT {
		color: var(--dark);
		background: var(--dark-light);
		span {
			background-color: var(--dark);
		}
	}
`;

export const InvoiceStatus = ({ status }) => {
	return (
		<StyledInvoiceStatus className={status}>
			<span></span>
			<p>{status.toLocaleLowerCase()}</p>
		</StyledInvoiceStatus>
	);
};
