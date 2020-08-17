import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin: 2.4rem 3.2rem;
`;
export const GithubLogo = styled(FaGithub)`
  fill: var(--border);
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
  margin-top: 2.5rem;
`;
export const Line = styled.div`
	max-width: 1280px;
	width: 100%;
	border-top: 1px solid var(--border);
`;
