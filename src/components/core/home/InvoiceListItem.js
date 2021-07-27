import React from 'react';
import styled from 'styled-components';
import { RiArrowRightSLine } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import { InvoiceStatus } from '../InvoiceStatus';
import { toDateInputValue } from '../../invoice/InvoiceFormHelpers';

const StyledInvoiceListItem = styled.li`
	background: #fff;
	margin: 1.5em 0;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
	padding: 1.8em 2em;
	border-radius: 11px;
	position: relative;
	transition: opacity 0.1s ease-in;
	cursor: pointer;

	:hover {
		opacity: 0.7;
	}

	.wrapper-1,
	.wrapper-2 {
		display: flex;
		justify-content: space-between;
	}

	.id {
		color: var(--typo-lighter);
		span {
			font-size: 1.1rem;
			font-weight: 600;
			color: var(--typo);
		}
	}

	.date {
		color: var(--typo-lighter);
	}

	.name {
		color: var(--typo-light);
		margin: 0.5em 0;
	}

	.price {
		font-size: 1.5rem;
		font-weight: 700;
	}

	.cta {
		display: none;
	}

	@media (min-width: 850px) {
		display: flex;
		align-items: center;
		justify-content: space-between;

		.id {
			margin-right: auto;
		}

		.date {
			margin-right: auto;
		}

		.wrapper-1,
		.wrapper-2 {
			justify-content: space-around;
			flex-grow: 1;
		}

		.wrapper-3 {
			display: flex;
			align-items: center;
			justify-content: space-around;
			flex-grow: 2;
		}

		.cta {
			display: block;
			font-size: 21px;
			margin-left: 1em;
			margin-top: 7px;
			color: var(--primary);
		}
	}
`;

export const InvoiceListItem = ({ invoice }) => {
	const history = useHistory();

	const clickHandler = () => {
		history.push(`/invoice/${invoice.id}`);
	};

	return (
		<StyledInvoiceListItem onClick={clickHandler}>
			<div className="wrapper wrapper-1">
				<p className="id">
					#<span>{invoice.key}</span>
				</p>
				<p className="date">Due {toDateInputValue(invoice.terms.paymentDue)}</p>
			</div>
			<div className="wrapper wrapper-2">
				<div className="wrapper-3">
					<p className="name">{invoice.to.clientName}</p>
					<p className="price">$ {invoice.total}</p>
				</div>
				<InvoiceStatus status={invoice.status} />
			</div>
			<div className="cta">
				<RiArrowRightSLine />
			</div>
		</StyledInvoiceListItem>
	);
};
