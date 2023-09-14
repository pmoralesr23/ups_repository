import React from 'react'
import './Gig.scss'
import {Slider} from "infinite-react-carousel/lib";
import FolderTree, { testData } from "react-folder-tree";




const BasicTree = () => {
  const onTreeStateChange = (state) => console.log("tree state: ", state);

  return <FolderTree data={testData} onChange={onTreeStateChange} />;
};

const Gig = () => {

  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className='breadCrumbs'>FIVERR {'>'} GRAPHICS & DESIGN</span>
          <h1>i will create generate art for you</h1>
          <div className="user">
            <img src="" alt="" />
            <span>Leyton Valencia</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <div className="slider">
            <BasicTree />
          </div>

          
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img
                src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/025573035bbbb4f85290b4fb5667029c-1637071982769/800762d9-419d-4e18-a065-64d139377e15.jpg"
                alt=""
              />
              <div className="info">
                <span>Steve Chacon</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Ver Perfil</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">Pais</span>
                  <span className="desc">Ecuador</span>
                </div>
                <div className="item">
                  <span className="title">Miembro desde</span>
                  <span className="desc">Agosto 2023</span>
                </div>
                <div className="item">
                  <span className="title">Numero de Publicaciones</span>
                  <span className="desc">7</span>
                </div>
                <div className="item">
                  <span className="title">Ultima Conexion</span>
                  <span className="desc">Hace 3 dias</span>
                </div>
                <div className="item">
                  <span className="title">Lenguajes</span>
                  <span className="desc">Ingles, Ecuador</span>
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
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Garner David</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ea-1f1e8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Sidney Owen</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ea-1f1e8.png"
                      alt=""
                    />
                    <span>Germany</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                The designer took my photo for my book cover to the next level!
                Professionalism and ease of working with designer along with
                punctuality is above industry standards!! Whatever your project
                is, you need this designer!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Lyle Giles </span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ea-1f1e8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Amazing work! Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>
              Crearé un sitio web con transmisión en
              vivo y la función de historia de Instagram.
           </h3>
          </div>
          <p>
          A partir de este servicio, creadores como YouTubers, 
          Instagrammers, fotógrafos y muchos más comienzan a 
          ganar dinero vendiendo su contenido a sus fans y 
          seguidores. El modelo de trabajo es similar al de 
          solo fans y sitios de Patreon.
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>Fecha Inicio: 09/04/2023</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>2 Actualizaciones</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>NextJS</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>JavaScript</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>MongoDB</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Diseño UI</span>
            </div>
          </div>
          <button>Contactar</button>
          <button>Descargar</button>
        </div>
        
      </div>
      
    </div>
  )
}

export default Gig