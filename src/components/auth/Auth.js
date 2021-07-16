import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../core/Button';
import { useFormik } from 'formik';
import { AuthField } from './AuthField';

const StyledAuth = styled.div`
	.dimensions {
		width: 100%;
		max-width: 300px;
		margin: 0 auto;
	}

	h1 {
		font-size: 1.5rem;
		color: var(--typo);
	}

	.footer {
		display: flex;
		justify-content: space-between;
		margin-top: 1em;
	}
`;

const validate = (val) => {
	let errors = {};

	if (!val.email) {
		errors.email = 'Email is required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val.email)) {
		errors.email = 'Invalid email address';
	}

	if (!val.password) {
		errors.password = 'Password is required';
	} else if (val.password.length < 8) {
		errors.password = 'Password must be at least 8 characters';
	}

	if (!val.username) {
		errors.username = 'Username is required';
	}

	return errors;
};

export const Auth = () => {
	const location = useLocation();
	let loginView = location.pathname === '/login' ? true : false;

	const formik = useFormik({
		initialValues: {
			username: '',
			email: '',
			password: '',
		},
		onSubmit: (val) => {
			if (loginView) {
				//login
				console.log(val);
			} else {
				//signup
				console.log(val);
			}
		},
		validate,
	});

	return (
		<StyledAuth>
			<div className="container">
				<h1 className="dimensions">{loginView ? 'Login' : 'Sign Up'}</h1>

				<form onSubmit={formik.handleSubmit} className="dimensions">
					<AuthField type="email" formik={formik} />
					{!loginView && <AuthField formik={formik} type="username" />}
					<AuthField type="password" formik={formik} />
					<Button type="submit" text={loginView ? 'Login' : 'Sign Up'} />
				</form>
				<div className="footer dimensions">
					<p>{loginView ? 'No account?' : 'Already have an acount?'}</p>
					<Link to={loginView ? '/signup' : '/login'}>{loginView ? 'Sign Up' : 'Login'}</Link>
				</div>
			</div>
		</StyledAuth>
	);
};
