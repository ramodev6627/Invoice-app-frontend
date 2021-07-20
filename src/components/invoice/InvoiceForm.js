import React from 'react';
import { FieldArray, Form, Formik } from 'formik';
import { TextArea } from '../core/TextArea';
import { Button } from '../core/Button';
import { InvoiceFormField } from './InvoiceFormField';
import { InvoiceFormItem } from './InvoiceFormItem';
import { initialValues, StyledInvoiceForm, validate } from './InvoiceHelpers';
import { BackButton } from '../core/BackButton';

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
				<BackButton />
				<h1>{editView ? 'Edit Invoice' : 'New Invoice'}</h1>
				<Formik initialValues={initialValues} onSubmit={submitHandler} validate={validate}>
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
								<FieldArray name="itemList">
									{({ remove, push }) => (
										<>
											<ul>
												{values.itemList.length > 0 &&
													values.itemList.map((item, index) => {
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
