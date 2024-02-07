import React from 'react'
import Logo1 from './Images/logo-no-background.png'
import BPCLogo from './Images/logo-no-background.png'
import LogoAfg from './Images/logoAfg.jpg'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './Nav'

function Header() {
  return (
    <div className='header'>
        <div className='d-flex justify-content-around '>
            
            <div className='d-flex align-items-center'>
                <h2><img src={BPCLogo}/></h2>
            </div>
            
        </div>
        <Nav />
    </div>
  )
}

export default Header