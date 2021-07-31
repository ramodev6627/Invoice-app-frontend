import React, { useEffect, useState } from 'react';
import { FieldArray, Form, Formik } from 'formik';
import { TextArea } from '../core/TextArea';
import { Button } from '../core/Button';
import { InvoiceFormField } from './InvoiceFormField';
import { InvoiceFormItem } from './InvoiceFormItem';
import {
	createInvoice,
	editInvoice,
	initialValues,
	StyledInvoiceForm,
	validate,
} from './InvoiceFormHelpers';
import { BackButton } from '../core/BackButton';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInvoice } from './InvoiceSlice';

export const InvoiceForm = () => {
	const match = useRouteMatch();
	const history = useHistory();
	const jwt = useSelector((state) => state.auth.jwt);
	const user = useSelector((state) => state.auth.user);
	const invoice = useSelector((state) => state.invoice.invoice);
	const dispatch = useDispatch();
	const [valuesToEdit, setValuesToEdit] = useState(initialValues);
	const [valuesSet, setValuesSet] = useState(false);
	let editView = match.path === '/invoice/:invoiceId/edit' ? true : false;

	useEffect(() => {
		if (editView) {
			dispatch(fetchInvoice({ id: match.params.invoiceId, jwt }));
		}
		// eslint-disable-next-line
	}, [editView]);

	if (!valuesSet && editView && invoice && match.params.invoiceId === invoice.id) {
		setValuesSet(true);
		setValuesToEdit(invoice);
	}

	const submitHandler = async (val) => {
		if (editView) {
			//edit the invoice
			try {
				let payload = { ...val, id: match.params.invoiceId, userId: user.id };
				let response = await editInvoice(payload, jwt);
				history.push(`/invoice/${response.id}`);
			} catch (err) {
				console.log(err);
			}
		} else {
			//create new invoice
			try {
				let response = await createInvoice(val, jwt);
				console.log(response);
				history.push(`/invoice/${response.id}`);
			} catch (err) {
				console.log(err);
			}
		}
	};

	if (editView && !invoice) {
		return null;
	}

	return (
		<StyledInvoiceForm>
			<div className="container">
				<BackButton />
				<h1>{editView ? 'Edit Invoice' : 'New Invoice'}</h1>
				<Formik initialValues={valuesToEdit} onSubmit={submitHandler} validate={validate}>
					{({ values, errors, touched, handleBlur }) => (
						<Form>
							<div className="from">
								<p className="title">Bill From</p>
								<InvoiceFormField
									errors={errors}
									touched={touched}
									onBlur={handleBlur}
									formikValue="from.streetAddress"
									label="Street Address"
								/>
								<div className="wrapper">
									<InvoiceFormField
										onBlur={handleBlur}
										errors={errors}
										touched={touched}
										formikValue="from.city"
										label="City"
									/>
									<InvoiceFormField
										onBlur={handleBlur}
										errors={errors}
										touched={touched}
										formikValue="from.postCode"
										label="Post Code"
									/>
									<InvoiceFormField
										onBlur={handleBlur}
										errors={errors}
										touched={touched}
										formikValue="from.country"
										label="Country"
									/>
								</div>
							</div>
							<div className="to">
								<p className="title">Bill To</p>
								<InvoiceFormField
									onBlur={handleBlur}
									errors={errors}
									touched={touched}
									formikValue="to.clientName"
									label="Client's Name"
								/>
								<InvoiceFormField
									onBlur={handleBlur}
									errors={errors}
									touched={touched}
									formikValue="to.clientEmail"
									label="Client's Email"
								/>
								<InvoiceFormField
									onBlur={handleBlur}
									errors={errors}
									touched={touched}
									formikValue="to.streetAddress"
									label="Street Address"
								/>
								<div className="wrapper">
									<InvoiceFormField
										onBlur={handleBlur}
										errors={errors}
										touched={touched}
										formikValue="to.city"
										label="City"
									/>
									<InvoiceFormField
										onBlur={handleBlur}
										errors={errors}
										touched={touched}
										formikValue="to.postCode"
										label="Post Code"
									/>
									<InvoiceFormField
										onBlur={handleBlur}
										errors={errors}
										touched={touched}
										formikValue="to.country"
										label="Country"
									/>
								</div>
							</div>
							<div className="terms">
								<InvoiceFormField
									onBlur={handleBlur}
									errors={errors}
									touched={touched}
									formikValue="terms.invoiceDate"
									type="date"
									className="date-picker"
									label="Invoice Date"
								/>
								<InvoiceFormField
									onBlur={handleBlur}
									errors={errors}
									touched={touched}
									formikValue="terms.paymentDue"
									type="date"
									className="date-picker"
									label="Payment Due"
								/>
							</div>
							<InvoiceFormField
								onBlur={handleBlur}
								errors={errors}
								touched={touched}
								formikValue="description"
								label="Description"
								component={TextArea}
								className="description"
							/>

							<div className="item-list">
								<p className="title">Item List</p>
								<FieldArray name="invoiceItems">
									{({ remove, push }) => (
										<>
											<ul>
												{values.invoiceItems.length > 0 &&
													values.invoiceItems.map((item, index) => {
														return (
															<InvoiceFormItem
																onBlur={handleBlur}
																errors={errors}
																touched={touched}
																key={index}
																item={item}
																index={index}
																remove={remove}
															/>
														);
													})}
											</ul>
											<button
												className="add-item"
												type="button"
												onClick={() =>
													push({
														itemName: '',
														qty: '',
														price: '',
													})
												}
											>
												+ Add New Item
											</button>
										</>
									)}
								</FieldArray>
							</div>
							<div className="footer">
								<Button type="submit" text="Submit" />
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</StyledInvoiceForm>
	);
};
