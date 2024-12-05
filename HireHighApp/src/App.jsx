import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'; 
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
      <Route index element={<HomePage />} />
    </Route>
  )
);

// import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import HeroCard from './components/HeroCard';
// import JobsListings from './components/JobsListings';
// import ViewAllJobs from './components/ViewAllJobs';

const App = () => {
  return (
    <RouterProvider router={router} />

    // <>
    //   <Navbar />
    //   <Hero />
    //   <HeroCard />
    //   <JobsListings />
    //   <ViewAllJobs />
    // </>
  )
}

export default App