import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeroCard from './components/HeroCard';
import JobsListings from './components/JobsListings';
import ViewAllJobs from './components/ViewAllJobs';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroCard />
      <JobsListings />
      <ViewAllJobs />
    </>
  )
}

export default App