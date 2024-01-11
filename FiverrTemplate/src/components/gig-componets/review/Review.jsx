import React from 'react'
import "./Review.scss"
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../../utils/newRequest';

export const Review = ({review}) => {

  function formatDate(string){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString('es-ES',options);
}



  const { isLoading, error, data } = useQuery(
    {
      queryKey: [review.userId],
      queryFn: () =>
        newRequest.get(`/users/clerkUser/${review.userId}`).then((res) => {
          return res.data;
        }),
    },
  );





  return (
    <div className="review">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="user">
          <img className="pp" src={data.clerk_img || "/img/noavatar.jpg"} alt="" />
          <div className="info">
            <span>{data.username}</span>
            <div className="country">
            <img
              src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ea-1f1e8.png"
              alt=""
            />
            <span>{data.country}</span>
            </div>
          </div>
          
        </div>
      )}
      <div className="stars">
        {Array(review.star).fill().map((item,i) => (
          <img src="/img/star.png" alt="" key={i} />
        ))}
        <span>{review.star}</span>
      </div>
      <p>
      {review.desc}  
      </p>
      
      <div className="helpful">
        <span>{formatDate(review.updatedAt)}</span>
        <img src="/img/like.png" alt="" />
        <span>Yes</span>
        <img src="/img/dislike.png" alt="" />
        <span>No</span>
      </div>
    </div>
  )
}
