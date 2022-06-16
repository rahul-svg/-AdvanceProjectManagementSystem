import React from 'react'
import HeaderLogo from '../Logo/HeaderLogo'
import Navbar from '../../Navbars/Admin/Navbar'



function AHeader() {
  return (
    <div className='header-outer'>
      <div className='header-inner responsive-wrapper'>
      <>
        <HeaderLogo/>
        </>
        <>
        <Navbar/>
        </>
      </div>
        
    </div>
  )
}

export default AHeader