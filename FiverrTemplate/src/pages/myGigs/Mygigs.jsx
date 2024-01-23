import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import "./Mygigs.scss";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import { useUser } from '@clerk/clerk-react';



function MyGigs() {

const { isLoaded, isSignedIn, user } = useUser();
const queryClient = useQueryClient()


const {      
  isLoading: isLoadingUser,
  error: errorUser,
  data: dataUser, } = useQuery(
  {
    queryKey: ['MyGigUser'],
    queryFn: () =>
      newRequest.get(`/users/clerkUser/${user.id}`).then((res) => {
        return res.data;
      }),
  },
);

console.log("data user mygig: ", dataUser)


const userId = dataUser?._id;

const { isLoading, error, data } = useQuery({
    queryKey: ['myGigs'],
    queryFn: () =>
    newRequest.get(
      `/gigs?userId=${userId}`
      )
      .then((res) =>{
      return res.data;
    }),
    enabled: !!userId,
  })



  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/gigs/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  };


  const handleToggle = async (id, privacity) => {
    const updatedData = { privacity: !privacity };

    console.log("datos del update: ", id, updatedData);

    try {
      // Llamada a la operación PATCH
      await newRequest.patch(`/gigs/${id}`, updatedData);


      // Invalidar la consulta para refrescar los datos en caché
      queryClient.invalidateQueries(["myGigs"]);
    } catch (error) {
      console.error("Error al realizar la operación PATCH", error);
    }
  };


return (
  <div className="myGigs">
    {isLoading ? (
      "loading"
    ) : error ? (
      "error"
    ) : (
      <div className="container">
        <div className="title">
          <h1>Mis Publicaciones</h1>
          <Link to="/add">
            <button>Agregar nueva publicacion!</button>
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Portada</th>
              <th>Titulo</th>
              <th>Estrellas</th>
              <th>Privacidad</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
          {data && data.length > 0 ?
          data && data.map((gig) => (
              <tr key={gig._id}>
                <td>
                  <img className="image" src={gig.cover} alt="" />
                </td>
                <td>{gig.title}</td>
                <td><div className="stars">
                  {Array(Math.round(gig.totalStars / gig.starNumber)).fill().map((item,i)=>(
                        <img src="/img/star.png" alt="" key={i} />
                        ))}
                    {/* <span>{Math.round(gig.totalStars / gig.starNumber)}</span> */}
                  </div>
                </td>
                <td>
                  {gig.privacity ? 'Público' : 'Privado'}
                  <label className="switch">
                    <input type="checkbox" defaultChecked={gig.privacity}/>
                    <span className="slider round" defaultChecked={gig.privacity} onClick={() => handleToggle(gig._id, gig.privacity)}></span>
                  </label>
                </td>
                <td>
                  <img
                    className="delete"
                    src="./img/delete.png"
                    alt=""
                    onClick={() => handleDelete(gig._id)}
                  />
                </td>
              </tr>
            ))
            : (
              <tr>
                <td colSpan="5">No hay datos disponibles</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )}
  </div>
);
}    

export default MyGigs