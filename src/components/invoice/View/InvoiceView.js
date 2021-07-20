import React from 'react';
import styled from 'styled-components';
import { InvoiceViewHeader } from './InvoiceViewHeader';
import { InvoiceViewItem } from './InvoiceViewItem';
import { InvoiceViewFooter } from './InvoiceViewFooter';
import { BackButton } from '../../core/BackButton';

const StyledInvoiceView = styled.div`
	max-width: 1000px;
	width: 95%;
	margin: 1em auto;

	.container {
		max-width: 1000px;
		margin: 4em 0;
		width: 100%;
		color: var(--typo-lighter);
	}

	.id {
		color: var(--typo-lighter);
		span {
			font-size: 1.1rem;
			font-weight: 600;
			color: var(--typo);
		}
	}

	.strong {
		font-size: 1.1rem;
		font-weight: 600;
		color: var(--typo);
	}

	.wrapper,
	.invoice,
	.client {
		margin-bottom: 3em;

		p {
			line-height: 1.8;
		}
	}

	.invoice {
		display: flex;
		justify-content: space-between;
	}

	.dates {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.list {
		list-style-type: none;
		padding: 1em;
		background: var(--white);
	}

	@media (min-width: 700px) {
		.parent-wrapper {
			display: flex;
			justify-content: space-between;
		}

		.invoice {
			flex-grow: 4;
		}

		.bill-to {
			margin: 0 auto;
		}

		.client {
			margin-right: 10em;
		}
	}
`;

export const InvoiceView = () => {
	return (
		<StyledInvoiceView>
			<BackButton />
			<InvoiceViewHeader />
			<div className="container">
				<div className="info">
					<div className="parent-wrapper">
						<div className="wrapper">
							<p className="id">
								#<span>RT3080</span>
							</p>
							<p className="title">Graphic Design</p>
						</div>
						<div className="wrapper">
							<p className="address">1644 Driftwood Road</p>
							<p className="city">San Jose</p>
							<p className="postal">95131</p>
							<p className="country">UK</p>
						</div>
					</div>
					<div className="parent-wrapper">
						<div className="invoice">
							<div className="dates">
								<div className="date">
									<p>Invoice Date</p>
									<p className="strong">19-jul-21</p>
								</div>
								<div className="due">
									<p>Payment Due</p>
									<p className="strong">19-jul-21</p>
								</div>
							</div>
							<div className="bill-to">
								<p>Bill To</p>
								<p className="strong">Alex Grim</p>
								<p className="address">1644 Driftwood Road</p>
								<p className="city">San Jose</p>
								<p className="postal">95131</p>
								<p className="country">UK</p>
							</div>
						</div>
						<div className="client">
							<p>Sent To</p>
							<p className="strong">random13@mail.com</p>
						</div>
					</div>
				</div>
				<ul className="list">
					<InvoiceViewItem className="head" />
					<InvoiceViewItem />
					<InvoiceViewItem />
				</ul>
				<InvoiceViewFooter />
			</div>
		</StyledInvoiceView>
	);
};
