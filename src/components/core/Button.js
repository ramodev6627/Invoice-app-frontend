import React from 'react';
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';

const StyledButton = styled.button`
	padding: 0.7em 0.9em;
	border-radius: 4px;
	border: 0;
	background: ${(props) => props.theme.primary};
	color: #fff;
	font-size: 0.8rem;
	font-weight: 700;
	transition: all 0.1s ease-in;

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

	&.rounded {
		border-radius: 40px;
	}

	&.rounded.loading {
		height: 46px;
		width: 80px;
		padding: 0;
	}

	&.red {
		background-color: #fb5151;
	}
	&.gray {
		background-color: #eeeeee;
		color: ${(props) => props.theme.typoLight};
	}
	&.loading {
		padding: 0.5em 1.5em;
		display: flex;
		align-items: center;
		justify-content: center;
		align-self: stretch;
	}
`;

const ldsDualRing = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoading = styled.div`
	display: inline-block;

	&:after {
		content: '';
		display: block;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		border: 2px solid #fff;
		border-color: #fff transparent #fff transparent;
		animation: ${ldsDualRing} 0.5s linear infinite;
	}
`;

const Loading = () => <StyledLoading></StyledLoading>;

export const Button = ({ text, type, children, handleClick, className, loading }) => {
	const currentTheme = useSelector((state) => state.theme.current);
	const theme = useSelector((state) => state.theme[currentTheme]);

	if (type === 'icon') {
		return (
			<StyledButton
				theme={theme}
				className={`${className} icon ${loading && `loading`}`}
				onClick={handleClick}
			>
				{children}
				{loading && <Loading />}
			</StyledButton>
		);
	}
	return (
		<StyledButton
			theme={theme}
			type={type}
			className={`${className} ${loading && `loading`}`}
			onClick={handleClick}
		>
			{loading ? <Loading /> : text}
		</StyledButton>
	);
};

Button.defaultProps = {
	text: 'Click Me',
	type: 'button',
	loading: false,
};
