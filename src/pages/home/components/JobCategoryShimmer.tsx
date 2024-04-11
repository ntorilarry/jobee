import React from "react";

const JobCategoryShimmer = () => {
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="max-w-2xl mb-10 md:mx-auto sm:text-center md:mb-12"></div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Create a placeholder for each category */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="animate-pulse w-72 p-5 bg-[#f3f3f3] group-hover:bg-[#2653F1] rounded-2xl shadow-sm"
          >
            <div>
              <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-[#D4DCF3]"></div>
              <h6 className="mb-2 text-2xl font-semibold bg-gray-200 h-8 w-32"></h6>
              <p className="mb-3 mt-6 font-normal text-sm text-gray-900 bg-gray-200 h-4 w-16"></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCategoryShimmer;
