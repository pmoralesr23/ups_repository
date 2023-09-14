import React, { useEffect } from 'react'
import "./Navbar.scss"

const Navbar = () => {

  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const {pathname} = useLocation()


  const isActive = () =>{
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(()=>{
    window.addEventListener("scroll", isActive)

    return () =>{
      window.removeEventListener("scroll", isActive)
    }
  },[])


  const currentUser = {
    id:1,
    username: "Leyton Valencia",
    isLogin:true
  }


  return (
    <div className={active || pathname !=="/"  ? "navbar active" : "navbar"} >
        <div className='container'>
            <div className='logo'>
              <Link to="/" className='link'>
                <span className='text'>Code<span className='dot' >.</span>nest</span>
              </Link>
            </div>

            <div className='links'>
              <span>Explore</span>
              <span>Language</span>
              <span>Sign in</span>
              {!currentUser?.isLogin && <span>Become a User</span>}
              {!currentUser && <button>Join</button>}
              {currentUser && 
                (
                  <div className='user' onClick={()=> setOpen(!open)}>
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

              <button>Join</button>
            </div>


        </div>
        {active || pathname !=="/" &&
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

    </div>
  )
}
import "./Navbar.scss"
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default Navbar