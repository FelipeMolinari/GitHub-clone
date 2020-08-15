import React from 'react';

import { Container, SearchForm, GitHubLogo } from './styles';

const Profile: React.FC = () => {
  return (<Container>
    <GitHubLogo />
    <SearchForm>
      <input placeholder="Enter a username or Repo"/>
    </SearchForm>
  </Container>);
} 

export default Profile;