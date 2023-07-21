import { createApi } from "@reduxjs/toolkit/query/react";
import { realworldBaseQuery } from "../../../core/realworld-rest-base-query";
import { GetProfileIn } from "./dto/get-profile";

interface ProfileParams {
  username: string,
}

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: realworldBaseQuery,
  endpoints: (builder) => ({
    getProfile: builder.query<GetProfileIn, ProfileParams>({
      query: ({ username }) => ({
        url: `/profiles/${username}`,
      })
    })
  })
});

export const { useGetProfileQuery } = profileApi;