import { configureStore } from '@reduxjs/toolkit';
import authReducer from './components/auth/AuthSlice';
import invoiceReducer from './components/invoice/InvoiceSlice';
import themeReducer from './components/core/ThemeSlice';

export default configureStore({
	reducer: {
		auth: authReducer,
		invoice: invoiceReducer,
		theme: themeReducer,
	},
});
