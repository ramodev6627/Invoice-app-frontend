import React from 'react';
import styled from 'styled-components';
import { ProfileWidget } from '../other/ProfileWidget';
import logo from '../images/main-logo.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThemeSwitcher } from './ThemeSwitcher';

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

	.theme-switcher {
		margin-left: auto;
		margin-right: 2em;
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

	if (!user) {
		return <EmptyHeader />;
	}

	return (
		<StyledHeader theme={theme}>
			<Link to={'/'}>
				<img className="logo" src={logo} alt="invoice app" />
			</Link>
			<ThemeSwitcher className="theme-switcher" />
			<ProfileWidget />
		</StyledHeader>
	);
};
