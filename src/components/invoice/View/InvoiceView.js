import React, { useEffect } from 'react';
import { InvoiceViewHeader } from './InvoiceViewHeader';
import { InvoiceViewItem } from './InvoiceViewItem';
import { InvoiceViewFooter } from './InvoiceViewFooter';
import { BackButton } from '../../core/BackButton';
import { StyledInvoiceView } from './InvoiceViewHelpers';
import { fetchInvoice } from '../InvoiceSlice';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toDateInputValue } from '../InvoiceFormHelpers';

export const InvoiceView = () => {
	const match = useRouteMatch();
	const jwt = useSelector((state) => state.auth.jwt);
	const invoice = useSelector((state) => state.invoice.invoice);
	const dispatch = useDispatch();

	useEffect(() => {
		let payload = { id: match.params.invoiceId, jwt };
		dispatch(fetchInvoice(payload));
	}, [match.params.invoiceId, jwt, dispatch]);

	if (!invoice) {
		return null;
	}

	let invoiceTotal = 0;
	invoice.invoiceItems.forEach((el) => {
		invoiceTotal += el.qty * el.price;
	});

	return (
		<StyledInvoiceView>
			<BackButton />
			<InvoiceViewHeader status={invoice.status} invoiceId={invoice.id} />
			<div className="container">
				<div className="info">
					<div className="parent-wrapper">
						<div className="wrapper">
							<p className="id">
								#<span>{invoice.key}</span>
							</p>
							<p className="title">{toDateInputValue(invoice.terms.invoiceDate)}</p>
						</div>
						<div className="wrapper">
							<p className="address">{invoice.from.streetAddress}</p>
							<p className="city">{invoice.from.city}</p>
							<p className="postal">{invoice.from.postCode}</p>
							<p className="country">{invoice.from.country}</p>
						</div>
					</div>
					<div className="parent-wrapper">
						<div className="invoice">
							<div className="dates">
								<div className="date">
									<p>Invoice Date</p>
									<p className="strong">{toDateInputValue(invoice.terms.invoiceDate)}</p>
								</div>
								<div className="due">
									<p>Payment Due</p>
									<p className="strong">{toDateInputValue(invoice.terms.paymentDue)}</p>
								</div>
							</div>
							<div className="bill-to">
								<p>Bill To</p>
								<p className="strong">{invoice.to.clientName}</p>
								<p className="address">{invoice.to.streetAddress}</p>
								<p className="city">{invoice.to.city}</p>
								<p className="postal">{invoice.to.postCode}</p>
								<p className="country">{invoice.to.country}</p>
							</div>
						</div>
						<div className="client">
							<p>Sent To</p>
							<p className="strong">{invoice.to.clientEmail}</p>
						</div>
					</div>
				</div>
				<ul className="list">
					<InvoiceViewItem className="head" />
					{invoice.invoiceItems &&
						invoice.invoiceItems.length > 0 &&
						invoice.invoiceItems.map((item, index) => <InvoiceViewItem key={index} item={item} />)}
				</ul>
				<InvoiceViewFooter total={invoiceTotal} />
			</div>
		</StyledInvoiceView>
	);
};
