import React from 'react'

type Props = {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

const Button = ({ children, className, onClick }: Props) => {
  return (
    <button className={`group/button transition ease-in-out delay-150 capitalize hover:backdrop-contrast-50  hover:bg-white/70 
      first:rounded-l-full
      last:rounded-r-full
      border-[1px] border-black
      px-4 py-1 ${className ?? ""}`} onClick={onClick}>
      <p className='transition ease-in-out delay-150 group-hover/button:scale-110 flex flex-row content-center items-center gap-2'>
        {children}
      </p>
    </button>
  )
}

export default Button