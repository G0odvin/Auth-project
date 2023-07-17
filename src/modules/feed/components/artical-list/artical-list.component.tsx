import { FC } from "react"
import { Article } from "../artical/article.component"
import { FeedArticle } from "../../api/dto/global-feed.in"

interface ArticleListProps {
  list: FeedArticle[],
}

export const ArticalList: FC<ArticleListProps> = ({ list }) => {
  return (
    <div className="w-3/4">
      {list.map((article) => (
        <Article key={article.slug} article={article} />
      ))}
    </div>
  )
}
