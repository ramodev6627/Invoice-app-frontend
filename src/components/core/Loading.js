import React from 'react';
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
		border: 2px solid var(--primary);
		border-color: var(--primary) transparent var(--primary) transparent;
		animation: ${ldsDualRing} 0.5s linear infinite;
	}
`;

export const Loading = () => {
	return <StyledLoading></StyledLoading>;
};
