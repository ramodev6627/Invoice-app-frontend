import { Field } from 'formik';
import React from 'react';
import styled from 'styled-components';
import { TextInput } from '../core/TextInput';
import { MdDelete } from 'react-icons/md';
import { validateItemName, validateItemPrice, validateItemQty } from './InvoiceFormHelpers';
import { useSelector } from 'react-redux';

const StyledInvoiceFormItem = styled.li`
	.col {
		margin-bottom: 1em;

		label {
			display: block;
			margin-bottom: 0.3em;
		}

		input,
		p {
			display: flex;
			align-items: center;
			height: 38px;
			font-size: 1.1rem;

			&.error {
				font-size: 0.8rem;
				color: #f72a2a;
			}
		}
	}

	.delete {
		button {
			cursor: pointer;
			background: 0;
			border: 0;
			width: 22px;
			align-self: flex-end;

			svg {
				font-size: 21px;
				display: block;
				transition: color 0.1s ease-in;
				color: ${(props) => props.theme.primaryDark};
			}
			:hover {
				svg {
					color: ${(props) => props.theme.primary};
				}
			}
		}
	}

	@media (min-width: 600px) {
		display: flex;
		justify-content: space-between;
		align-items: baseline;

		.col + .col {
			margin-left: 1em;
		}

		.col {
			width: 10%;
			display: flex;
			flex-direction: column;
			justify-content: center;

			label {
				height: 22px;
			}
		}
		.price,
		.qty {
			flex-grow: 3;
		}

		.name {
			flex-grow: 15;
		}

		.delete {
			width: 7%;

			button {
				padding: 12px 0;
			}
		}
	}
`;

export const InvoiceFormItem = ({ index, item, remove, touched, errors, onBlur }) => {
	const currentTheme = useSelector((state) => state.theme.current);
	const theme = useSelector((state) => state.theme[currentTheme]);
	return (
		<StyledInvoiceFormItem theme={theme}>
			<div className=" col name">
				<label htmlFor={`invoiceItems.${index}.itemName`}>Item Name</label>

				<Field
					name={`invoiceItems.${index}.itemName`}
					validate={validateItemName}
					component={TextInput}
					onBlur={onBlur}
				/>

				{touched.invoiceItems &&
					touched.invoiceItems[index] &&
					touched.invoiceItems[index].itemName &&
					errors.invoiceItems &&
					errors.invoiceItems[index] &&
					errors.invoiceItems[index].itemName && (
						<p className="error">{errors.invoiceItems[index].itemName}</p>
					)}
			</div>
			<div className=" col qty">
				<label htmlFor={`invoiceItems.${index}.qty`}>Qty.</label>

				<Field
					name={`invoiceItems.${index}.qty`}
					validate={validateItemQty}
					component={TextInput}
				/>
				{touched.invoiceItems &&
					touched.invoiceItems[index] &&
					touched.invoiceItems[index].qty &&
					errors.invoiceItems &&
					errors.invoiceItems[index] &&
					errors.invoiceItems[index].qty && (
						<p className="error">{errors.invoiceItems[index].qty}</p>
					)}
			</div>
			<div className=" col price">
				<label htmlFor={`invoiceItems.${index}.price`}>Price</label>

				<Field
					name={`invoiceItems.${index}.price`}
					validate={validateItemPrice}
					component={TextInput}
				/>
				{touched.invoiceItems &&
					touched.invoiceItems[index] &&
					touched.invoiceItems[index].price &&
					errors.invoiceItems &&
					errors.invoiceItems[index] &&
					errors.invoiceItems[index].price && (
						<p className="error">{errors.invoiceItems[index].price}</p>
					)}
			</div>
			<div className="col total">
				<label htmlFor="total">Total</label>

				<p id="total">{item.price * item.qty}</p>
			</div>
			<div className=" col delete">
				<label></label>
				<button type="button" onClick={() => remove(index)}>
					<MdDelete />
				</button>
			</div>
		</StyledInvoiceFormItem>
	);
};
