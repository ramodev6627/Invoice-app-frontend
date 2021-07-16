import React from 'react';
import styled from 'styled-components';
import { Field, FieldArray, Form, Formik } from 'formik';
import { TextInput } from '../core/TextInput';
import { TextArea } from '../core/TextArea';
import { MdDelete } from 'react-icons/md';

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

	.input-container {
		label {
			margin: 0.5em 0;
			display: block;
			color: var(--typo-lighter);
		}
	}

	.date-picker {
		font-size: 1.1rem;
		width: 100%;
		outline: none;
		padding: 0.5em;
		border-radius: 4px;
		border: 1px solid #e1e1e1;
	}

	.item-list {
		margin-top: 3em;
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

const StyledInvoiceFormItem = styled.li``;

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
		clienName: '',
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
			total: '',
		},
	],
	status: '',
};

export const InvoiceCreateView = () => {
	return (
		<StyledInvoiceCreateView>
			<div className="container">
				<h1>New Invoice</h1>
				<Formik
					initialValues={initialValues}
					onSubmit={(val) => {
						console.log(val);
					}}
				>
					{({ values }) => (
						<Form>
							<div className="from">
								<p className="title">Bill From</p>
								<div className="input-container">
									<label htmlFor="from.streetAddress">Street Address</label>
									<Field name="from.streetAddress" component={TextInput} />
								</div>
								<div className="wrapper">
									<div className="input-container">
										<label htmlFor="from.city">City</label>
										<Field name="from.city" component={TextInput} />
									</div>
									<div className="input-container">
										<label htmlFor="from.postCode">Post Code</label>
										<Field name="from.postCode" component={TextInput} />
									</div>
									<div className="input-container">
										<label htmlFor="from.country">Country</label>
										<Field name="from.country" component={TextInput} />
									</div>
								</div>
							</div>
							<div className="to">
								<p className="title">Bill To</p>
								<div className="input-container">
									<label htmlFor="to.clientName">Client's Name</label>
									<Field name="to.clientName" component={TextInput} />
								</div>
								<div className="input-container">
									<label htmlFor="to.clientEmail">Client's Email</label>
									<Field name="to.clientEmail" component={TextInput} />
								</div>
								<div className="input-container">
									<label htmlFor="to.streetAddress">Street Address</label>
									<Field name="to.streetAddress" component={TextInput} />
								</div>
								<div className="wrapper">
									<div className="input-container">
										<label htmlFor="to.city">City</label>
										<Field name="to.city" component={TextInput} />
									</div>
									<div className="input-container">
										<label htmlFor="to.postCode">Post Code</label>
										<Field name="to.postCode" component={TextInput} />
									</div>
									<div className="input-container">
										<label htmlFor="to.country">Country</label>
										<Field name="to.country" component={TextInput} />
									</div>
								</div>
							</div>
							<div className="terms">
								<div className="input-container">
									<label htmlFor="terms.invoiceDate">Invoice Date</label>
									<Field name="terms.invoiceDate" type="date" className="date-picker" />
								</div>
								<div className="input-container">
									<label htmlFor="terms.paymentDue">Payment Due</label>
									<Field name="terms.paymentDue" type="date" className="date-picker" />
								</div>
							</div>
							<div className="description input-container">
								<label htmlFor="description">Description</label>
								<Field name="description" component={TextArea} rows={4} />
							</div>
							<div className="item-list">
								<p className="title">Item List</p>
								<FieldArray name="itemList">
									{({ remove, push }) => (
										<ul>
											{values.itemList.length > 0 &&
												values.itemList.map((item, index) => {
													return (
														<StyledInvoiceFormItem>
															<div className="name">
																<Field name={`itemList.${index}.itemName`} component={TextInput} />
															</div>
															<div className="qty">
																<Field name={`itemList.${index}.qty`} component={TextInput} />
															</div>
															<div className="price">
																<Field name={`itemList.${index}.price`} component={TextInput} />
															</div>
															<p className="total">{item.total}</p>
															<div className="delete">
																<button>
																	<MdDelete />
																</button>
															</div>
														</StyledInvoiceFormItem>
													);
												})}
										</ul>
									)}
								</FieldArray>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</StyledInvoiceCreateView>
	);
};
