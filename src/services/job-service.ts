import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AppConstants } from "../core/app-constants";
import { BaseResponse } from "../models/response/base-response";
import { AppJob } from "../models/response/app-job";

export const jobService = createApi({
  reducerPath: "jobService",
  baseQuery: fetchBaseQuery({
    baseUrl: `${AppConstants.baseUrl}`,
  }),
  tagTypes: ["Job"],
  endpoints: (build) => ({
    getJobCategory: build.query<BaseResponse<AppJob>, any>({
      query: () => ({
        url: "/jobs/category",
        method: "GET",
      }),
      providesTags: ["Job"],
    }),
  }),
});

export const { useGetJobCategoryQuery } = jobService;
