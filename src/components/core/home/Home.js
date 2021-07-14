import React from 'react';
import styled from 'styled-components';
import { HomeHeader } from './HomeHeader';
import { InvoicesList } from './InvoicesList';
import ReactPaginate from 'react-paginate';
import { useHistory } from 'react-router';

const StyledHome = styled.div`
	width: 90%;
	max-width: 1100px;
	margin: 0 auto;

	.pagination {
		margin: 2em 0;
		list-style-type: none;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;

		.disabled {
			display: none;
		}

		a {
			text-decoration: none;
			color: #fff;
			background: var(--primary);
			display: block;
			margin: 1em 0.5em;
			padding: 0.4em 0.8em;
			font-size: 0.9rem;
			font-weight: 500;
			border: 1px solid var(--primary);
			border-radius: 6px;
			cursor: pointer;

			:hover {
				opacity: 0.8;
			}

			&.active {
				background-color: transparent;
				color: var(--primary);
			}
		}
	}

	.list {
		margin: 3em 0 1em;
	}

	.footer {
		padding-bottom: 2em;
	}
`;

export const Home = () => {
	const history = useHistory();

	return (
		<StyledHome>
			<HomeHeader className="header" />
			<ReactPaginate
				pageCount={30}
				pageRangeDisplayed={2}
				marginPagesDisplayed={1}
				onPageChange={(arg) => {
					history.push(`/invoices/${arg.selected}`);
				}}
				containerClassName="pagination"
				activeLinkClassName="active"
				disabledClassName="disabled"
			/>
			<InvoicesList className="list" />
		</StyledHome>
	);
};
