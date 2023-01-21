import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout.jsx';
import Home from './components/home.jsx';
import Jobs from './components/Jobs.jsx';
import JobDetail from './components/jobDetail.jsx';
import JobApplication from './components/jobApplication.jsx';
import Submitted from './components/submitted.jsx';
import PostCV from './components/postCV.jsx';
import PostJob from './components/postJob.jsx';
import SignUp from './components/SignUp.jsx';
import Login from './components/Login.jsx';
import React, { useEffect } from 'react';
import axios from 'axios';
import SearchResults from './components/searchResults.jsx';
import JobAttributes from './components/attributes.jsx';
import EmpProfile from './components/empProfile.jsx';
import CmpProfile from './components/cmpProfile.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='cmp/dashboard' element={<Jobs />} />
          <Route path='emp/jobDetail/:id' element={<JobDetail />} />
          <Route path='jobapply/:jobId' element={<JobApplication />} />
          <Route path='emp/apply/' element={<Submitted />} />
          <Route path='postCV' element={<PostCV />} />
          <Route path='postJob' element={<PostJob />} />
          <Route path='signUp' element={<SignUp />} />
          <Route path='emp/signin' element={<Login />} />
          <Route path='emp/search' element={<SearchResults />} />
          <Route path='jobAttributes' element={<JobAttributes />} />
          <Route path='empProfile' element={<EmpProfile />} />
          <Route path='cmpProfile' element={<CmpProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
