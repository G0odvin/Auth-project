import React, { FC, PropsWithChildren } from 'react'

export const Container: FC<PropsWithChildren<ContainerProps>> = ({ children }) => {
  return (
    <div className='max-w-screen-xl mx-auto'>{children}</div>
  )
}
