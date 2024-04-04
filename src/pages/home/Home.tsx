import React from "react";
import Hero from "./components/Hero";
import JobCategory from "./components/JobCategory";
import JobVacancy from "./components/JobVacancy";

const Home = () => {
  return (
    <div>
      <Hero />
      <JobCategory />
      <JobVacancy />
    </div>
  );
};

export default Home;
