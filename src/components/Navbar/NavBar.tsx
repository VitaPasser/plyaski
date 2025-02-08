"use client"
import React, { useState } from 'react'
import NavElement from './NavElement'
import ButtonOpenNavBar from './ButtonOpenNavBar';
import { TbMenu4 } from 'react-icons/tb';

const NavBar = ({ className, classNameNavElements }: {
    className?: string
    classNameNavElements?: string
}) => {
    const className_ = className ?? '';
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className='md:hidden'>
                {
                    !isOpen && <ButtonOpenNavBar onClick={() => {
                            setIsOpen((value) => !value)
                        document
                            .getElementById('root')
                            ?.classList
                            .toggle("is-published");
                        }}>
                    <TbMenu4 className='text-2xl' />
                    </ButtonOpenNavBar>
                }
            </div>
            <nav className={"hidden md:flex border-[1px] rounded-full divide-x-[1px]" + " " + className_ }>
                <NavElement className={classNameNavElements} url='/'>Найближчі клуби</NavElement>
                <NavElement className={classNameNavElements} url='/'>Найближчі заклади</NavElement>
                <NavElement className={classNameNavElements} url='/'>Суспільство</NavElement>
                <NavElement className={classNameNavElements} url='/'>О нас</NavElement>
            </nav>
        </>
  )
}

export default NavBar