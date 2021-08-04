import axios from 'axios';
import styled from 'styled-components';

const StyledInvoiceForm = styled.div`
	.container {
		max-width: 800px;
		margin-top: 2em;
		margin-bottom: 2em;
	}

	h1 {
		color: ${(props) => props.theme.typo};
		font-size: 1.5rem;
		margin-top: 1em;
	}

	.from,
	.to {
		margin: 3em 0;
	}

	.title {
		margin: 1em 0;
		color: ${(props) => props.theme.primary};
		font-weight: 700;
	}

	.item-list {
		margin-top: 3em;

		ul {
			list-style-type: none;
		}
	}

	.add-item {
		display: flex;
		align-items: center;
		padding: 0.7em;
		border: 0;
		border-radius: 40px;
		font-size: 0.9rem;
		font-weight: 600;
		color: ${(props) => props.theme.white};
		background: #7c5dff;
		margin-top: 1em;
		transition: opacity 0.1s ease-in;

		:hover {
			opacity: 0.9;
		}

		svg {
			margin-right: 5px;
			font-size: 1.1rem;
		}
	}

	.footer {
		margin-top: 1.5em;
		display: flex;
		align-items: center;
		justify-content: flex-end;

		button {
			font-size: 0.9rem;
			font-weight: 600;
			padding: 0.8em 1.7em;
			border-radius: 40px;
			margin-left: 1em;
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
			align-items: baseline;
			justify-content: space-between;

			.input-container + .input-container {
				margin-left: 1em;
			}
		}
	}
`;

let toDateInputValue = (date) => {
	let local = date ? new Date(date) : new Date();
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
	invoiceItems: [
		{
			itemName: '',
			qty: '',
			price: '',
		},
	],
	key: '',
	id: null,
	userId: '',
	status: 'PENDING',
};

const validate = (val) => {
	let errors = {};

	if (!val.from.streetAddress) {
		if (!('from' in errors)) {
			errors.from = {};
		}
		errors.from.streetAddress = 'This Field is required';
	}

	if (!val.from.city) {
		if (!('from' in errors)) {
			errors.from = {};
		}
		errors.from.city = 'This Field is required';
	}

	if (!val.from.postCode) {
		if (!('from' in errors)) {
			errors.from = {};
		}
		errors.from.postCode = 'This Field is required';
	} else if (isNaN(val.from.postCode)) {
		if (!('from' in errors)) {
			errors.from = {};
		}
		errors.from.postCode = 'Post Code MUST be a Number';
	}

	if (!val.from.country) {
		if (!('from' in errors)) {
			errors.from = {};
		}
		errors.from.country = 'This Field is required';
	}

	if (!val.to.clientName) {
		if (!('to' in errors)) {
			errors.to = {};
		}
		errors.to.clientName = 'This Field is required';
	}

	if (!val.to.clientEmail) {
		if (!('to' in errors)) {
			errors.to = {};
		}
		errors.to.clientEmail = 'This Field is required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val.to.clientEmail)) {
		if (!('to' in errors)) {
			errors.to = {};
		}
		errors.to.clientEmail = 'Invalid email address';
	}

	if (!val.to.streetAddress) {
		if (!('to' in errors)) {
			errors.to = {};
		}
		errors.to.streetAddress = 'This Field is required';
	}

	if (!val.to.city) {
		if (!('to' in errors)) {
			errors.to = {};
		}
		errors.to.city = 'This Field is required';
	}

	if (!val.to.postCode) {
		if (!('to' in errors)) {
			errors.to = {};
		}
		errors.to.postCode = 'This Field is required';
	} else if (isNaN(val.to.postCode)) {
		if (!('to' in errors)) {
			errors.to = {};
		}
		errors.to.postCode = 'Post Code MUST be a Number';
	}

	if (!val.to.country) {
		if (!('to' in errors)) {
			errors.to = {};
		}
		errors.to.country = 'This Field is required';
	}

	if (!val.terms.invoiceDate) {
		if (!('terms' in errors)) {
			errors.terms = {};
		}
		errors.terms.invoiceDate = 'This Field is required';
	}
	if (!val.terms.paymentDue) {
		if (!('terms' in errors)) {
			errors.terms = {};
		}
		errors.terms.paymentDue = 'This Field is required';
	}

	if (!val.description) {
		errors.description = 'This Field is required';
	}

	return errors;
};

const validateItemName = (val) => {
	let error;
	if (!val) {
		error = 'name is required';
	}
	return error;
};

const validateItemQty = (val) => {
	let error;
	if (!val) {
		error = 'Qty is Required';
	} else if (isNaN(val)) {
		error = 'Qty MUST be a Number';
	}
	return error;
};

const validateItemPrice = (val) => {
	let error;
	if (!val) {
		error = 'Price is Required';
	} else if (isNaN(val)) {
		error = 'Price MUST be a Number';
	}
	return error;
};

const createInvoice = async (val, jwt) => {
	try {
		let res = await axios({
			method: 'POST',
			url: 'https://zeneoinvoices.herokuapp.com/invoices',
			data: val,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${jwt}`,
			},
		});
		return await res.data;
	} catch (err) {
		return Promise.reject(err);
	}
};

const editInvoice = async (payload, jwt) => {
	try {
		let res = await axios({
			method: 'PUT',
			url: 'https://zeneoinvoices.herokuapp.com/invoices',
			data: payload,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${jwt}`,
			},
		});
		return await res.data;
	} catch (err) {
		return Promise.reject(err);
	}
};

export {
	initialValues,
	StyledInvoiceForm,
	toDateInputValue,
	validate,
	validateItemName,
	validateItemQty,
	validateItemPrice,
	createInvoice,
	editInvoice,
};
