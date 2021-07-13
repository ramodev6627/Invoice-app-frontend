import React from 'react';
import styled from 'styled-components';
import { RiArrowRightSLine } from 'react-icons/ri';

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

	.state {
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

		&.paid {
			color: var(--green);
			background: var(--green-light);
			span {
				background-color: var(--green);
			}
		}
		&.pending {
			color: var(--orange);
			background: var(--orange-light);
			span {
				background-color: var(--orange);
			}
		}
		&.draft {
			color: var(--dark);
			background: var(--dark-light);
			span {
				background-color: var(--dark);
			}
		}
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
			color: var(--primary-dark);
		}
	}
`;

export const InvoiceListItem = () => {
	return (
		<StyledInvoiceListItem>
			<div className="wrapper wrapper-1">
				<p className="id">
					#<span>RT3080</span>
				</p>
				<p className="date">Due 19 Aug 2021</p>
			</div>
			<div className="wrapper wrapper-2">
				<div className="wrapper-3">
					<p className="name">Jensen Rosvelt</p>
					<p className="price">$ 1,800.90</p>
				</div>
				<div className="state paid">
					<span></span>
					<p>Paid</p>
				</div>
			</div>
			<div className="cta">
				<RiArrowRightSLine />
			</div>
		</StyledInvoiceListItem>
	);
};
