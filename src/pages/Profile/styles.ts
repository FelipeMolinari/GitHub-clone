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
export const LeftSide = styled.div`@media (min-width: 768px) {width: 20%;}`;
export const RightSide = styled.div`@media (min-width: 768px) {width: 80%;}`;
