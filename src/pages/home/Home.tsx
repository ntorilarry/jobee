import React from "react";
import Hero from "./components/Hero";
import JobCategory from "./components/JobCategory";
import JobVacancy from "./components/JobVacancy";
import RecentJobs from "./components/RecentJobs";

const Home = () => {
  return (
    <div>
      <Hero />
      <JobCategory />
      <JobVacancy />
      <RecentJobs/>
    </div>
  );
};

export default Home;
