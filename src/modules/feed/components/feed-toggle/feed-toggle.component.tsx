import clsx from 'clsx';
import React from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'

export const FeedToggle = () => {
  const [searchParams] = useSearchParams();
  const tag = searchParams.get('tag');

  const globalFeedClasses = clsx(
    'bg-white border-theme-green py-2 px-4 hover:text-black/60 hover:no-underline',
    {
      'text-black/30': tag,
      'border-b-2': !tag,
    }
  );

  return (
    <div className='h-8'>
      <ul className='flex'>
        <li>
          <NavLink to='/' className='bg-white border-b-2 border-theme-green py-2 px-4'>Global Feed</NavLink>
          {tag && <span className='bg-white border-b-2 border-theme-green py-2 px-4 inline-block text-theme-green'># {tag}</span>}
        </li>
      </ul>
    </div>
  )
}
