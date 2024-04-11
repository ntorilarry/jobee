import React, { useMemo } from "react";
import { useGetJobCategoryQuery } from "../../../services/job-service";
import JobCategoryShimmer from "./JobCategoryShimmer";

const JobCategory = () => {
  const { data: response, isLoading } = useGetJobCategoryQuery([]);
  const jobCategory = useMemo(() => response?.data || [], [response?.data]);

  if (isLoading) {
    return <JobCategoryShimmer />;
  }
  return (
    <div>
      <div className="px-4 mt-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="max-w-2xl mb-10 md:mx-auto sm:text-center  md:mb-12">
          <h2 className="max-w-3xl mb-6 text-4xl font-medium leading-none tracking-tight text-gray-900 lg:text-5xl md:mx-auto">
            Find Your Jobs By{" "}
            <span className="font-bold text-[#2653F1]">Category</span>
          </h2>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {jobCategory.slice(0, 8).map((category) => (
            <div className="group mx-auto" key={category._id}>
              <div className="w-72 p-5 bg-[#f3f3f3] group-hover:bg-[#2653F1] rounded-2xl shadow-sm">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-[#D4DCF3] group-hover:bg-opacity-50">
                    <div className="bg-[#D9D9D9] w-5 h-5 rounded-full"></div>
                  </div>
                  <h6 className="mb-2 text-xl group-hover:text-white font-semibold">
                    {category.name}
                  </h6>
                  <p className="mb-3 mt-6 group-hover:text-white font-normal text-md text-gray-900">
                    {category.totalJobOpenings} Jobs Available
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
