import { configureStore } from '@reduxjs/toolkit';
import authReducer from './components/auth/AuthSlice';
import InvoiceReducer from './components/invoice/InvoiceSlice';

export default configureStore({
	reducer: {
		auth: authReducer,
		invoice: InvoiceReducer,
	},
});
