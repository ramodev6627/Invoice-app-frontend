import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

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
	},
});

export const { setInvoice, setInvoiceList } = invoiceSlice.actions;

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

export const fetchInvoiceList = (jwt) => async (dispatch) => {
	try {
		let res = await axios({
			method: 'GET',
			url: `https://zeneoinvoices.herokuapp.com/invoices`,
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

export default invoiceSlice.reducer;
