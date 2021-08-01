import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toDateInputValue } from './InvoiceFormHelpers';

export const invoiceSlice = createSlice({
	name: 'invoice',
	initialState: {
		invoice: null,
		invoiceList: null,
		invoiceListInfo: null,
		invoiceListFilter: null,
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
		changeInvoiceListFilter: (state, action) => {
			state.invoiceListFilter = action.payload;
		},
	},
});

export const { setInvoice, setInvoiceList, clearState, changeInvoiceListFilter } =
	invoiceSlice.actions;

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
		return Promise.reject(err);
	}
};

export const fetchInvoiceList =
	({ jwt, page, size, filter }) =>
	async (dispatch) => {
		let url = `https://zeneoinvoices.herokuapp.com/invoices?page=${page}&size=${size}&sort=createdAt&order=desc`;
		if (filter) {
			url = `https://zeneoinvoices.herokuapp.com/invoices?page=${page}&size=${size}&status=${filter.toUpperCase()}&sort=createdAt&order=desc`;
		}
		try {
			let res = await axios({
				method: 'GET',
				url,
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: `Bearer ${jwt}`,
				},
			});
			dispatch(setInvoiceList(res.data));
		} catch (err) {
			return Promise.reject(err);
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
