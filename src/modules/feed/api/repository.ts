import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../../core/axios-base-query";
import { FeedArticle, GlobalFeedIn } from "./dto/global-feed.in";
import { FEED_PAGE_SIZE } from "../consts";
import { PopularTagsInDTO } from "./dto/popular-tags.in";

interface GlobalFeedParams {
  page: number;
  tag: string | null,
}

export interface FeedData {
  articles: FeedArticle[],
  articlesCount: number,
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
      transformResponse: (responce: GlobalFeedIn) => {
        return {
          articles: responce.articles || [],
          articlesCount: responce.articlesCount || 0,
        }
      }
    }),
    getPopularTags: builder.query<PopularTagsInDTO, any>({
      query: () => ({
        url: '/tags',
      })
    }),
  }),
});

export const { useGetGlobalFeedQuery, useGetPopularTagsQuery } = feedApi