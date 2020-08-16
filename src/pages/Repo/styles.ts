import styled, { css } from 'styled-components';
import { RiBookmarkLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
export const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1.6rem;
	> p {
		font-size: 1.6rem;
	}
`;

export const Breadcrumb = styled.div`
	margin-bottom: 1.6rem;
	display: flex;
	align-items: center;
	flex-wrap: nowrap;
	white-space: nowrap;
	font-size: 1.8rem;
	> a {
		color: var(--link);
		text-decoration: none;
		&:hover,
		&:focus {
			text-decoration: underline;
		}
		&.username {
			margin-left: 0.8rem;
		}
		&.reponame {
			font-weight: 600;
		}
	}
	> span {
		padding: 0 0.5rem;
	}
`;

const iconCSS = css`
	width: 1.6rem;
	height: 1.6rem;
	fill: var(--icon);
	flex-shrink: 0;
`;

export const LinkButton = styled.a`
	margin-top: 2.4rem;
	background: var(--gray-dark);
	padding: 1.2rem 1.7rem;
	border-radius: 2.4rem;
	display: flex;
	align-items: center;
	width: max-content;
	> span {
		color: var(--primary);
	}
	> svg {
		fill: var(--primary);
		margin-right: 1.0rem;
	}
`;

export const Stats = styled.ul`
	margin-top: 1.6rem;
	display: flex;
	align-items: center;
	> li {
		display: flex;
		align-items: center;
		margin-right: 0.9rem;
		> * {
			margin-right: 0.7rem;
			color: var(--gray);
		}
	}
`;

export const RepoIcon = styled(RiBookmarkLine)`${iconCSS}`;

export const StarIcon = styled(RiStarLine)`${iconCSS}`;

export const ForkIcon = styled(AiOutlineFork)`${iconCSS}`;

export const GithubIcon = styled(FaGithub)`${iconCSS}`;
