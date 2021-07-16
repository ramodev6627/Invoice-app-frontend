import React from 'react';
import styled from 'styled-components';

const StyledAuthField = styled.div`
	margin: 1em 0;

	label {
		text-transform: capitalize;
	}

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
`;

export const AuthField = ({ type, formik }) => {
	return (
		<StyledAuthField>
			<label htmlFor={type}>{type}</label>
			<input
				id={type}
				name={type}
				type={type}
				value={formik.values[type]}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				className={formik.touched[type] && (formik.errors[type] ? 'error' : 'correct')}
			/>
			{formik.touched[type] && formik.errors[type] && (
				<p className="error">{formik.errors[type]}</p>
			)}
		</StyledAuthField>
	);
};
