import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../core/Button';
import { useFormik } from 'formik';

const StyledAuth = styled.div`
	.container {
		box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
		background-color: #fff;
		padding: 2em;
		margin: 5em auto;
		width: 95%;
		max-width: 600px;
	}

	.dimensions {
		width: 100%;
		max-width: 300px;
		margin: 0 auto;
	}

	h1 {
		font-size: 1.5rem;
		color: var(--typo);
	}

	form {
		.row {
			margin: 1em 0;

			input {
				display: block;
				margin-top: 0.5em;
				padding: 0.4em 0.7em;
				font-size: 0.9rem;
				font-weight: 600;
				letter-spacing: 0.032em;
				color: var(--typo);
				outline: 0;
				border: 1px solid #999aa185;
				border-radius: 5px;
				width: 100%;

				:focus {
					border-color: var(--primary);
				}

				&.error {
					border-color: #f72a2a;
					color: #f72a2a;
				}
				&.correct {
					border-color: #19982d;
					color: #19982d;
				}
			}

			.error {
				margin-top: 1em;
				color: #f72a2a;
			}
		}
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
					<div className="row">
						<label htmlFor="email">Email</label>
						<input
							id="email"
							name="email"
							type="text"
							value={formik.values.email}
							onBlur={formik.handleBlur}
							onChange={formik.handleChange}
							className={formik.touched.email && (formik.errors.email ? 'error' : 'correct')}
						/>
						{formik.touched.email && formik.errors.email && (
							<p className="error">{formik.errors.email}</p>
						)}
					</div>
					{!loginView && (
						<div className="row">
							<label htmlFor="username">Username</label>
							<input
								id="username"
								name="username"
								type="text"
								value={formik.values.username}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								className={
									formik.touched.username && (formik.errors.username ? 'error' : 'correct')
								}
							/>
							{formik.touched.username && formik.errors.username && (
								<p className="error">{formik.errors.username}</p>
							)}
						</div>
					)}
					<div className="row">
						<label htmlFor="password">Password</label>
						<input
							id="password"
							name="password"
							type="password"
							value={formik.values.password}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							className={formik.touched.password && (formik.errors.password ? 'error' : 'correct')}
						/>
						{formik.touched.password && formik.errors.password && (
							<p className="error">{formik.errors.password}</p>
						)}
					</div>
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
