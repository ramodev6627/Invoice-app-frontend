import styled from 'styled-components';

const StyledInvoiceCreateView = styled.div`
	.container {
		max-width: 800px;
		margin-top: 2em;
		margin-bottom: 2em;
	}

	h1 {
		color: var(--typo);
		font-size: 1.5rem;
	}

	.from,
	.to {
		margin: 3em 0;
	}

	.title {
		margin: 1em 0;
		color: var(--primary);
		font-weight: 700;
	}

	.item-list {
		margin-top: 3em;

		ul {
			list-style-type: none;
		}
	}

	.add-item {
		width: 100%;
		padding: 0.7em;
		border: 0;
		border-radius: 40px;
		font-size: 1.1rem;
		color: var(--white);
		background: #7c5dff;
		margin-top: 1em;
		transition: opacity 0.1s ease-in;

		:hover {
			opacity: 0.9;
		}
	}

	.footer {
		margin-top: 1.5em;

		button {
			font-size: 1.2rem;
			font-weight: 500;
			display: block;
			margin-left: auto;
			border-radius: 40px;
		}
	}

	@media (min-width: 500px) {
		.terms {
			display: flex;
			justify-content: space-between;

			.input-container {
				width: 40%;
			}
		}
	}

	@media (min-width: 700px) {
		.wrapper {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.input-container + .input-container {
				margin-left: 1em;
			}
		}
	}
`;

let toDateInputValue = () => {
	let local = new Date();
	local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
	return local.toJSON().slice(0, 10);
};

const initialValues = {
	from: {
		streetAddress: '',
		city: '',
		postCode: '',
		country: '',
	},
	to: {
		clientName: '',
		clientEmail: '',
		streetAddress: '',
		city: '',
		postCode: '',
		country: '',
	},
	terms: {
		invoiceDate: toDateInputValue(),
		paymentDue: toDateInputValue(),
	},
	description: '',
	itemList: [
		{
			itemName: '',
			qty: '',
			price: '',
		},
	],
	status: '',
};

export { initialValues, StyledInvoiceCreateView };
