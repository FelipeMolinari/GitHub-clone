import React from 'react';

import { Container, Breadcrumb, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon } from './styles';
import { Link } from 'react-router-dom';
const Repo: React.FC = () => {
	return (
		<Container>
			<Breadcrumb>
				<RepoIcon />
				<Link className={'username'} to={'/FelipeMolinari'}>
					FelipeMolinari
				</Link>
				<span>/</span>
				<Link className="reponame" to={'./FelipeMolinari/GitHub-clone'}>
					GitHub-clone
				</Link>
			</Breadcrumb>
			<p>The new gitHub</p>
			<Stats>
				<li>
					<StarIcon />
					<b>9</b>
					<span>stars</span>
				</li>
				<li>
					<ForkIcon /> <b>12</b>
					<span>forks</span>
				</li>
			</Stats>

			<LinkButton href={'https:/github.com/FelipeMolinari/GitHub-clone/'}>
				<GithubIcon />
				<span>View on GitHub</span>
			</LinkButton>
		</Container>
	);
};

export default Repo;
