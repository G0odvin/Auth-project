import { createApi } from "@reduxjs/toolkit/query/react";
import { FeedArticle } from "./dto/global-feed.in";
import { FEED_PAGE_SIZE } from "../consts";
import { PopularTagsInDTO } from "./dto/popular-tags.in";
import { transformResponse } from "./dto/utils";
import { realworldBaseQuery } from "../../../core/realworld-rest-base-query";

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

interface ProfileFeedParams extends BaseFeedParams {
  author: string,
  isFavorited: boolean,
}

export const feedApi = createApi({
  reducerPath: 'feedApi',
  baseQuery: realworldBaseQuery,
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
    getProfileFeed: builder.query<FeedData, ProfileFeedParams>({
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