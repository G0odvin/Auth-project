import { useGetProfileFeedQuery } from "../../api/repository"
import { ProfileBanner } from "../components/profile-banner.component"
import { usePagePram } from "../../hooks/usePageParam";
import { Feed } from "../../components/feed/feed.component";
import { Container } from "../../../../components/container/container.component";
import { FeedToggle } from "../../components/feed-toggle/feed-toggle.component";
import { useLocation, useParams } from "react-router-dom";

interface ProfilePageParams {
  profile: string,
}

export const ProfilePage = () => {
  const { page } = usePagePram();
  const { profile } = useParams();
  const { pathname } = useLocation();

  const { data, isLoading, isFetching, error } = useGetProfileFeedQuery({
    page,
    author: profile!,
    isFavorited: pathname.includes(`/${encodeURIComponent(profile!)}/favorites`)
  });

  const feedToggleItems = [
    { text: 'Favorited articles', link: `/${encodeURIComponent(profile!)}/favorites` }
  ]

  return (
    <>
      <ProfileBanner />
      <Container>
        <FeedToggle defaultText="My Articles" defaultLink={`/${encodeURIComponent(profile!)}`} items={feedToggleItems} />
        <Feed
          data={data}
          isLoading={isLoading}
          isFetching={isFetching}
          error={error}
        />
      </Container>
    </>
  )
}
