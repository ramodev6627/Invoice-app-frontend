import styled from 'styled-components';

export const StyledInvoiceView = styled.div`
	max-width: 1000px;
	width: 95%;
	margin: 1em auto;

	.container {
		max-width: 1000px;
		margin: 2em 0;
		width: 100%;
		color: ${(props) => props.theme.typoLighter};
	}

	.id {
		color: ${(props) => props.theme.typoLighter};
		span {
			font-size: 1.1rem;
			font-weight: 600;
			color: ${(props) => props.theme.typo};
		}
	}

	.strong {
		font-size: 1rem;
		font-weight: 600;
		color: ${(props) => props.theme.typo};
	}

	.wrapper,
	.invoice,
	.client {
		margin-bottom: 3em;

		p {
			line-height: 1.8;
		}
	}

	.invoice {
		display: flex;
		justify-content: space-between;
	}

	.dates {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.description {
		p {
			margin-bottom: 1.8em;
			font-size: 15px;
		}
	}

	.list {
		list-style-type: none;
		padding: 1em;
		background: ${(props) => props.theme.background};
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
	}

	@media (min-width: 700px) {
		.parent-wrapper {
			display: flex;
			justify-content: space-between;
		}

		.invoice {
			flex-grow: 4;
		}

		.bill-to {
			margin: 0 auto;
		}

		.client {
			margin-right: 10em;
		}
	}
`;
