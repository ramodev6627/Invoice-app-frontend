import styled from 'styled-components';
import { Button } from '../Button';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { NavLink, useHistory, useParams } from 'react-router-dom';

const StyledPaginationButton = styled.div`
	button {
		border-radius: 40px;
		width: 36px;
		height: 36px;

		&.icon svg {
			font-size: 17px;
		}
	}

	&.left button svg {
		margin-left: -1px;
	}

	&.right button svg {
		margin-left: 3px;
	}
`;

const StyledPaginationLink = styled.li`
	a {
		text-decoration: none;
		color: #fff;
		background: var(--primary);
		margin: 1em 0.5em;
		padding: 0.4em 0.8em;
		font-size: 0.9rem;
		font-weight: 500;
		border: 1px solid var(--primary);
		border-radius: 80px;
		cursor: pointer;
		width: 35px;
		height: 35px;
		display: flex;
		align-items: center;
		justify-content: center;

		:hover {
			opacity: 0.8;
		}

		&.active {
			background-color: transparent;
			color: var(--primary);
		}
	}
`;

export const PaginationButton = ({ value }) => {
	const { pageIndex } = useParams();
	const history = useHistory();

	const goForward = () => {
		history.push(`/invoices/${Number(pageIndex) + 1}`);
	};

	const goBackward = () => {
		history.push(`/invoices/${Number(pageIndex) - 1}`);
	};

	if (value === 'next') {
		return (
			<StyledPaginationButton className="right">
				<Button type="icon" handleClick={goForward}>
					<FaAngleRight />
				</Button>
			</StyledPaginationButton>
		);
	} else if (value === 'prev') {
		return (
			<StyledPaginationButton className="left">
				<Button type="icon" handleClick={goBackward}>
					<FaAngleLeft />
				</Button>
			</StyledPaginationButton>
		);
	} else {
		return (
			<StyledPaginationLink>
				<NavLink to={`/invoices/${value}`} activeClassName="active">
					{value}
				</NavLink>
			</StyledPaginationLink>
		);
	}
};
