import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { IoIosAddCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const StyledHomeHeader = styled.div`
	color: var(--typo);
	margin-top: 1.7em;

	.header,
	.filter {
		margin: 1em 0;
	}

	.header p {
		color: var(--typo-lighter);
	}

	.filter {
		position: relative;

		button {
			padding: 0.5em 1em 0.5em 0;
			background: 0;
			border: 0;
			display: flex;
			align-items: center;

			span {
				font-size: 1rem;
				font-weight: 700;
			}
			svg {
				margin-left: 0.7em;
				color: var(--primary);
			}
		}
	}

	.dropdown {
		list-style-type: none;
		position: absolute;
		color: var(--typo-light);
		background: #fff;
		width: 100%;
		max-width: 300px;
		padding: 0.5em;
		font-size: 0.9rem;
		border-radius: 5px;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
		z-index: 2;

		li {
			padding: 0.5em 0.8em;
			display: flex;
			align-items: center;
			cursor: pointer;

			:hover {
				opacity: 0.7;
			}

			span {
				margin-left: 0.5em;
			}
		}

		.divider {
			height: 1px;
			width: 100%;
			background: #f0f0f775;
		}
	}

	.button {
		text-decoration: none;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.7em 0.9em;
		border-radius: 30px;
		border: 0;
		background: var(--primary);
		color: #fff;
		font-size: 0.95rem;
		font-family: 'Nanum Gothic', sans-serif;
		font-weight: 700;
		transition: opacity 0.1s ease-in;
		cursor: pointer;
		max-width: 160px;

		svg {
			margin-right: 0.3em;
			font-size: 32px;
			color: #fff;
			background: var(--primary);
		}

		:hover {
			opacity: 0.8;
		}
	}

	@media (min-width: 600px) {
		display: flex;
		align-items: center;

		.filter {
			margin-left: auto;
			margin-right: 2em;
		}
	}
`;

export const HomeHeader = ({ className, totalPages, totalInvoices, filterClick }) => {
	const [showDropDown, setShowDropDown] = useState(false);
	const filter = useSelector((state) => state.invoice.invoiceListFilter);

	return (
		<StyledHomeHeader className={className}>
			<div className="header">
				<h1>Invoices</h1>
				<p>
					{totalInvoices} Invoices, {totalPages} page.
				</p>
			</div>
			<div className="filter">
				<button onClick={() => setShowDropDown((prev) => !prev)}>
					<span>Filter By {filter ? filter : 'Status'}</span>
					{showDropDown ? <FaChevronUp /> : <FaChevronDown />}
				</button>
				{showDropDown && (
					<ul className="dropdown">
						<li
							onClick={() => {
								filterClick('Paid');
								setShowDropDown(false);
							}}
						>
							<span>Paid</span>
						</li>
						<div className="divider"></div>
						<li
							onClick={() => {
								filterClick('Pending');
								setShowDropDown(false);
							}}
						>
							<span>Pending</span>
						</li>
						<div className="divider"></div>
						<li
							onClick={() => {
								filterClick(null);
								setShowDropDown(false);
							}}
						>
							<span>None</span>
						</li>
					</ul>
				)}
			</div>
			<Link to="/invoice/create" className="button">
				<IoIosAddCircle />
				<span>New Invoice</span>
			</Link>
		</StyledHomeHeader>
	);
};
