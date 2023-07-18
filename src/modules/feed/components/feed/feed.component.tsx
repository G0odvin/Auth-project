import { ArticalList } from '../artical-list/artical-list.component'
import { Container } from '../../../../components/container/container.component'
import { FeedToggle } from '../feed-toggle/feed-toggle.component'
import { useGetGlobalFeedQuery } from '../../api/repository'
import ReactPaginate from 'react-paginate'
import { FEED_PAGE_SIZE } from '../../consts'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { serializeSearchParams } from '../../../../utils/router'
import { TagCloud } from '../tag-cloud/tag-cloud.component'

export const Feed = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get('page') ? Number(searchParams.get('page')) : 0);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(selected);
    setSearchParams(serializeSearchParams({ page: String(selected) }))
  }

  const { data, error, isLoading, isFetching } = useGetGlobalFeedQuery({
    page,
    tag: searchParams.get('tag'),
  });

  if (isLoading || isFetching) {
    return (
      <Container>
        Feed loading...
      </Container>
    )
  }

  if (error) {
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
        <div className='w-3/4'>
          <ArticalList list={data?.articles || []} />
          <nav className="my-6">
            <ReactPaginate
              pageCount={(data?.articlesCount || 0) / FEED_PAGE_SIZE}
              pageRangeDisplayed={(data?.articlesCount || 0) / FEED_PAGE_SIZE}
              previousLabel={null}
              nextLabel={null}
              containerClassName="flex"
              pageClassName="group"
              pageLinkClassName="p-3 px-3 py-2 text-theme-green bg-white border border-theme-lightebGrey -ml-px hover:bg-theme-pageHoverBg group-[&:nth-child(3)]: rounded-l group-[&:nth-last-child(2)]:rounded-r hover:bg-theme-pageHoverBg"
              activeClassName="active group"
              activeLinkClassName="group-[.active]:bg-theme-green group-[.active]:text-white group-[.active]:border-theme-green"
              onPageChange={handlePageChange}
              forcePage={page}
            />
          </nav>
        </div>
        <div className='w-1/4 pl-3'>
          <TagCloud />
        </div>
      </div>
    </Container>
  )
}
