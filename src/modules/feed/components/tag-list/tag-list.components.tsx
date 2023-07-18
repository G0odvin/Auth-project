import clsx from "clsx"
import { FC } from "react"
import { Link } from "react-router-dom"

enum TagListStyle {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
}

interface TagListProps {
  list: string[],
  itemStyle?: keyof typeof TagListStyle,
  itemAs?: 'li' | 'a',
}

export const TagList: FC<TagListProps> = ({
  list,
  itemStyle = TagListStyle.LIGHT,
  itemAs = 'li',
}) => {
  const itemClasses = clsx(
    'text-date border mr-1 mb-0.2 px-tag rounded-teg font-light',
    {
      'border-theme-lightenGray text-theme-tag': itemStyle === TagListStyle.LIGHT,
      'bg-theme-tagItemBg text-white border-theme-tagItemBg hover:bg-theme-tagItemBgDarken': itemStyle === TagListStyle.DARK,
      'hover:text-white hover:no-underline': itemStyle === TagListStyle.DARK && itemAs === 'a',
    })

  return (
    <ul className="flex flex-wrap">
      {list.map((tag) => {
        return itemAs === 'li' ? (
          <li className={itemClasses}
            key={tag}
          >{tag}</li>
        ) : (
          <Link className={itemClasses}
            key={tag}
            to={`/?tag=${tag}`}
          >
            {tag}
          </Link>
        )
      })}
    </ul>
  )
}
