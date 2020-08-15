import styled, { css } from 'styled-components';
import { RiGroupLine, RiBuilding4Line, RiMap2Line, RiMailLine, RiLinksLine } from 'react-icons/ri';
export const Container = styled.div``;

export const Flex = styled.div``;

export const Avatar = styled.img``;

export const Column = styled.div``;

export const Row = styled.div``;

const iconCSS = css`
	width: 1.8rem;
	height: 1.8rem;
	fill: var(--icon);
	flex-shrink: 0;
`;

export const PeopleIcon = styled(RiGroupLine)`${iconCSS}`;

export const CompanyIcon = styled(RiBuilding4Line)`${iconCSS}`;

export const LocationIcon = styled(RiMap2Line)`${iconCSS}`;

export const EmailIcon = styled(RiMailLine)`${iconCSS}`;

export const BlogIcon = styled(RiLinksLine)`${iconCSS}`;
