import React, { ReactNode } from 'react'

const Frame = ({ children, className }: {
    children: ReactNode,
    className?: string 
}) => {
    const className_ = className ?? ''
  return (
      <div className={'px-4 md:px-8 w-full xl:w-[1280px] flex items-center place-self-center' + " " + className_}>
        {children}
    </div>
  )
}

export default Frame