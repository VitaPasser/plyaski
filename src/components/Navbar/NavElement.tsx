import Link from 'next/link'
import React, { ReactNode } from 'react'

const NavElement = ({ url, children, className }: {
    url: string,
    className?: string,
    children: ReactNode
}) => {
  return (
      <Link className={`group/nav-element-but transition ease-in-out delay-150 capitalize hover:backdrop-contrast-0
      first:rounded-l-full
      last:rounded-r-full
      px-[0.9rem] py-1 ${className ?? ""}`} href={url}>
          <p className='transition ease-in-out delay-150 group-hover/nav-element-but:scale-110'>
              {children}
          </p>
      </Link>
  )
}

export default NavElement