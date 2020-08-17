import React, { useState, FormEvent } from 'react';

import { Container, SearchForm, GitHubLogo } from './styles';
import { useNavigate } from 'react-router-dom';
import { ThemeName } from '../../styles/GlobalStyles/themes';

interface ThemeProps {
	themeName: ThemeName;
	setThemeName: (newName: ThemeName) => void;
}
const Header: React.FC<ThemeProps> = ({ themeName, setThemeName }) => {
	const [ search, setSearch ] = useState('');
	const navigate = useNavigate();
	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		navigate('/' + search.toLowerCase().trim());
	};
	function toggleTheme() {
		setThemeName(themeName === 'light' ? 'dark' : 'light');
	}
	return (
		<Container>
			<GitHubLogo onClick={toggleTheme} />
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
