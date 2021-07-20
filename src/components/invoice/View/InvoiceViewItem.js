import React from 'react';
import styled from 'styled-components';

const StyledInvoiceViewItem = styled.li`
	&.head {
		display: none;
	}

	&.row {
		margin: 1em 0.2em;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;

		.price,
		.qty {
			grid-column: 1/2;
			grid-row: 2/3;

			span {
				margin-left: 1em;
			}
		}

		.price {
			margin-left: 3em;
		}

		.total {
			grid-column: 2/3;
			grid-row: 1/3;
			justify-self: end;
			align-self: center;
		}
	}

	.strong {
		font-size: 0.9rem;
	}

	@media (min-width: 700px) {
		&.head,
		&.row {
			display: grid;
			grid-template-columns: 5fr 1fr 2fr 2fr;
			grid-template-rows: 1fr;
			align-items: center;

			.price,
			.qty,
			.total {
				grid-row: unset;
				grid-column: unset;
				margin: unset;
				justify-self: center;

				span {
					display: none;
				}
			}
			.total {
				justify-self: end;
			}
		}
	}
`;

export const InvoiceViewItem = ({ className }) => {
	if (className === 'head') {
		return (
			<StyledInvoiceViewItem className={className}>
				<p className="name">Item Name</p>
				<p className="qty">Qty</p>
				<p className="price">Price</p>
				<p className="total">Total</p>
			</StyledInvoiceViewItem>
		);
	}

	return (
		<StyledInvoiceViewItem className={className}>
			<p className="name strong">Banner Design</p>
			<p className="qty">
				2 <span>x</span>
			</p>
			<p className="price">120 $</p>
			<p className="total strong">240 $</p>
		</StyledInvoiceViewItem>
	);
};

InvoiceViewItem.defaultProps = {
	className: 'row',
};
