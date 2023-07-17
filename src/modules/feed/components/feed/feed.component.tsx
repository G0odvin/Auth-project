import { ArticalList } from '../artical-list/artical-list.component'
import { Container } from '../../../../components/container/container.component'
import { FeedToggle } from '../feed-toggle/feed-toggle.component'
import { useGetGlobalFeedQuery } from '../../api/repository'

export const Feed = () => {
  const { data, error, isLoading } = useGetGlobalFeedQuery('');

  if(isLoading) {
    return(
      <Container>
        Feed loading...
      </Container>
    )
  }

  if(error) {
    return (
      <Container>
        Error while loading feed
      </Container>
    )
  }

  return (
    <Container>
      <FeedToggle />
      <div className='flex'>
        <ArticalList list ={data?.articles || []} />
        <div className='w-1/4'>tags</div>
      </div>
    </Container>
  )
}
