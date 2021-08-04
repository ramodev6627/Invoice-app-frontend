import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import { Button } from '../../core/Button';

const StyledInvoiceDeleteModal = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 999999999999999;
	background: #00000080;
	overflow-y: scroll;
	display: flex;
	align-items: center;
	justify-content: center;

	.content {
		width: 90%;
		max-width: 500px;
		background: ${(props) => props.theme.background};
		border-radius: 5px;
		padding: 3em;

		p {
			font-size: 1.125rem;
			margin: 0.5em 0;
			text-align: center;
		}

		.buttons {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 2em;

			button {
				margin: 0 1em;
				font-size: 0.95rem;
			}
		}
	}
`;

const InvoiceDeleteModal = ({ closeModal, deleteHandler, loading, theme }) => {
	return ReactDom.createPortal(
		<StyledInvoiceDeleteModal theme={theme}>
			<div className={'content'}>
				<p>Please confirm that you want to DELETE this invoice!</p>
				<div className="buttons">
					<Button text="Cancel" handleClick={closeModal} />
					<Button text="Confirm" className="red" loading={loading} handleClick={deleteHandler} />
				</div>
			</div>
		</StyledInvoiceDeleteModal>,
		document.getElementById('portal')
	);
};

InvoiceDeleteModal.defaultProps = {
	closeModal: () => null,
	deleteHandler: () => null,
	loading: false,
};

export default InvoiceDeleteModal;
