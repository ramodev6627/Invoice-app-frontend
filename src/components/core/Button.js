import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	padding: 0.7em 0.9em;
	border-radius: 4px;
	border: 0;
	background: var(--primary);
	color: #fff;
	font-size: 0.8rem;
	font-weight: 700;
	transition: opacity 0.1s ease-in;

	:hover {
		opacity: 0.8;
	}

	&.icon {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;

		svg {
			font-size: 22px;
			font-weight: 500;
			margin-top: 2px;
			margin-left: 1px;
		}
	}
`;

export const Button = ({ text, type, children, handleClick }) => {
	if (type === 'icon') {
		return (
			<StyledButton className="icon" onClick={handleClick}>
				{children}
			</StyledButton>
		);
	}
	return (
		<StyledButton type={type} onClick={handleClick}>
			{text}
		</StyledButton>
	);
};

Button.defaultProps = {
	text: 'Click Me',
	type: 'button',
};
