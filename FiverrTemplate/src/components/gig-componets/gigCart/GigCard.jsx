import React from 'react'
import "./GigCard.scss"
import { Link } from 'react-router-dom'
import { UserButton, useUser  } from "@clerk/clerk-react";
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../../utils/newRequest';

const GigCard = ({item}) => {


  const { isLoading, error, data } = useQuery({
    queryKey: ['gigUser', item.userId],
    queryFn: () =>
    newRequest.get(`/users/${item.userId}`).then((res) =>{
      return res.data;
    })
  })

  return (
    <>
    {item.privacity ? (
    <Link to={`/gig/${item._id}`} className="link">
      <div className="gigCard">
        <img src={item.cover} alt="" />
        <div className="info">
          {isLoading ? (
            "loading"
          ): error ? (
            "Algo salio mal"
          ): (
            <div className="user">
            <img src={data.clerk_img || "/img/noavatar.jpg"} alt="" />
            <span>{data.username}</span>
          </div>
          )}
          
          <div className='cont-desc'>
          <p className='card-desc'>{item.title}</p>
          </div>
          
          <div className="star">
          {Array(Math.round(item.totalStars / item.starNumber)).fill().map((item,i)=>(
                  <img src="/img/star.png" alt="" key={i} />
                  ))}
            <span>{!isNaN(item.totalStars / item.starNumber) &&
            Math.round(item.totalStars / item.starNumber)}</span>
          </div>
        </div>
        <hr />
        <div className="detail">
          {
          item.tools.slice(3).map(
            (tools) => (
              <span key={ tools } className='tag_item'>{ tools }</span>
            ))
          }
        </div>
      </div>
    </Link>) : null}
    </>
  );
};


export default GigCard