import React from 'react';
import styled from 'styled-components';

const StyledPagination = styled.footer``;

export const Pagination = ({ className }) => {
	return (
		<StyledPagination className={className}>
			<div>1</div>
			<div>2</div>
			<div>3</div>
		</StyledPagination>
	);
};
