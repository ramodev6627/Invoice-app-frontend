import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../core/Button';
import { InvoiceStatus } from '../../core/InvoiceStatus';
import { deleteInvoice, updateInvoiceStatus } from '../InvoiceSlice';
import InvoiceDeleteModal from './InvoiceDeleteModal';

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

		button:not(.loading) {
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
	const history = useHistory();
	const [statusChangeLoading, setStatusChangeLoading] = useState(false);
	const [deleteLoading, setDeleteLoading] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);

	const changeStatus = (status) => {
		setStatusChangeLoading(true);
		dispatch(updateInvoiceStatus(jwt, invoiceId, status))
			.then(() => {
				setStatusChangeLoading(false);
			})
			.catch(console.log);
	};

	const deleteHandler = () => {
		setDeleteLoading(true);
		dispatch(deleteInvoice(jwt, invoiceId))
			.then(() => {
				history.push('/');
			})
			.catch((err) => {
				console.log(err);
				setDeleteLoading(false);
			});
	};

	return (
		<StyledInvoiceViewHeader>
			{deleteModal && (
				<InvoiceDeleteModal
					closeModal={() => setDeleteModal(false)}
					loading={deleteLoading}
					deleteHandler={deleteHandler}
				/>
			)}
			<div className="status">
				<p className="title">Status</p>
				<InvoiceStatus status={status} />
			</div>
			<div className="cta">
				<Link to={`/invoice/${invoiceId}/edit`}>Edit</Link>
				<Button
					text="Delete"
					className="red rounded margin-left"
					handleClick={() => setDeleteModal(true)}
				/>
				{status === 'PAID' ? (
					<Button
						text="Mark as Pending"
						handleClick={() => changeStatus('PENDING')}
						className="rounded margin-left"
						loading={statusChangeLoading}
					/>
				) : (
					<Button
						text="Mark as Paid"
						handleClick={() => changeStatus('PAID')}
						className="rounded margin-left"
						loading={statusChangeLoading}
					/>
				)}
			</div>
		</StyledInvoiceViewHeader>
	);
};
