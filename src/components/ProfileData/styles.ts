import styled, { css } from 'styled-components';
import { RiGroupLine, RiBuilding4Line, RiMap2Line, RiMailLine, RiLinksLine } from 'react-icons/ri';
export const Container = styled.div``;

export const Flex = styled.div`
	display: flex;
	align-items: center;
	> div {
		margin-left: 1.8rem;
		> h1 {
			font-size: 2.4rem;
			line-height: 1.25;
			color: var(--gray-dark);
			font-weight: 600;
		}
		> h2 {
			font-size: 1.6rem;
			color: var(--username);
			font-weight: 300;
		}
	}
	@media (min-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
		> div {
			margin-left: 0;
			margin-top: 1.6rem;
		}
	}
`;

export const Avatar = styled.img`
	z-index: 1;
	width: 16%;
	border-radius: 50%;
	@media (min-width: 768px) {
		width: 100%;
		margin-top: -3.4rem;
	}
`;

export const Row = styled.ul`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	margin: 1rem 0rem;
	> li {
		display: flex;
		align-items: center;
		> span {
			font-size: 1.2rem;
			color: var(--gray);
		}
		> * {
			margin-right: 0.4rem;
		}
		> b {
			font-size: 1.2rem;
		}
	}
`;
export const Column = styled.ul`
	li {
		display: flex;
		align-items: center;
		font-size: 1.4rem;
	}
	li + li {
		margin-top: 0.6rem;
	}
	span {
		margin-left: 0.5rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;

const iconCSS = css`
	width: 1.2rem;
	height: 1.2rem;
	fill: var(--icon);
	flex-shrink: 0;
`;

export const PeopleIcon = styled(RiGroupLine)`${iconCSS}`;

export const CompanyIcon = styled(RiBuilding4Line)`${iconCSS}`;

export const LocationIcon = styled(RiMap2Line)`${iconCSS}`;

export const EmailIcon = styled(RiMailLine)`${iconCSS}`;

export const BlogIcon = styled(RiLinksLine)`${iconCSS}`;
