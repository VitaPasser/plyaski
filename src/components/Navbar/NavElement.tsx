import Link from 'next/link'
import React, { ReactNode } from 'react'

const NavElement = ({ url, children }: {
    url: string,
    children: ReactNode
}) => {
  return (
      <Link className="group transition ease-in-out delay-150 capitalize hover:backdrop-contrast-0 hover:bg-white/30 
      first:rounded-l-full
      last:rounded-r-full
      px-4 py-1" href={url}>
          <p className='transition ease-in-out delay-150 group-hover:scale-110'>
              {children}
          </p>
      </Link>
  )
}

export default NavElement