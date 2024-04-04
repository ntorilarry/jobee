import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AppConstants } from "../core/app-constants";
import { loginType } from "../models/request/auth.request";
import { BaseResponse } from "../models/response/base-response";
import { AppAuth } from "../models/response/app-auth";

export const authService = createApi({
  reducerPath: "authService",
  baseQuery: fetchBaseQuery({
    baseUrl: `${AppConstants.baseUrl}`,
  }),
  tagTypes: ["Auth"],
  endpoints: (build) => ({
    loginUser: build.mutation<BaseResponse<AppAuth>, loginType>({
      query: (body: loginType) => ({
        url: "/auth/login",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useLoginUserMutation } = authService;
