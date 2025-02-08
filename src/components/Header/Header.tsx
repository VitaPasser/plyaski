import Link from 'next/link'
import React from 'react'
import NavBar from '../Navbar/NavBar'
import Frame from '../Frame/Frame'

const Header = (
  {
    classNameNavBar, classNameNavElements
  }: {
    classNameNavBar?: string
    classNameNavElements?: string
  }
) => {
  return (
    <div className='flex justify-center'>
      <Frame className='justify-between pt-4 flex-row w-screen'>
        <Link className="capitalize" href='/'><h1 className="text-4xl font-bold">
          Plyaska
        </h1></Link>
        <NavBar className={classNameNavBar} classNameNavElements={classNameNavElements} />
      </Frame>
    </div>
  )
}

export default Header