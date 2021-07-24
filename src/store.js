import { configureStore } from '@reduxjs/toolkit';
import authReducer from './components/auth/AuthSlice';

export default configureStore({
	reducer: {
		auth: authReducer,
	},
});
