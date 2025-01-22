import React from 'react'
import Video from './Video/Video';

const Welcome = ({ children, className }: {
    children: React.ReactNode,
    className?: string
}) => {
    const className_ = className ?? '';
    return (
        <div className={"relative xl:h-[1024px]" + " " + className_}>
            <Video />
            <div className='relative z-30 backdrop-blur-[4px] w-full backdrop-contrast-50 h-full'>  
                {children}
            </div>
        </div>
  )
}

export default Welcome