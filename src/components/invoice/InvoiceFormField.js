import React from 'react';
import { Field } from 'formik';
import { TextInput } from '../core/TextInput';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useState } from 'react';

const StyledInvoiceFormField = styled.div`
	label {
		margin: 0.5em 0;
		display: block;
		color: var(--typo-lighter);
	}

	.date-picker {
		font-size: 1.1rem;
		width: 100%;
		outline: none;
		padding: 0.5em;
		border-radius: 4px;
		border: 1px solid #e1e1e1;
	}
	.description {
		height: 150px;
	}

	.error {
		color: #f72a2a;
	}
`;

export const InvoiceFormField = ({
	formikValue,
	label,
	type,
	className,
	component,
	errors,
	touched,
	onBlur,
}) => {
	const [errorMessage, setErrorMessage] = useState(null);
	const [touchedState, setTouchedState] = useState(null);

	useEffect(() => {
		let nestedKeys = formikValue.split('.');
		if (Object.keys(errors).length > 0) {
			if (nestedKeys.length === 1) {
				if (typeof errors[formikValue] !== 'undefined') {
					setErrorMessage(errors[formikValue]);
				} else {
					setErrorMessage(null);
				}
			} else if (nestedKeys.length === 2 && Object.keys(errors).length >= 1) {
				if (
					typeof errors[nestedKeys[0]] !== 'undefined' &&
					typeof errors[nestedKeys[0]][nestedKeys[1]] !== 'undefined'
				) {
					setErrorMessage(errors[nestedKeys[0]][nestedKeys[1]]);
				} else {
					setErrorMessage(null);
				}
			}
		} else {
			setErrorMessage(null);
		}
	}, [errors, formikValue]);

	useEffect(() => {
		let nestedKeys = formikValue.split('.');
		if (Object.keys(touched).length > 0) {
			if (nestedKeys.length === 1) {
				if (typeof touched[formikValue] !== 'undefined') {
					setTouchedState(touched[formikValue]);
				}
			} else if (nestedKeys.length === 2) {
				if (
					typeof touched[nestedKeys[0]] !== 'undefined' &&
					typeof touched[nestedKeys[0]][nestedKeys[1]] !== 'undefined'
				) {
					setTouchedState(touched[nestedKeys[0]][nestedKeys[1]]);
				}
			}
		}
	}, [touched, formikValue]);

	return (
		<StyledInvoiceFormField className="input-container">
			<label htmlFor={formikValue}>{label}</label>
			<Field
				name={formikValue}
				type={type}
				onBlur={onBlur}
				className={`${className} ${touchedState && (errorMessage ? 'error' : '')}`}
				component={component}
			/>
			{touchedState && errorMessage && <p className="error">{errorMessage}</p>}
		</StyledInvoiceFormField>
	);
};

InvoiceFormField.defaultProps = {
	type: 'text',
	component: TextInput,
};
