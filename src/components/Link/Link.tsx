import React from 'react'
import Link2 from 'next/link';

type Props = {
    href: string
    children: React.ReactNode
    className?: string
}

const Link = ({
    href, children, className
}: Props) => {
  return (
      <Link2 className={`hover:underline ${className}`} href={href}>{ children}</Link2>
  )
}

export default Link