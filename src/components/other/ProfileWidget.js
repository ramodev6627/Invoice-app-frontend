import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCaretDown, FaCaretUp, FaSignOutAlt } from 'react-icons/fa';
import profilePic from '../images/pexels-pixabay-220453.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../auth/AuthSlice';
import { useHistory } from 'react-router-dom';
import { clearState } from '../invoice/InvoiceSlice';
import { MdPlayArrow } from 'react-icons/md';

const StyledProfileWidget = styled.div`
	position: relative;

	.user {
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: space-between;

		img {
			width: 40px;
			clip-path: circle();
			display: block;
		}

		p {
			margin: 0 0.3em 0 0.6em;
			font-weight: 600;
			line-height: 1;
		}

		svg {
			font-size: 16px;
		}
	}

	.dropdown {
		list-style-type: none;
		position: absolute;
		color: ${(props) => props.theme.typoLight};
		background: ${(props) => props.theme.backgroundVariant};
		width: 100%;
		padding: 0.5em;
		font-size: 0.9rem;
		border-radius: 5px;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

		li {
			padding: 0.5em 0.8em;
			display: flex;
			align-items: center;
			cursor: pointer;

			span {
				margin-left: 0.5em;
			}
		}

		.arrow {
			position: absolute;
			font-size: 30px;
			top: -17px;
			transform: rotate(270deg) scaleY(150%);
			right: 14px;
			color: ${(props) => props.theme.backgroundVariant};
		}

		.divider {
			height: 1px;
			width: 100%;
			background: #f0f0f775;
		}
	}
`;

export const ProfileWidget = () => {
	const currentTheme = useSelector((state) => state.theme.current);
	const theme = useSelector((state) => state.theme[currentTheme]);
	const history = useHistory();
	const [showDropDown, setShowDropDown] = useState(false);
	const dispatch = useDispatch();
	const user = useSelector((state) => state.auth.user);

	return (
		<StyledProfileWidget theme={theme}>
			<div className="user" onClick={() => setShowDropDown((prev) => !prev)}>
				<img src={profilePic} alt="Not me" />
				<p>{user.username}</p>
				{showDropDown ? <FaCaretUp /> : <FaCaretDown />}
			</div>
			{showDropDown && (
				<ul className="dropdown">
					<MdPlayArrow className="arrow" />
					<li
						onClick={() => {
							dispatch(logout());
							dispatch(clearState());
							history.push('/login');
						}}
					>
						<FaSignOutAlt />
						<span>Logout</span>
					</li>
				</ul>
			)}
		</StyledProfileWidget>
	);
};
