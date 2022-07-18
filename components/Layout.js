import React from 'react'
import Main from './Main'
import SideMenu from './SideMenu'

function Layout() {
  return (
    <div className='w-full min-h-screen flex '>
      <SideMenu />
      <Main />
    </div>
  )
}

export default Layout