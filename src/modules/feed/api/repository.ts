import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../../core/axios-base-query";
import { FeedArticle } from "./dto/global-feed.in";
import { FEED_PAGE_SIZE } from "../consts";
import { PopularTagsInDTO } from "./dto/popular-tags.in";
import { transformResponse } from "./dto/utils";

interface BaseFeedParams {
  page: number,
}

interface GlobalFeedParams extends BaseFeedParams {
  tag: string | null,
}

export interface FeedData {
  articles: FeedArticle[],
  articlesCount: number,
}

interface ProfilePeedParams extends BaseFeedParams {
  author: string,
  isFavorited: boolean,
}

export const feedApi = createApi({
  reducerPath: 'feedApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://api.realworld.io/api',
  }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<FeedData, GlobalFeedParams>({
      query: ({ page, tag }) => ({
        url: '/articles',
        params: {
          limit: FEED_PAGE_SIZE,
          offset: page * FEED_PAGE_SIZE,
          tag,
        },
      }),
      transformResponse: transformResponse
    }),
    getProfileFeed: builder.query<FeedData, ProfilePeedParams>({
      query: ({ page, author, isFavorited = false }) => ({
        url: '/articles',
        params: {
          limit: FEED_PAGE_SIZE,
          offset: page * FEED_PAGE_SIZE,
          author: isFavorited ? undefined : author,
          favorited: !isFavorited ? undefined : author,
        },
      }),
      transformResponse: transformResponse
    }),
    getPopularTags: builder.query<PopularTagsInDTO, any>({
      query: () => ({
        url: '/tags',
      })
    }),
  }),
});

export const { useGetGlobalFeedQuery, useGetPopularTagsQuery, useGetProfileFeedQuery } = feedApi