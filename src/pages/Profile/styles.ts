import styled from 'styled-components';

export const Container = styled.div`
	--horizontalPadding: 1.6rem;
	--verticalPadding: 2.4rem;
	padding: var(--verticalPadding) var(--horizontalPadding);
`;
export const Main = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	max-width: 1216px;
	@media (min-width: 768px) {
		flex-direction: row;
		padding: 1.2rem;
	}
`;
export const LeftSide = styled.div`
	padding: 0 var(--horizontalPadding);
	@media (min-width: 768px) {
		width: 25%;
	}
`;
export const RightSide = styled.div`
	padding: 0 var(--horizontalPadding);

	@media (min-width: 768px) {
		width: 75%;
	}
`;
export const Repos = styled.div`
	margin-top: var(--verticalPadding);

	> h2 {
		font-size: 1.6rem;
		font-weight: normal;
	}
	> div {
		margin-top: 0.8rem;
		display: grid;
		grid-gap: 1.6rem;
		grid-template-columns: 1fr;

		@media (min-width: 768px) {
			grid-template-columns: 1fr 1fr;
			grid-auto-rows: minmax(min-content, max-content);
		}
	}
`;
