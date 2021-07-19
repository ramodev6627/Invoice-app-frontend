import { Field } from 'formik';
import React from 'react';
import styled from 'styled-components';
import { TextInput } from '../core/TextInput';
import { MdDelete } from 'react-icons/md';

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
				color: var(--primary-dark);
			}
			:hover {
				svg {
					color: var(--primary);
				}
			}
		}
	}

	@media (min-width: 600px) {
		display: flex;
		align-items: center;
		justify-content: space-between;

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
		}
	}
`;

export const InvoiceFormItem = ({ index, item, remove }) => {
	return (
		<StyledInvoiceFormItem>
			<div className=" col name">
				<label htmlFor={`itemList.${index}.itemName`}>Item Name</label>

				<Field name={`itemList.${index}.itemName`} component={TextInput} />
			</div>
			<div className=" col qty">
				<label htmlFor={`itemList.${index}.qty`}>Qty.</label>

				<Field name={`itemList.${index}.qty`} component={TextInput} />
			</div>
			<div className=" col price">
				<label htmlFor={`itemList.${index}.price`}>Price</label>

				<Field name={`itemList.${index}.price`} component={TextInput} />
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
