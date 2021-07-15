import React from 'react';
import styled from 'styled-components';
import { RiMoreLine } from 'react-icons/ri';
import { Button } from '../Button';

const StyledPaginationEmpty = styled.div`
	button {
		border-radius: 40px;
		width: 36px;
		height: 36px;
		cursor: context-menu;
	}
`;

export const PaginationEmpty = () => {
	return (
		<StyledPaginationEmpty>
			<Button type="icon">
				<RiMoreLine />
			</Button>
		</StyledPaginationEmpty>
	);
};
