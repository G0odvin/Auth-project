import { useGetProfileFeedQuery } from "../../api/repository"
import { ProfileBanner } from "../components/profile-banner.component"
import { usePagePram } from "../../hooks/usePageParam";
import { Feed } from "../../components/feed/feed.component";
import { Container } from "../../../../components/container/container.component";
import { FeedToggle } from "../../components/feed-toggle/feed-toggle.component";
import { useLocation, useParams } from "react-router-dom";
import { useGetProfileQuery } from "../../../profile/api/repository";

interface ProfilePageParams {
  profile: string,
}

export const ProfilePage = () => {
  const { page } = usePagePram();
  const { profile } = useParams();
  const { pathname } = useLocation();

  const { data: profileInfo, isLoading: profileLoading} = useGetProfileQuery({ username: profile!})
  const { data, isLoading, isFetching, error } = useGetProfileFeedQuery({
    page,
    author: profile!,
    isFavorited: pathname.includes(`/${encodeURIComponent(profile!)}/favorites`)
  });

  const feedToggleItems = [
    { text: 'Favorited articles', link: `/${encodeURIComponent(profile!)}/favorites` }
  ];

  if (profileLoading) {
    return null
  }

  return (
    <>
      <ProfileBanner profile={profileInfo!.profile} />
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
