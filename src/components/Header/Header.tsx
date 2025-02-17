import Link from 'next/link'
import React from 'react'
import NavBar from '../Navbar/NavBar'
import Frame from '../Frame/Frame'

const Header = (
  {
    classNameNavBar, classNameNavElements, className
  }: {
    classNameNavBar?: string
    classNameNavElements?: string
    className?: string
  }
) => {
  return (
    <div className={`flex justify-center w-full ${className}`}>
      <Frame className='justify-between pt-4 flex-row w-full'>
        <Link className="capitalize" href='/'><h1 className="text-4xl font-bold">
          Plyaska
        </h1></Link>
        <NavBar className={classNameNavBar} classNameNavElements={classNameNavElements} />
      </Frame>
    </div>
  )
}

export default Header