import React from 'react'
import Hero from '../components/Hero';
import HeroCard from '../components/HeroCard';
import JobsListings from '../components/JobsListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HeroCard />
      <JobsListings isHome={true} />
      <ViewAllJobs />
    </>
  )
}

export default HomePage