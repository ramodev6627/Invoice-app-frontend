import React from 'react';
import styled from 'styled-components';

const StyledHomeHeader = styled.div``;

export const HomeHeader = ({ className }) => {
	return (
		<StyledHomeHeader className={className}>
			<div>Invoices info</div>
			<div>Filter drop down</div>
			<div>new invoice Button</div>
		</StyledHomeHeader>
	);
};
