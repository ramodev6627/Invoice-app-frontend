import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { switchTheme } from './ThemeSlice';
import { FcFlashOn, FcNightLandscape } from 'react-icons/fc';

const StyledThemeSwitcher = styled.button`
	position: relative;
	background: #272830ad;
	width: 70px;
	height: 35px;
	border: 0;
	border-radius: 50px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	svg {
		margin: 0px 0.2em 1px;
		font-size: 23px;
	}

	.circle {
		background-color: ${(props) => props.theme.white};
		border: 3px solid #423972;
		width: calc(100% / 2);
		position: absolute;
		top: 0;
		bottom: 0;
		transition: all 0.1s ease-in;
		border-radius: 50%;
		left: 0;

		&.dark {
			transform: translateX(100%);
		}
	}

	:hover {
		.circle {
			background-color: #d5d3dc;
		}
	}
`;

export const ThemeSwitcher = ({ className }) => {
	const dispatch = useDispatch();
	const currentTheme = useSelector((state) => state.theme.current);
	const theme = useSelector((state) => state.theme[currentTheme]);

	return (
		<StyledThemeSwitcher
			className={className}
			theme={theme}
			onClick={() => dispatch(switchTheme())}
		>
			<FcNightLandscape />
			<FcFlashOn />
			<div className={`circle ${currentTheme}`}></div>
		</StyledThemeSwitcher>
	);
};
