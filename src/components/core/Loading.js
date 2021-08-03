import React from 'react';
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';

const ldsDualRing = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoading = styled.div`
	display: flex;
	margin: 15em auto 3em;
	justify-content: center;

	&:after {
		content: '';
		display: block;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		border: 2px solid ${(props) => props.theme.primary};
		border-color: ${(props) => props.theme.primary} transparent ${(props) => props.theme.primary}
			transparent;
		animation: ${ldsDualRing} 0.5s linear infinite;
	}
`;

export const Loading = () => {
	const currentTheme = useSelector((state) => state.theme.current);
	const theme = useSelector((state) => state.theme[currentTheme]);
	return <StyledLoading theme={theme}></StyledLoading>;
};
