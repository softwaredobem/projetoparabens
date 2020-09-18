import React from 'react'
import Menu from './Menu'
import Footer from './Footer'

const Layout = ({ children, showMenu = true }) => {
  return (
    <div className='container mx-auto'>
      {showMenu && <Menu />}
      {children}
      <Footer />
    </div>
  )
}
export default Layout
