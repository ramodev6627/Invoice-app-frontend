import React from 'react';
import styled from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

const StyledBackButton = styled.button`
	background: 0;
	border: 0;
	display: flex;
	justify-content: space-between;
	width: 100px;
	padding: 0.8em 0;

	svg {
		color: var(--primary);
	}

	p {
		color: var(--typo);
		font-size: 1rem;
		font-weight: 600;
		line-height: 1;
	}

	:hover {
		opacity: 0.8;
	}
`;

export const BackButton = () => {
	const history = useHistory();

	return (
		<StyledBackButton onClick={() => history.goBack()}>
			<FaChevronLeft />
			<p>Go back</p>
		</StyledBackButton>
	);
};
