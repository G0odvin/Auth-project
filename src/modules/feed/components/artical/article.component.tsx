import { Link } from "react-router-dom"
import { FavoriteButton } from "../../../../components/favorite-button/favorite-button.component"
import { TagList } from "../../tag-list/tag-list.components"

export const Article = () => {
  return (
    <article>
      <div className="border-t border-black/10 py-6">
        <div className="mb-4 font-light flex">
          <Link to='/@nokwin'>
            <img
              src="https://api.realworld.io/images/demo-avatar.png"
              alt="avatar"
              className="inline-block h-8 w-8 rounded-full"
            />
          </Link>
          <div className="mr-6 ml-0.3 leading-4 inline-flex flex-col">
            <Link to='/@nokwin' className="font-medium">
              Anton Novyk
            </Link>
            <span className="text-theme-gray text-date"> 9 october</span>
          </div>
          <FavoriteButton />
        </div>
        <Link to='/article/qwert' className="hover: no-underline">
          <h1 className="font-semibold mb-1 text-2xl text-theme-darkestGray">Some title</h1>
          <p className="text-theme-darkenGrey font-light mb-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ipsa totam</p>
          <div className="flex justify-between">
          <span className="text-theme-gray text-date font-light">Read more...</span>
          <TagList />
          </div>
        </Link>
      </div>
    </article>
  )
}
