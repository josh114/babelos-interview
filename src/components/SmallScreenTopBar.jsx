import React from 'react'
import logo from '../assets/logo.png'
import { GoHome } from "react-icons/go";

const SmallScreenTopBar = () => {
  return (
    <div className='header'>
        <div>
        <img src={logo} height={30} alt='logo' />
        </div>
        <div className='header-last'>
        <GoHome className='header-logo' size={20} />&nbsp;<span className='header-text'>Back home</span>
        </div>
    </div>
  )
}

export default SmallScreenTopBar