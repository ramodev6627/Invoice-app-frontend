import React from 'react';
import { Field } from 'formik';
import { TextInput } from '../core/TextInput';
import styled from 'styled-components';

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
`;

export const InvoiceFormField = ({ formikValue, label, type, className, component }) => {
	return (
		<StyledInvoiceFormField className="input-container">
			<label htmlFor={formikValue}>{label}</label>
			<Field name={formikValue} type={type} className={className} component={component} />
		</StyledInvoiceFormField>
	);
};

InvoiceFormField.defaultProps = {
	type: 'text',
	component: TextInput,
};
