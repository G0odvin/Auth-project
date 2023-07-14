import React from 'react'
import { NavLink } from 'react-router-dom'

export const FeedToggle = () => {
  return (
    <div className='h-8'>
      <ul className='flex'>
        <li>
          <NavLink to='/' className='bg-white border-b-2 border-theme-green py-2 px-4'>Global Feed</NavLink>
        </li>
      </ul>
    </div>
  )
}
