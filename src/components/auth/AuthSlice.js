import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

let initialJwt = typeof window !== undefined ? JSON.parse(localStorage.getItem('jwt')) : null;

let decoded_jwt = !initialJwt ? null : jwt_decode(initialJwt);
let initialUser = !decoded_jwt
	? null
	: {
			username: decoded_jwt.username,
			email: decoded_jwt.email,
			id: decoded_jwt.sub,
	  };

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		jwt: initialJwt,
		user: initialUser,
	},
	reducers: {
		logout: (state) => {
			localStorage.removeItem('jwt');
			state.jwt = null;
			state.user = null;
		},
		authenticate: (state, action) => {
			let jwt = JSON.stringify(action.payload);
			localStorage.setItem('jwt', jwt);
			state.jwt = jwt;
			let decoded_jwt = jwt_decode(jwt);
			state.user = {
				username: decoded_jwt.username,
				email: decoded_jwt.email,
				id: decoded_jwt.sub,
			};
		},
	},
});

// Action creators are generated for each case reducer function
export const { logout, authenticate } = authSlice.actions;

// A thunk for async functions : takes any needed params and returns
// a function that has a dispatch method as a param, which is invoked at the end of it
// to call a an action.

export const signup = (payload) => async (dispatch) => {
	// async logic
	try {
		let res = await axios({
			method: 'post',
			url: 'https://zeneoinvoices.herokuapp.com/auth/register',
			data: payload,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		});

		dispatch(authenticate(res.headers.authorization));
	} catch (err) {
		console.log(err);
	}
};

export const login = (payload) => async (dispatch) => {
	try {
		let res = await axios({
			method: 'post',
			url: 'https://zeneoinvoices.herokuapp.com/auth/login',
			data: payload,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		});
		dispatch(authenticate(res.headers.authorization));
	} catch (err) {
		console.log(err);
	}
};

export default authSlice.reducer;
