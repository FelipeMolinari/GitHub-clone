import React, { useState, FormEvent } from 'react';

import { Container, SearchForm, GitHubLogo } from './styles';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Header: React.FC = () => {
	const [ search, setSearch ] = useState('');
	const navigate = useNavigate();
	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		navigate('/' + search.toLowerCase().trim());
	};
	return (
		<Container>
			<GitHubLogo />
			<SearchForm onSubmit={handleSubmit}>
				<input
					placeholder="Enter a username or Repo"
					value={search}
					onChange={(e) => setSearch(e.currentTarget.value)}
				/>
			</SearchForm>
		</Container>
	);
};

export default Header;
