import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../core/Button';
import { useFormik } from 'formik';
import { AuthField } from './AuthField';
import {
	validateLogin,
	validateSignup,
	loginInitialValues,
	signupInitialValues,
} from './AuthHelpers';
import { useDispatch, useSelector } from 'react-redux';
import { login, signup } from './AuthSlice';

const StyledAuth = styled.div`
	color: ${(props) => props.theme.typo};

	.dimensions {
		width: 100%;
		max-width: 300px;
		margin: 0 auto;
	}

	h1 {
		font-size: 1.5rem;
	}

	.footer {
		display: flex;
		justify-content: space-between;
		margin-top: 1em;
	}
`;

export const Auth = () => {
	const currentTheme = useSelector((state) => state.theme.current);
	const theme = useSelector((state) => state.theme[currentTheme]);
	const location = useLocation();
	let loginView = location.pathname === '/login' ? true : false;
	const dispatch = useDispatch();
	const [authLoading, setAuthLoading] = useState(false);

	const formik = useFormik({
		initialValues: loginView ? loginInitialValues : signupInitialValues,
		onSubmit: (val) => {
			setAuthLoading(true);
			if (loginView) {
				//login
				dispatch(login(val)).catch((err) => {
					console.log(err);
					setAuthLoading(false);
				});
			} else {
				//signup
				dispatch(signup(val)).catch((err) => {
					console.log(err);
					setAuthLoading(false);
				});
			}
		},
		validate: loginView ? validateLogin : validateSignup,
	});

	return (
		<StyledAuth theme={theme}>
			<div className="container">
				<h1 className="dimensions">{loginView ? 'Login' : 'Sign Up'}</h1>

				<form onSubmit={formik.handleSubmit} className="dimensions">
					<AuthField type="email" formik={formik} />
					{!loginView && <AuthField formik={formik} type="username" />}
					<AuthField type="password" formik={formik} />
					<Button type="submit" text={loginView ? 'Login' : 'Sign Up'} loading={authLoading} />
				</form>
				<div className="footer dimensions">
					<p>{loginView ? 'No account?' : 'Already have an acount?'}</p>
					<Link to={loginView ? '/signup' : '/login'}>{loginView ? 'Sign Up' : 'Login'}</Link>
				</div>
			</div>
		</StyledAuth>
	);
};
