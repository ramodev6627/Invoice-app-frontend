import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../core/Button';
import { InvoiceStatus } from '../../core/InvoiceStatus';

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

export const InvoiceViewHeader = () => {
	return (
		<StyledInvoiceViewHeader>
			<div className="status">
				<p className="title">Status</p>
				<InvoiceStatus status="pending" />
			</div>
			<div className="cta">
				<Link to="/invoice/id/edit">Edit</Link>
				<Button text="Delete" className="red rounded margin-left" />
				<Button text="Mark as Paid" className="rounded margin-left" />
			</div>
		</StyledInvoiceViewHeader>
	);
};
