import React from 'react'
import "./Featured.scss"

const Featured = () => {
  return (
    <div className='featured'>
        <div className='container' >
            <div className='left'>
                <h1>Encuentra los proyectos indicados para hacer de tu idea una realidad!</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="./img/search.png" alt="" />
                        <input type="text" placeholder='Aplicaciones Moviles' />
                    </div>
                    <button>Buscar</button>
                </div>
                <div className='popular'>
                    <span>Popular:</span>
                    <button>Web Desing</button>
                    <button>PHP</button>
                    <button>Base de Datos</button>
                    <button>Angular</button>
                </div>
            </div>
            <div className='right'>
                <img src="./img/man.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Featured