import styled from 'styled-components';
import { RiBookMarkLine } from 'react-icons/ri';

export const Container = styled.div`
	--horizontalPadding: 1.6rem;
	--verticalPadding: 2.4rem;
	padding: var(--verticalPadding) var(--horizontalPadding);
	overflow: hidden;
	width: 100vw;
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
export const CalendarHeading = styled.span`
	font-size: 1.6rem;
	margin: 3.6rem 0 0.9rem;
	display: inline-flex;
`;

export const RepoIcon = styled(RiBookMarkLine)`
	width: 1.6rem;
	height: 1.6rem;
	margin-right: 0.4rem;
`;
export const Tab = styled.div`
	background: var(--primary);

	.content {
		display: flex;
		align-items: center;
		width: min-content;
		padding: 1.4rem 1.6rem;
		border-bottom: 2px solid var(--orange);

		.label {
			font-size: 1.4rem;
			padding: 0 0.7rem;
			font-weight: 600;
		}
		.number {
			font-size: 1.2rem;
			background: var(--ticker);
			padding: 0.2rem 0.6rem;
			border-radius: 2.4rem;
		}
	}
	.line {
		display: flex;
		width: 150vw;
		margin-left: -50vw;

		border-bottom: 1px solid var(--border);
	}
	&.mobile {
		margin-top: var(--verticalPadding);

		.content {
			margin: 0 auto;
		}

		@media (min-width: 768px) {
			display: none;
		}
	}
	&.desktop {
		display: none;
		@media (min-width: 768px) {
			display: unset;
			.wrapper {
				display: flex;
				margin: 0 auto;
				max-width: 1280px;
				.offset {
					width: 25%;
					margin-right: var(--horizontalPadding);
				}
			}
		}
	}
`;
