import React from 'react';
import "./desktop-menu.scss"

//? nodeJS components
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { UserButton, useUser  } from "@clerk/clerk-react";
import newRequest from '../../utils/newRequest';




async function asyncCall() {
  console.log(user.primaryEmailAddress.emailAddress);
  try{
    // const res = await newRequest.post("/auth/login", {username, password});
    const res = await newRequest.post("/auth/login", {username: "lvalenciap@est.ups.edu.ec"});
    localStorage.setItem("currentUser",JSON.stringify(res.data)) 
    
    }catch(err){
        setError(err.response.data);
    }
  // Expected output: "resolved"
}

// asyncCall();




function Desktop_menu() {

  const [open, setOpen] = useState(false);



  const { isLoaded, isSignedIn, user } = useUser();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"))
  const navigate = useNavigate()

  const handleLogout = async () =>{
    try{
      await newRequest.post("/auth/logout")
      localStorage.setItem("currentUser",null) 
      navigate("/")
    }catch (err){
      console.log(err)
    }
  }




  return (
    <div className='links'>
        <a className='menu-links' href="/">Inicio</a>
        <a className='menu-links' href="/Gigs">Publicaciones</a>
        {!isSignedIn && <Link className='link' to="/protected"> <button  className='btn-multi-color'>Unete</button> </Link>}
        {isSignedIn && 
        (
            
            <>
          
            <UserButton/>
            <div className='user' onClick={() => setOpen(!open)}>
            

            {<span>{currentUser?.username}</span> }
            <span>{(user.primaryEmailAddress.emailAddress)}</span>
            {open && <div className="options">
                {
                currentUser?.isLogin && (
                    <>
                    <Link className='link' to="/gigs">Gigs</Link>
                    <Link className='link' to="/mygigs">Add New Gig</Link>
                    </>
                )
                }
                <Link className='link'to="/mygigs">Mis publicaciones</Link>
                <Link className='link' to="messages">Mensajes</Link>
                <Link className='link' onClick={handleLogout}>LogOut</Link>
            </div>}
            </div>
            </>
        )
        }
    </div>
  )
}

export default Desktop_menu