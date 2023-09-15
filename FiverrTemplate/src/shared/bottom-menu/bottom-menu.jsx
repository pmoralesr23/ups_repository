import React from 'react';
import "./bottom-menu.scss";
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Bottom_menu (){

  const [active] = useState(false);
  const { pathname } = useLocation()

  return (
    <>
      {active || pathname !== "/" &&
        <>
          <hr />
          <div className='menu'>
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
          </div>
        </>
      }
    </>
  )
}

export default Bottom_menu