import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { PaginationButton } from './PaginationButton';
import { PaginationEmpty } from './PaginationEmpty';

const StyledPagination = styled.ul`
	list-style-type: none;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	margin-top: 4em;
`;

export const Pagination = ({ total }) => {
	const { pageIndex } = useParams();
	const pageId = Number(pageIndex);

	if (total > 6) {
		if (pageId < 5) {
			return (
				<StyledPagination>
					{Number(pageId) === 1 ? null : <PaginationButton value={'prev'} />}

					{[...new Array(5).keys()].map((elem) => {
						return <PaginationButton value={elem + 1} key={elem} />;
					})}
					<PaginationEmpty />
					<PaginationButton value={total} />

					<PaginationButton value={'next'} />
				</StyledPagination>
			);
		} else if (pageId > total - 3) {
			return (
				<StyledPagination>
					<PaginationButton value={'prev'} />
					<PaginationButton value={1} />
					<PaginationEmpty />

					<PaginationButton value={total - 2} />
					<PaginationButton value={total - 1} />
					<PaginationButton value={total} />
					{Number(pageId) === total ? null : <PaginationButton value={'next'} />}
				</StyledPagination>
			);
		} else {
			return (
				<StyledPagination>
					<PaginationButton value={'prev'} />
					<PaginationButton value={1} />
					<PaginationEmpty />

					<PaginationButton value={pageId - 1} />
					<PaginationButton value={pageId} />
					<PaginationButton value={pageId + 1} />
					<PaginationEmpty />
					<PaginationButton value={total} />
					{pageId === total ? null : <PaginationButton value={'next'} />}
				</StyledPagination>
			);
		}
	} else {
		return (
			<StyledPagination>
				{Number(pageId) === 1 ? null : <PaginationButton value={'prev'} />}

				{[...new Array(total).keys()].map((elem) => {
					return <PaginationButton value={elem + 1} key={elem} />;
				})}
				{pageId === total ? null : <PaginationButton value={'next'} />}
			</StyledPagination>
		);
	}
};
