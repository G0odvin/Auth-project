import { ArticalList } from '../artical-list/artical-list.component'
import { FeedData } from '../../api/repository'
import ReactPaginate from 'react-paginate'
import { FEED_PAGE_SIZE } from '../../consts'
import { FC } from 'react'
import { usePagePram } from '../../hooks/usePageParam'

interface FeedProps {
  isLoading: boolean,
  isFetching: boolean,
  error: any,
  data?: FeedData,
}

export const Feed: FC<FeedProps> = ({ isLoading, isFetching, error, data }) => {
  const { page, setPage } = usePagePram();

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(selected);
  }

  // const { data, error, isLoading, isFetching } = useGetGlobalFeedQuery({
  //   page,
  //   tag: searchParams.get('tag'),
  // });

  if (isLoading || isFetching) {
    return (
      <p className='mt-4'>
        Feed loading...
      </p>
    )
  }

  if (error) {
    return (
      <p className='mt-4'>
        Error while loading feed
      </p>
    )
  }

  if (data?.articlesCount === 0) {
    return <p className='mt-4'>
      No articles are here... yet.
    </p>
  }

  return (
    <>
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
    </>
  )
}
