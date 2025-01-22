import Link from 'next/link'
import React from 'react'
import NavBar from '../Navbar/NavBar'
import Frame from '../Frame/Frame'

const Header = () => {
  return (
      <div className='flex justify-center'>
          <Frame className='justify-between pt-4 flex-row'>
            <Link className="capitalize" href='/'><h1 className="text-4xl font-bold">
                Plyaska
            </h1></Link>
            <NavBar />
          </Frame>
      </div>
  )
}

export default Header