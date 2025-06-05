import Link from 'next/link'
import React from 'react'

type Props = {
  children: React.ReactNode
  href: string
  className?: string
}

const ButtonLink = ({ children, className, href }: Props) => {
  return (
    <Link className={`group/button transition ease-in-out delay-150 capitalize hover:backdrop-contrast-50  hover:bg-white/70 
      first:rounded-l-full
      last:rounded-r-full
      border-[1px] border-black 
      px-4 py-1 ${className ?? ""}`} href={href}>
      <p className='transition ease-in-out delay-150 group-hover/button:scale-110 flex flex-row content-center items-center gap-2'>
        {children}
      </p>
    </Link>
  )
}

export default ButtonLink