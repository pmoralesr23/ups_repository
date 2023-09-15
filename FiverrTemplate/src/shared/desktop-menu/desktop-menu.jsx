import React from 'react';
import "./desktop-menu.scss"

//? nodeJS components
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Desktop_menu() {

  const [open, setOpen] = useState(false);

  const currentUser = {
    id: 1,
    username: "Leyton Valencia",
    isLogin: true
  }

  return (
    <div className='links'>
        <span>Explore</span>
        <span>Language</span>
        <span>Sign in</span>
        {!currentUser?.isLogin && <span>Become a User</span>}
        {!currentUser && <button>Join</button>}
        {currentUser &&
        (
            <div className='user' onClick={() => setOpen(!open)}>
            <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <span>{currentUser?.username}</span>
            {open && <div className="options">
                {
                currentUser?.isLogin && (
                    <>
                    <Link className='link' to="/gigs">Gigs</Link>
                    <Link className='link' to="/mygigs">Add New Gig</Link>
                    </>
                )
                }
                <Link className='link' to="orders">Orders</Link>
                <Link className='link' to="messages">Messages</Link>
                <Link className='link' to="">LogOut</Link>
            </div>}
            </div>
        )
        }

        <button className='btn-multi-color'>Unete</button>
    </div>
  )
}

export default Desktop_menu