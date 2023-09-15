import React, { useEffect } from 'react';
import "./Navbar.scss";

import Desktop_menu from '../desktop-menu/desktop-menu';
import Bottom_menu from '../bottom-menu/bottom-menu';

function Navbar (){

  const [active, setActive] = useState(false);
  const { pathname } = useLocation()
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }
  useEffect(() => {
    window.addEventListener("scroll", isActive)

    return () => {
      window.removeEventListener("scroll", isActive)
    }
  }, [])

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"} >
      <div className='container'>
        <div className='logo'>
          <Link to="/" className='link'>
            <span className='text'>Code<span className='dot' >.</span>nest</span>
          </Link>
        </div>

        {/* Desktop menu */}
        <Desktop_menu/>

        {/* Mobile menu */}
        
      </div>
      {/* Botton menu */}
      <Bottom_menu/>
    </div>
  )
}
import "./Navbar.scss"
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default Navbar