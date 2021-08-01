import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toDateInputValue } from './InvoiceFormHelpers';

export const invoiceSlice = createSlice({
	name: 'invoice',
	initialState: {
		invoice: null,
		invoiceList: null,
		invoiceListInfo: null,
	},
	reducers: {
		setInvoice: (state, action) => {
			state.invoice = action.payload;
			state.invoice.terms.invoiceDate = toDateInputValue(state.invoice.terms.invoiceDate);
			state.invoice.terms.paymentDue = toDateInputValue(state.invoice.terms.paymentDue);
		},
		setInvoiceList: (state, action) => {
			action.payload.content.forEach((el) => {
				if (el.invoiceItems && el.invoiceItems.length > 0) {
					let total = 0;
					el.invoiceItems.forEach((element) => {
						total += element.qty * element.price;
					});
					el.total = total;
				}
			});
			state.invoiceList = action.payload.content;
			state.invoiceListInfo = action.payload;
		},
		clearState: (state) => {
			state.invoice = null;
			state.invoiceList = null;
			state.invoiceListInfo = null;
		},
	},
});

export const { setInvoice, setInvoiceList, clearState } = invoiceSlice.actions;

export const fetchInvoice = (payload) => async (dispatch) => {
	try {
		let res = await axios({
			method: 'GET',
			url: `https://zeneoinvoices.herokuapp.com/invoices/${payload.id}`,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${payload.jwt}`,
			},
		});
		dispatch(setInvoice(res.data));
	} catch (err) {
		console.log(err);
	}
};

export const fetchInvoiceList =
	(jwt, page = 0, size = 10) =>
	async (dispatch) => {
		try {
			let res = await axios({
				method: 'GET',
				url: `https://zeneoinvoices.herokuapp.com/invoices?page=${page}&size=${size}&sort=createdAt`,
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: `Bearer ${jwt}`,
				},
			});
			dispatch(setInvoiceList(res.data));
		} catch (err) {
			console.log(err);
		}
	};

export const updateInvoiceStatus = (jwt, invoiceId, status) => async (dispatch) => {
	try {
		let res = await axios({
			method: 'PUT',
			url: `https://zeneoinvoices.herokuapp.com/invoices/status/${invoiceId}/${status}`,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${jwt}`,
			},
		});
		dispatch(setInvoice(res.data));
	} catch (err) {
		console.log(err);
	}
};

export const deleteInvoice = (jwt, invoiceId) => async (dispatch) => {
	try {
		await axios({
			method: 'DELETE',
			url: `https://zeneoinvoices.herokuapp.com/invoices/${invoiceId}`,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${jwt}`,
			},
		});
		dispatch(clearState());
	} catch (err) {
		return Promise.reject(err);
	}
};

export default invoiceSlice.reducer;
