import React from 'react'
import './Gig.scss'
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import { useParams } from 'react-router-dom';
import { Reviews } from '../../components/gig-componets/reviews/Reviews';
import { useSession, useUser } from '@clerk/clerk-react';

const Gig = () => {


  const { isLoaded, session, isSignedIn } = useSession();

  if(!isSignedIn) {
    console.log("usuario no logeado gigs")
    return <div>
            This content is visible only to signed out users.
          </div>;
  }


  const {id} = useParams();
 
  const { isLoading, error, data } = useQuery({
    queryKey: ['gig'],
    queryFn: () =>
    newRequest.get(
      `/gigs/single/${id}`
      )
      .then((res) =>{
      return res.data;
    })  
  })


    const userId = data?.userId;

    const {
      isLoading: isLoadingUser,
      error: errorUser,
      data: dataUser,
    } = useQuery({
      queryKey: ["user"],
      queryFn: () =>
        newRequest.get(`/users/${userId}`).then((res) => {
          return res.data;
        }),
      enabled: !!userId,
    });



    const handleButtonClick = () => {
      // URL a la que deseas redirigir
      const redirectTo = data.file;
  
      // Redirigir la página
      window.location.href = redirectTo;
    };


    function formatDate(string){
      var options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(string).toLocaleDateString('es-ES',options);
  }

  return (
    <div className="gig">
      { isLoading ? "loading" : error ? "Algo salio mal" :

        <  div className="container">
        <div className="left">
          <span className='breadCrumbs'>Code.Nest &gt; Publicaciones &gt; {data.title}</span>
          <h1>{data.title}</h1>
          <div className="user">
            <span>Leyton</span>
            <div className="stars">
            {Array(Math.round(data.totalStars / data.starNumber)).fill().map((item,i)=>(
                  <img src="/img/star.png" alt="" key={i} />
                  ))}
              <span>{Math.round(data.totalStars / data.starNumber)}</span>
            </div>
          </div>
          <div className="banner-py" style={{ backgroundImage: "url('https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
            <div className="cont-dl">
              <a href={data.file} className="btn-download">Descargar este proyecto</a>
              
            </div>
          </div>
          <div className="seller">
            <h2>Acerca del usuario</h2>
            {isLoadingUser ? ("loading"): errorUser ? ("No user data") : (
              <div className="user">
               
              <img
                src={dataUser.clerk_img || "/img/noavatar.jpg"}
                alt=""
              />
              <div className="info">
                <span>{dataUser.username}</span>

                {!isNaN(data.totalStars / data.starNumber) && (

                  <div className="stars">
                  {Array(Math.round(data.totalStars / data.starNumber)).fill().map((item,i)=>(
                  <img src="/img/star.png" alt="" key={i} />
                  ))}
                
                <span>{Math.round(data.totalStars / data.starNumber)}</span>
                </div>
                )}
            
                
                <button>Ver Perfil</button>
              </div>
            </div>)}


            <div className="box">
              <div className="items">
                <div className="item-ilb">
                  <span className="title">Pais</span>
                  <span className="desc">Ecuador</span>
                </div>
                <div className="item-ilb">
                  <span className="title">Miembro desde</span>
                  <span className="desc">Agosto 2023</span>
                </div>
                <div className="item-ilb">
                  <span className="title">Numero de Publicaciones</span>
                  <span className="desc">7</span>
                </div>
                
              </div>
              <hr />
              <p>
              Soy un desarrollador web de pila completa con una amplia 
              gama de conocimientos en diferentes lenguajes de front-end 
              y back-end, marcos receptivos, bases de datos y mejores 
              prácticas de código. Aporto años de investigación y 
              experiencia en la industria y puedo comprender los 
              requisitos a fondo y crear el software requerido por 
              el cliente de manera oportuna.
              </p>
            </div>
          </div>
		  <Reviews gigId={id}/>
        </div>
        <div className="right">
          <div className="price">
            <h3>
              {data.title}
           </h3>
          </div>
          <p>
          {data.desc}
          </p>
          <div className="details">
            <div className="item-li">
              {/* <img src="/img/clock.png" alt="" /> */}
              <span>Fecha Inicio: {formatDate(data.updatedAt)}</span>
            </div>
            <div className="item-li">
              {/* <img src="/img/recycle.png" alt="" /> */}
              <span>2 Actualizaciones</span>
            </div>
          </div>
          <span className="title-ft">Lenguajes y Herramientas:</span>
          <div className="features">

          {
          data.tools.map(
            (tools) => (
              <div key={ tools }  className="item-fi">
                <span key={ tools } >{tools}</span>
              </div>
            ))
          }
          </div>
          <button>Contactar</button>
          <button onClick={handleButtonClick} >Descargar</button>
        </div>
      </div>
      }  
    </div>
  )
}

export default Gig