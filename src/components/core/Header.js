import React from 'react';
import styled from 'styled-components';
import { ProfileWidget } from '../other/ProfileWidget';
import logo from '../images/main-logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { switchTheme } from './ThemeSlice';

const StyledHeader = styled.header`
	background: ${(props) => props.theme.primary};
	color: ${(props) => props.theme.white};
	padding: 0.2em 1.5em;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: sticky;
	top: 0;
	z-index: 3;

	.logo {
		width: 30px;
	}
`;

const EmptyHeader = styled.header`
	background: ${(props) => props.theme.background};
	width: 100%;
	height: 60px;
`;

export const Header = () => {
	const user = useSelector((state) => state.auth.user);
	const currentTheme = useSelector((state) => state.theme.current);
	const theme = useSelector((state) => state.theme[currentTheme]);
	const dispatch = useDispatch();

	if (!user) {
		return <EmptyHeader />;
	}

	return (
		<StyledHeader theme={theme}>
			<Link to={'/'}>
				<img className="logo" src={logo} alt="invoice app" />
			</Link>
			<div className="theme-switch">
				<Button text="switch theme" handleClick={() => dispatch(switchTheme())} />
			</div>
			<ProfileWidget />
		</StyledHeader>
	);
};
