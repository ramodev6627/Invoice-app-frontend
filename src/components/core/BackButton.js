import React from 'react';
import styled from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const StyledBackButton = styled.button`
	background: 0;
	border: 0;
	display: flex;
	justify-content: space-between;
	width: 100px;
	padding: 0.8em 0;

	svg {
		color: ${(props) => props.theme.primary};
	}

	p {
		color: ${(props) => props.theme.typo};
		font-size: 1rem;
		font-weight: 600;
		line-height: 1;
	}

	:hover {
		opacity: 0.8;
	}
`;

export const BackButton = () => {
	const currentTheme = useSelector((state) => state.theme.current);
	const theme = useSelector((state) => state.theme[currentTheme]);
	const history = useHistory();

	return (
		<StyledBackButton theme={theme} onClick={() => history.goBack()}>
			<FaChevronLeft />
			<p>Go back</p>
		</StyledBackButton>
	);
};
