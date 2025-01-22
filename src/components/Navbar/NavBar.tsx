import React from 'react'
import NavElement from './NavElement'

const NavBar = ({ className }: {
    className?: string
}) => {
    const className_ = className ?? '';
    return (
        <nav className={"flex border-[1px] rounded-full divide-x-[1px]" + " " + className_ }>
          <NavElement url='/'>Найближчі клуби</NavElement>
          <NavElement url='/'>Найближчі заклади</NavElement>
          <NavElement url='/'>Суспільство</NavElement>
          <NavElement url='/'>О нас</NavElement>
      </nav>
  )
}

export default NavBar