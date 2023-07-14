import React from 'react'
import { ArticalList } from '../artical-list/artical-list.component'
import { Container } from '../../../../components/container/container.component'

export const Feed = () => {
  return (
    <Container>
      <div className='flex'>
        <ArticalList />
        <div className='w-1/4'>tags</div>
      </div>
    </Container>
  )
}
