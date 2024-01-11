import { UserButton, useUser  } from "@clerk/clerk-react";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import newRequest from "../../../utils/newRequest";
import {Review} from "../review/Review";
import "./Reviews.scss";

export const Reviews = ({gigId}) => {

  const { isLoaded, isSignedIn, user } = useUser();
  const queryClient = useQueryClient()
  const { isLoading, error, data } = useQuery({
      queryKey: ['reviews'],
      queryFn: () =>
      newRequest.get(
        `/reviews/${gigId}`
        )
        .then((res) =>{
        return res.data;
      })  
    })

  const mutation = useMutation({
    mutationFn: (review) => {
      return newRequest.post("/reviews", review);
    },
    onSuccess:()=>{
      queryClient.invalidateQueries(["reviews"])
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = user.id;
    const desc = e.target[0].value;
    const star = e.target[1].value;
    mutation.mutate({ userId, gigId, star, desc });
  };

  let  reviewsInvertidas 
  if (!isLoading && !error && data) {
     reviewsInvertidas = [...data].reverse();
  }

  return (
    <div className="reviews">
      <div className="add">
        <h3>Agregar comentario</h3>
        <form action="" className="addForm" onSubmit={handleSubmit}>
          <input type="text" placeholder="Escribe tu opinion aqui" />
          <select name="" id="">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button>Enviar</button>
        </form>
      </div>

    <h2>Comentarios</h2>
    {isLoading ? "loading" : error ? "No comentarios" : (
    reviewsInvertidas ? (
        reviewsInvertidas.map(review => (
            <Review key={review._id} review={review} />
        ))
    ) : null
)}
  </div>
  )
}
