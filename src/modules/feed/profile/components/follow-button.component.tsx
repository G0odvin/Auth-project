import { FC } from "react"

interface FollowButtonProps {
  username: string,
}

export const FollowButton: FC<FollowButtonProps> = ({ username }) => {
  return (
    <button className='text-center align-middle cursor-pointer select-none border py-1 px-2 text-sm rounded-buttonSm border-theme-darkenGray text-theme-darkGreen hover:bg-theme-lightGrey'>
      <i className='ion-plus-round active:bg-theme-a1'/>
      &nbsp; Follow {username}
      </button>
  )
}
