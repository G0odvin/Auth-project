import { useSearchParams } from "react-router-dom";
import { Banner } from "../../../components/banner/banner.component"
import { Feed } from "../components/feed/feed.component"
import { useGetGlobalFeedQuery } from "../api/repository";
import { usePagePram } from "../hooks/usePageParam";
import { Container } from "../../../components/container/container.component";
import { FeedToggle } from "../components/feed-toggle/feed-toggle.component";
import { TagCloud } from "../components/tag-cloud/tag-cloud.component";

export const GlobalFeedPage = () => {
  const [searchParams] = useSearchParams();
  const { page } = usePagePram();

  const { data, error, isLoading, isFetching } = useGetGlobalFeedQuery({
    page,
    tag: searchParams.get('tag'),
  });


  return (
    <>
      <Banner />
      <Container>
        <FeedToggle />
        <div className="flex">
          <div className="w-3/4">
            <Feed
              data={data}
              error={error}
              isLoading={isLoading}
              isFetching={isFetching}
            />
          </div>
          <div className="w-1/4 pl-3">
            <TagCloud />
          </div>
        </div>

      </Container>
    </>
  )
}
