import React from 'react'
import "./Gigs.scss";
import { useState } from 'react';
import { gigs } from "../../data";
import GigCard from "../../components/gig-componets/gigCart/GigCard";
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import { useLocation } from 'react-router-dom';
import { useSession } from '@clerk/clerk-react';



const Gigs = () => {


  const [open, setOpen] = useState(false);

  const {search} = useLocation();

  const { isLoading, error, data } = useQuery({
    queryKey: ['gigs'],
    queryFn: () =>
      newRequest.get(`/gigs${search}`).then((res) =>{
        return res.data;
      })
  })


  return (
    <div className='gigs'>
      <div className="container">
        <div className="breadcrumbs">
          Code.Nest &gt; Publicaciones
        </div>
        <h1>Publicaciones </h1>

        <p>
          Ideas creativas y trabajos innovadores, todos tus compañeros y amigos han compartido o respaldado <br/>
          sus datos e información aquí no esperes para ser parte de este proyecto.
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
          { isLoading
            ? "loading" 
            : error 
            ? "Something went wrong "
            : data.map((gig) => (
            <GigCard key={gig._id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gigs