import { FC } from "react"

interface TagListProps {
  list: string[]
}

export const TagList: FC<TagListProps> = ({ list }) => {
  return (
    <ul className="flex ">
      {list.map((tag) => (
        <li className='font-light text-date border border-theme-lightenGray text-theme-tag mr-1 mb-0.2 px-tag rounded-teg'
        key={tag}
        >{tag}</li>
      ))}
    </ul>
  )
}
