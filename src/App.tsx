import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Profile from './pages/Profile'
import Repo from './pages/Repo'
import Header from './components/Header'
import GlobalStyles from './styles/GlobalStyles'
function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Profile/>} />
          <Route path="/:username" element={<Profile/>} />
          <Route path="/:username/:reponame" element={<Repo/>} />
        </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
