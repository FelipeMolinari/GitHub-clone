import React from 'react';

import { Container, Main, LeftSide, RightSide, Repos } from './styles';
import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';

const Profile: React.FC = () => {
	return (
		<Container>
			<Main>
				<LeftSide>
					<ProfileData
						username={'FelipeMolinari'}
						name={'Felipe Molinari'}
						avatarUrl={
							'https://avatars0.githubusercontent.com/u/44385529?s=460&u=c8a1d528513e46dce6a4bb1d689155fa18b5f1d4&v=4'
						}
						followers={887}
						following={7}
						company={'Minha casa'}
						location={'Belo Horizonte, Brazil'}
						email={'felipemolinari874@gmail.com'}
						blog={undefined}
					/>
				</LeftSide>
				<RightSide>
					<Repos>
						<h2>Random Repos</h2>
						<div>
							{[ 1, 2, 3, 4, 5, 6 ].map((n) => (
								<RepoCard
									key={n}
									username={'Felipe Molinari'}
									reponame={'git-hubclone'}
									description={'Contain a github clone better than the original one.'}
									language={n % 3 === 0 ? 'Javascript' : 'Typescript'}
									stars={100}
									forks={12}
								/>
							))}
						</div>
					</Repos>
				</RightSide>
			</Main>
		</Container>
	);
};

export default Profile;
