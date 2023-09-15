import React from 'react'
import "./Gigs.scss";
import { useState } from 'react';
import { gigs } from "../../data";
import GigCard from "../../components/gig-componets/gigCart/GigCard";


const Gigs = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className='gigs'>
      <div className="container">
        <div className="breadcrumbs">FIVERR GRAPHICS & DESIGN</div>
        <h1>AI Artist</h1>

        <p>
          Explore the boundaries og art technology with Fiverrr's AI Artist
        </p>
        <div className="menu">
          <div className="right">
            <span className="sortBy">SortBy</span>
            <span className="sortType">Best Selling</span>
            <img src="./img/down.png" alt="" onClick={()=>setOpen(!open)} />
            { open && <div className='rightMenu'>
              <span>Newest</span>
              <span>Best Selling</span>
            </div>}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gigs