import { GlobalFeedIn } from "./global-feed.in"

export const transformResponse = (responce: GlobalFeedIn) => {
  return {
    articles: responce.articles || [],
    articlesCount: responce.articlesCount || 0,
  }
}