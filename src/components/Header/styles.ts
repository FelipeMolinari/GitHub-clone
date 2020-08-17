import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
export const Container = styled.header`
	width: 100vw;
	padding: 1.4rem 1.8rem;
	display: flex;
	align-items: center;
	background: var(--header);
`;
export const GitHubLogo = styled(FaGithub)`
fill: var(--logo);
flex-shrink: 0;
width: 3.8rem;
height:3.8rem;
cursor: pointer;
&:hover{
	opacity: 0.7;
}

`;
export const SearchForm = styled.form`
	width: 100%;
	padding-left: 1.6rem;
	input {
		background: var(--search);
		border-radius: 0.8rem;
		padding: 1.2rem 1.6rem;
		width: 100%;
		border: none;
		color: var(--form-on-hover);

		&:focus {
			background: var(--form-on-hover);
			color: var(--header);
			width: 30rem;
		}
		transition: width 0.2s ease-out, color 0.2s ease-out;
	}
`;
