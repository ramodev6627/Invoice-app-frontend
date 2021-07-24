import React from 'react';
import styled from 'styled-components';
import { ProfileWidget } from '../other/ProfileWidget';
import logo from '../images/main-logo.png';
import { useSelector } from 'react-redux';

const StyledHeader = styled.header`
	background: var(--primary);
	color: var(--white);
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
	background: var(--white);
	width: 100%;
	height: 60px;
`;

export const Header = () => {
	const user = useSelector((state) => state.auth.user);

	if (!user) {
		return <EmptyHeader />;
	}

	return (
		<StyledHeader>
			<img className="logo" src={logo} alt="invoice app" />
			<ProfileWidget />
		</StyledHeader>
	);
};
