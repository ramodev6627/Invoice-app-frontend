import React from 'react';
import styled from 'styled-components';
import { ProfileWidget } from '../other/ProfileWidget';
import logo from '../images/main-logo.png';

const StyledHeader = styled.header`
	background: var(--primary-dark);
	color: var(--white);
	padding: 0.2em 1.5em;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.logo {
		width: 30px;
	}
`;

export const Header = () => {
	return (
		<StyledHeader>
			<img className="logo" src={logo} alt="invoice app" />
			<ProfileWidget />
		</StyledHeader>
	);
};
