import React from 'react';
import { FieldArray, Form, Formik } from 'formik';
import { TextArea } from '../core/TextArea';
import { Button } from '../core/Button';
import { InvoiceFormField } from './InvoiceFormField';
import { InvoiceFormItem } from './InvoiceFormItem';
import { initialValues, StyledInvoiceForm } from './InvoiceHelpers';

export const InvoiceForm = ({ match }) => {
	let editView = match.path === '/invoice/:invoiceId/edit' ? true : false;

	const submitHandler = (val) => {
		if (editView) {
			//edit the invoice
			console.log(val);
		} else {
			//create new invoice
			console.log(val);
		}
	};

	// let valuesToEdit ; //values to pass to formik as initial values

	return (
		<StyledInvoiceForm>
			<div className="container">
				<h1>{editView ? 'Edit Invoice' : 'New Invoice'}</h1>
				<Formik initialValues={initialValues} onSubmit={submitHandler}>
					{({ values }) => (
						<Form>
							<div className="from">
								<p className="title">Bill From</p>
								<InvoiceFormField formikValue="from.streetAddress" label="Street Address" />
								<div className="wrapper">
									<InvoiceFormField formikValue="from.city" label="City" />
									<InvoiceFormField formikValue="from.postCode" label="Post Code" />
									<InvoiceFormField formikValue="from.country" label="Country" />
								</div>
							</div>
							<div className="to">
								<p className="title">Bill To</p>
								<InvoiceFormField formikValue="to.clientName" label="Client's Name" />
								<InvoiceFormField formikValue="to.clientEmail" label="Client's Email" />
								<InvoiceFormField formikValue="to.streetAddress" label="Street Address" />
								<div className="wrapper">
									<InvoiceFormField formikValue="to.city" label="City" />
									<InvoiceFormField formikValue="to.postCode" label="Post Code" />
									<InvoiceFormField formikValue="to.country" label="Country" />
								</div>
							</div>
							<div className="terms">
								<InvoiceFormField
									formikValue="terms.invoiceDate"
									type="date"
									className="date-picker"
									label="Invoice Date"
								/>
								<InvoiceFormField
									formikValue="terms.paymentDue"
									type="date"
									className="date-picker"
									label="Payment Due"
								/>
							</div>
							<InvoiceFormField
								formikValue="description"
								label="Description"
								component={TextArea}
								className="description"
							/>

							<div className="item-list">
								<p className="title">Item List</p>
								<FieldArray name="itemList">
									{({ remove, push }) => (
										<>
											<ul>
												{values.itemList.length > 0 &&
													values.itemList.map((item, index) => {
														return (
															<InvoiceFormItem
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
