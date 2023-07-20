import { useSearchParams } from "react-router-dom";
import { Banner } from "../../../components/banner/banner.component"
import { Feed } from "../components/feed/feed.component"
import { useGetGlobalFeedQuery } from "../api/repository";

export const GlobalFeedPage = () => {
  const [searchParams] = useSearchParams();

  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 0;

  const { data, error, isLoading, isFetching } = useGetGlobalFeedQuery({
    page,
    tag: searchParams.get('tag'),
  });


  return (
    <>
      <Banner />
      <Feed
        data={data}
        error={error}
        isLoading={isLoading}
        isFetching={isFetching}
      />
    </>
  )
}
