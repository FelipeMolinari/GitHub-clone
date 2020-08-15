import React from 'react';

import { Container, Main, LeftSide, RightSide } from './styles';
import ProfileData from '../../components/ProfileData';

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
				<RightSide />
			</Main>
		</Container>
	);
};

export default Profile;
