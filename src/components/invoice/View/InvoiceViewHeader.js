import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../core/Button';
import { InvoiceStatus } from '../../core/InvoiceStatus';
import { updateInvoiceStatus } from '../InvoiceSlice';

const StyledInvoiceViewHeader = styled.div`
	max-width: 1000px;
	margin-top: 1em;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
	background-color: #fff;
	padding: 2em;

	.status {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 1em;

		.title {
			color: var(--typo-lighter);
		}
	}

	.cta {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;

		button {
			font-size: 0.95rem;
			padding: 0.95em 1.7em;
			margin-top: 1em;
			display: block;
		}

		a {
			margin-top: 1em;
			text-decoration: none;
			color: var(--typo-lighter);

			:hover {
				text-decoration: underline;
			}
		}
	}

	@media (min-width: 700px) {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.status {
			margin: 0;
		}

		.margin-left {
			margin-left: 1em;
		}

		.title {
			margin-right: 2em;
		}

		.cta {
			flex-direction: row;
		}
	}
`;

export const InvoiceViewHeader = ({ status, invoiceId }) => {
	const dispatch = useDispatch();
	const jwt = useSelector((state) => state.auth.jwt);

	const clickHandler = (status) => {
		dispatch(updateInvoiceStatus(jwt, invoiceId, status));
	};

	return (
		<StyledInvoiceViewHeader>
			<div className="status">
				<p className="title">Status</p>
				<InvoiceStatus status={status} />
			</div>
			<div className="cta">
				<Link to="/invoice/id/edit">Edit</Link>
				<Button text="Delete" className="red rounded margin-left" />
				{status === 'PAID' ? (
					<Button
						text="Mark as Pending"
						handleClick={() => clickHandler('PENDING')}
						className="rounded margin-left"
					/>
				) : (
					<Button
						text="Mark as Paid"
						handleClick={() => clickHandler('PAID')}
						className="rounded margin-left"
					/>
				)}
			</div>
		</StyledInvoiceViewHeader>
	);
};
